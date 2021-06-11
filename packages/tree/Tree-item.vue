<template>
    <div>
      <a ref="tree_item" class="ix-tree-item" @click="clickItem"
         :draggable="rootTree.draggable"
         @dragstart.stop="handleDragStart"
         @dragover.stop="handleDragOver"
         @dragend.stop="handleDragEnd"
         @drop.stop="handleDrop">
        <i class="ix-icon-tree" :class="{'is-reverse90': data.tree_item_visible, 'ix-icon-loading': data.tree_loading, 'hidden': !tree_icon_visible}"></i>
        <ix-checkbox v-if="rootTree.showCheckbox" v-model="data.tree_checked" @change.native="checkBox" @click.native.stop="()=>{}" :disabled="data.disabled"></ix-checkbox>
        <NodeContent :node="data"></NodeContent>
      </a>
      <ix-collapse-transition>
        <div ref="tree_group" class="ix-tree-group" v-if="has_children" v-show="data.tree_item_visible">
          <tree-item v-for="(child, i) in data[rootTree.childrenProp]" :key="i" :data="child"></tree-item>
        </div>
      </ix-collapse-transition>
    </div>
</template>

<script>
  import IxCollapseTransition from '#/collapse-transition'
  export default {
    name: "tree-item",
    inject: ['rootTree'],
    components: {
      IxCollapseTransition,
      NodeContent: {
        props: {
          node: {
            required: true
          }
        },
        render(h) {
          return (
            this.node.slot ? this.node.slot : <span>{this.node.label}</span>
          );
        }
      }
    },
    props: {
      data: null
    },
    computed: {
      tree_icon_visible () {
        return this.has_children || (this.rootTree.lazy && this.data.tree_no_null)
      },
      has_children () {
        return this.data[this.rootTree.childrenProp] && this.data[this.rootTree.childrenProp].length > 0
      }
    },
    data () {
      return {
      }
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
      // 点击展开收起
      clickItem () {
        this.data.tree_item_visible = !this.data.tree_item_visible
        if (this.data.tree_item_visible && !this.has_children && this.rootTree.is_load_lazy) {
          this.rootTree.loadLazy({level: this.data.level, data: this.data}, (result) => {
            this.data[this.rootTree.childrenProp] = result
            if (result) result.forEach(v => v.parent = this.data)
          })
        }
        this.rootTree.$emit('node-click', this.data)
      },
      // 选中多选框时
      checkBox () {
        this.rootTree.updateItemChecked(this.data)
        this.rootTree.$emit('check-change', this.data, this.getCheckedItems())
      },
      // 获取选中的ID列表
      getCheckedItems () {
        const result = []
        const func = (list) => {
          list.forEach(v => {
            if (v.tree_checked) result.push(v[this.rootTree.idProp] || v[this.rootTree.labelProp])
            if (v[this.rootTree.childrenProp]) func(v[this.rootTree.childrenProp])
          })
        }
        func(this.rootTree.dataList)
        return result
      },
      handleDragStart(event) {
        if (!this.rootTree.draggable) return;
        this.rootTree.$emit('tree-node-drag-start', event, this);
      },
      handleDragOver(event) {
        if (!this.rootTree.draggable) return;
        this.rootTree.$emit('tree-node-drag-over', event, this);
        event.preventDefault();
      },
      handleDrop(event) {
        event.preventDefault();
      },
      handleDragEnd(event) {
        if (!this.rootTree.draggable) return;
        this.rootTree.$emit('tree-node-drag-end', event, this);
      }
    }
  }
</script>

