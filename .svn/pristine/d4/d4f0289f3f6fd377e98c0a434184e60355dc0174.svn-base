import {checkSlotChange} from "#/util";
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableFoot from './TableFoot'
import TFilter from "./ex/table-filter";
import TSelection from "./ex/table-selection";
import TSort from "./ex/table-sort";
import TTree from "./ex/table-tree";
import BodyTR from "./class/BodyTR";
import HeadTH from "./class/HeadTH";
import TSum from "./ex/table-sum";

export default {
  name: "ix-table",
  mixins: [TFilter, TSelection, TSort, TTree, TSum],
  components: {TableHead, TableBody, TableFoot},
  props: {
    data: {
      type: Array,
      default: null
    },
    stripe: Boolean,
    border: Boolean,
    rowClassName: {
      type: Function,
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    maxHeight: {
      type: [Number, String],
      default: null
    },
    spanMethod:Function
  },
  data () {
    return {
      heads: null,
      headData: null,
      thead: null,
      tbody: null,
      tfoot: null,
      tdWidth: null,
      thead_width_diff: 0, // 有滚动条时head td宽度差额
      thead_height_diff: 0, // 有滚动条时head td高度差额
      fixedList: [], // 固定列
      leftScrollEnd: true,
      rightScrollEnd: false,
    }
  },
  watch: {
    data (v) {
      if (v) this.updateBodys()
      else this.tbody = null
    }
  },
  computed: {
    height_style () {
      return {height: this.height ? this.height + 'px' : null, maxHeight: this.maxHeight ? this.maxHeight + 'px' : null}
    },
    head_width () {
      return (item, i) => {
        return parseFloat(item) - (this.tdWidth && this.tdWidth.length == i + 1 ? this.thead_width_diff : 0)
      }
    },
    hasFixedLeft () {
      return this.headData && this.headData[0].fixed
    },
    hasFixedRight () {
      return this.headData && this.headData.length > 1 && this.headData[this.headData.length - 1].fixed
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
    this.$refs.table_body.addEventListener('scroll', this.tbodyScroll)
  },
  beforeDestroy() {
    this.$refs.table_body.removeEventListener('scroll', this.tbodyScroll)
    this.clearfixedList()
  },
  methods: {
    init () {
      this.update()
    },
    // 首先处理表头slot数据
    updateHeads () {
      const _headData = []
      const array = []
      let maxLevel = 0 // 表头最大层级
      this.multipleRow = false // 是否开启了多选
      const func_heads = (clist, plist, parent_th) => {
        clist.forEach((item, i) => {
          let tr = []
          if (item.$options.name == 'ix-table-column') {
            // 表头单列对象
            let th = Object.assign(
              new HeadTH(
                this.defaultSort ? (this.defaultSort['prop'] == item.prop ? this.defaultSort['order'] : null) : null,
                item.$children.length || 1,
                item.$slots.header || (item.$scopedSlots.header ? item.$scopedSlots.header({$index: i, row: item}) : null),
                tr,
                parent_th,
                (parent_th ? parent_th.level + 1 : 0)),
              item.$props)
            if (item.type == 'selection') this.multipleRow = true
            maxLevel = th.level + 1
            plist.push(th)
            item.index = i
            if (item.$children.length > 0 && item.$children[0].$options.name == 'ix-table-column') {
              // 还有下级
              func_heads(item.$children, tr, th)
            } else {
              // 无下级
              _headData.push(item)
            }
          }
        })
      }

      // 把dom结构解析成数组array
      func_heads(this.heads, array)

      const thead = []
      // 处理colspan rowspan
      const func_get_thead = (v) => {
        if (v.parent) v.parent.colspan += v.colspan - 1
        if (v.children.length > 0) v.rowspan = 1
        else v.rowspan = maxLevel - v.level
        v.children.forEach((c) => {
          func_get_thead(c)
        })
        if (!thead[v.level]) thead[v.level] = []
        thead[v.level].push(v)
      }

      const func_to_table = () => {
        array.forEach(v => {
          func_get_thead(v)
        })
      }

      // 数组array生成table head结构
      func_to_table()
      // 清除不用的parent参数
      thead.forEach(v => v.forEach(t => t.parent = null))
      this.thead = thead
      this.headData = _headData
      this.clearSlot()
      if (this.defaultSort) this.dataSort(this.defaultSort)
    },
    // 生成body数据
    updateBodys () {
      const array = []
      this.clearFilter()
      this.data.forEach((item, i) => {
        const tr = []
        const r_class = [
          this.rowClassName != null ? this.rowClassName(item, i) : '',
          (this.stripe && i%2!=0) ? 'ix-stripe' : ''
        ]
        array.push(new BodyTR(tr))
        this.checkTree(array, item, i)
        this.createDataTR(tr, item, r_class.join(' '), i)
      })
      this.tbody = array
      this.createSumFoot()
      this.$nextTick(() => {
        this.calcTDwidth()
      })
    },
    // 创建数据行
    createDataTR (tr, item, className, i) {
      this.headData.forEach((hd, j) => {
        const slot = hd.$scopedSlots.default ? hd.$scopedSlots.default({$index: i, row: item}) : hd.$slots.default
        const obj = Object.assign({className: className, slot: slot, $index: i}, item, hd.$props)
        let canAdd = true
        if (this.spanMethod != null) {
          const span = this.spanMethod({ row: item, column:obj, rowIndex: i, columnIndex: j })
          if (span) {
            obj.colspan = Array.isArray(span) ? span[1] : span['colspan']
            obj.rowspan = Array.isArray(span) ? span[0] : span['rowspan']
            if (obj.colspan == 0 && obj.rowspan == 0) canAdd = false
          }
        }
        if (canAdd) {
          tr.push(obj)
          this.checkFilter(obj)
        }
      })
    },
    // 根据body td自适应宽度，来设置head th的宽度
    calcTDwidth () {
      let array
      let width_total = 0
      let tds = this.$refs.table_body.querySelectorAll('tr:first-child td')
      tds.forEach((td, i) => {
        if (!array) array = []
        width_total += td.offsetWidth
        if (td.colSpan > 1) {
          for (let j = 0; j < td.colSpan; j++) {
            array.push(this.headData[i].width ? this.headData[i].width : td.offsetWidth / td.colSpan)
          }
        } else array.push(this.headData[i].width ? this.headData[i].width : td.offsetWidth)
      })
      this.tdWidth = array
      this.$nextTick(() => {
        this.thead_width_diff = this.$refs.table_body.offsetWidth - this.$refs.table_body.clientWidth
        this.thead_height_diff = this.$refs.table_body.offsetHeight - this.$refs.table_body.clientHeight
        this.copyFixedCol()
      })
    },
    // 处理固定列
    copyFixedCol () {
      const func = (view, i) => {
        view.style.bottom = this.thead_height_diff + 'px'
        view.style.width = (this.tdWidth ? this.tdWidth[i] : 0) + 'px'
      }
      this.clearfixedList()
      // 组装左固定列
      if (this.hasFixedLeft) {
        func(this.$refs.fixed_left, 0)
        this.$refs.fixed_left_body.style.height = (this.$refs.table_body.offsetHeight - this.thead_height_diff) + 'px'
        this.fixedList.push(this.$refs.fixed_left_body)
      }
      // 组装右固定列
      if (this.hasFixedRight) {
        func(this.$refs.fixed_right, this.headData.length - 1)
        this.$refs.fixed_right.childNodes.forEach(i => {
          i.scrollLeft = this.$refs.table_head.scrollWidth
        })
        this.$refs.fixed_right.style.right = this.thead_width_diff + 'px'
        this.$refs.fixed_right_body.style.height = (this.$refs.table_body.offsetHeight - this.thead_height_diff) + 'px'
        this.fixedList.push(this.$refs.fixed_right_body)
        this.$refs.fixed_patch.style.width = this.thead_width_diff + 'px'
        this.$refs.fixed_patch.style.height = this.$refs.table_head.offsetHeight + 'px'
      }
    },
    // 更新数据后调用
    update () {
      checkSlotChange(this, 'heads', 'ix-table-column').then(__=>{
        this.updateHeads()
        if (this.data) this.updateBodys()
        else this.tbody = null
      }).catch(__=>{})
    },
    // body滚动时，head foot同步滚动
    tbodyScroll (e) {
      this.$refs.table_head.scrollLeft = this.$refs.table_foot.scrollLeft = this.$refs.table_body.scrollLeft
      this.fixedList.forEach(i => i.scrollTop = this.$refs.table_body.scrollTop)
      // console.log('xxxx', this.$refs.table_body.scrollTop, this.$refs.fixed_right_body.scrollTop)
      this.leftScrollEnd = this.$refs.table_body.scrollLeft == 0
      this.rightScrollEnd = this.$refs.table_body.scrollLeft >= this.$refs.table_body.scrollWidth - this.$refs.table_body.offsetWidth
    },
    // 清除默认slot
    clearSlot () {
      this.$slots.default.forEach(dom => {
        if (dom.elm) this.$el.removeChild(dom.elm)
      })
    },
    clearfixedList () {
      this.fixedList = []
    },
    // 鼠标移上，tr变色，同步到固定列
    hoverItem (i) {
      this.$refs.tb_main.setHover(i)
      if (this.$refs.tb_left) this.$refs.tb_left.setHover(i)
      if (this.$refs.tb_right) this.$refs.tb_right.setHover(i)
    },
  },
  updated() {
    this.update()
  }
}
