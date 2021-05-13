<template>
  <div class="ix-tree">
    <TreeItem v-for="(child, i) in dataList" :key="i" :data="child"></TreeItem>
    <div v-show="showDropIndicator"
      class="ix-tree__drop-indicator"
      ref="dropIndicator">
    </div>
  </div>
</template>

<script>
  import TreeItem from './Tree-item'
  import drag from './drag'
  import Node from './Node'
  export default {
    name: "ix-tree",
    components: {TreeItem},
    mixins:[drag],
    props: {
      data: {
        type: Array
      },
      props: {
        type: Object,
        default: {
          children: 'children',
          label: 'label',
          id: 'id'
        }
      },
      lazy: Boolean,
      load: Function,
      showCheckbox: Boolean,
      defaultExpandAll: Boolean,
      defaultExpandedKeys: Array,
      defaultCheckedKeys: Array,
      draggable: Boolean,
      allowDrop: Function,
      allowDrag: Function,
    },
    provide () {
      return {
        rootTree: this
      }
    },
    data () {
      return {
        dataList: null,
        showDropIndicator: false
      }
    },
    watch: {
      data: {
        deep: true,
        handler: function (v) {
          // console.log('data change', v)
          this.loadList()
        }
      }
    },
    computed: {
      childrenProp () {
        return this.props.children
      },
      labelProp () {
        return this.props.label
      },
      idProp () {
        return this.props.id
      },
      is_load_lazy () {
        return this.lazy && this.load != null
      }
    },
    mounted() {
      this.loadList()
    },
    methods: {
      loadList () {
        if (!this.data || this.data.length == 0) {
          this.dataList = null
          if (this.is_load_lazy) this.loadLazy({level: 0, data: {}}, (result) => this.dataList = result)
          return
        }
        this.dataList = this.formatTreeData(this.data, [], 0)
      },
      formatTreeData (list, p_array, level) {
        if (!list) return null
        level ++
        list.forEach(data => {
          if (p_array) p_array.push(this.createTreeNode(data, this.formatTreeData(data[this.childrenProp], [], level + 1), level))
        })
        return p_array
      },
      createTreeNode (data, clist, level) {
        const node = Object.assign(new Node(
          this.defaultExpandAll || (this.defaultExpandedKeys && this.defaultExpandedKeys.includes(data[this.props.id])),
          true,
          false,
          level,
          this.defaultCheckedKeys && this.defaultCheckedKeys.includes(data[this.props.id]) ? true : false,
          null
        ), data)
        node.slot = this.$slots.default || (this.$scopedSlots.default && this.$scopedSlots.default({data, node}))
        node.label = data.label || data[this.labelProp]
        node[this.childrenProp] = clist
        if (clist) clist.forEach(v => v.parent = node)
        return node
      },
      // 加载后台数据
      loadLazy (node, loaded) {
        node.data.tree_loading = true
        this.load(node, (result) => {
          node.data.tree_loading = false
          node.data.tree_no_null = result && result.length > 0
          loaded(this.formatTreeData(result, [], node.level))
        })
      },
      // 外部调用：设置选中的项
      setCheckedKeys (checkeds) {
        const includes = []
        const func = (list) => {
          list.forEach(v => {
            v.tree_checked = checkeds.includes(v[this.props.id])
            if (v.tree_checked) includes.push(v)
            if (v[this.childrenProp]) func(v[this.childrenProp])
          })
        }
        func(this.dataList)
        includes.forEach(v => this.updateItemChecked(v))
      },
      // 更新子项父级 子级的选中状态
      updateItemChecked (data) {
        // 更新子级的选中
        if (data[this.childrenProp] && data[this.childrenProp].length > 0) {
          const func_low = (list) => {
            list.forEach(v => {
              v.tree_checked = data.tree_checked
              if (v[this.childrenProp]) func_low(v[this.childrenProp])
            })
          }
          func_low(data[this.childrenProp])
        }
        // 更新父级的选中
        if (data.parent) {
          const func_up = (_parent) => {
            _parent.tree_checked = _parent[this.childrenProp] && _parent[this.childrenProp].some(v => v.tree_checked)
            if (_parent.parent) func_up(_parent.parent)
          }
          func_up(data.parent)
        }
      },
      // 外部调用：获取data, 通过dataList转换
      getData () {
        const data = []
        const keys = Object.keys(new Node())
        const func = (list, target) => {
          list.forEach(v => {
            const _node = {}
            Object.keys(v).forEach(c => {
              if (!keys.includes(c)) _node[c] = v[c]
            })
            target.push(_node)
            if (v[this.childrenProp]) {
              _node[this.childrenProp] = []
              func(v[this.childrenProp], _node[this.childrenProp])
            }
          })
        }
        func(this.dataList, data)
        return data
      }
    }
  }
</script>

