
import BodyTR from "../class/BodyTR";
export default {
  props: {
    // 树形数据默认展开所有
    defaultExpandAll: Boolean,
    treeProps: null,
    lazy: Boolean,
    load: Function
  },
  data () {
    return {
    }
  },
  methods: {
    // 创建树形数据
    checkTree (array, item, i) {
      if (!this.treeProps) return
      const is_children = item[this.treeProps['children']]
      const is_hasChildren = item[this.treeProps['hasChildren']]
      if (!is_children && !is_hasChildren) return
      const parentTR = array[array.length - 1]
      if (is_children) {
        parentTR.tree_visible = this.defaultExpandAll
        parentTR.$children_list = this.createTreeChildren(is_children)
        array.push(...parentTR.$children_list)
      }
      if (is_hasChildren && this.load != null && this.defaultExpandAll && this.lazy) {
        parentTR.loading_tree = true
        this.load(item, (result) => {
          parentTR.loading_tree = false
          parentTR.tree_visible = true
          parentTR.$children_list = this.createTreeChildren(result)
          array.splice(i + 1, 0, ...parentTR.$children_list)
        })
      }
    },
    createTreeChildren (list) {
      const result = []
      list.forEach((v, i) => {
        const tr = []
        this.createDataTR(tr, v, '', i)
        result.push(new BodyTR(tr, true, this.defaultExpandAll, true))
      })
      return result
    },
    td_is_tree (item, j) {
      return j == 0 && this.treeProps && (item[this.treeProps['children']] || item[this.treeProps['hasChildren']])
    },
    // 点击展开树形
    openTree (tr, item, i) {
      if (tr.tree_visible) {
        // 已经展开，关闭
        tr.tree_visible = false
      } else {
        // 展开
        tr.tree_visible = true
      }
      const is_hasChildren = item[this.treeProps['hasChildren']]
      if (is_hasChildren && this.load != null && !tr.$children_list && this.lazy) {
        tr.loading_tree = true
        this.load(item, (result) => {
          tr.loading_tree = false
          tr.$children_list = this.createTreeChildren(result)
          tr.$children_list.forEach(v => v.tree_visible = true)
          this.tbody.splice(i + 1, 0, ...tr.$children_list)
        })
      } else if (tr.$children_list) {
        tr.$children_list.forEach((v, index) => {
          v.tree_visible = tr.tree_visible
        })
      }
    }
  }
}
