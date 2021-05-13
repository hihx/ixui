import { addClass, removeClass } from '#/dom';
export default {
  data () {
    return {
      draggingNode: null,
      dropNode: null,
      dropType: null
    }
  },
  created() {
    this.$on('tree-node-drag-start', this.handleDragStart)
    this.$on('tree-node-drag-over', this.handleDragOver)
    this.$on('tree-node-drag-end', this.handleDragEnd)
  },
  beforeDestroy() {
    this.$off('tree-node-drag-start', this.handleDragStart)
    this.$off('tree-node-drag-over', this.handleDragOver)
    this.$off('tree-node-drag-end', this.handleDragEnd)
    this.draggingNode = null
  },
  methods: {
    // 当单击下鼠标，并移动之后执行
    handleDragStart (e, treeNode) {
      if (typeof this.allowDrag === 'function' && !this.allowDrag(treeNode)) {
        e.preventDefault();
        return false;
      }
      this.draggingNode = treeNode
      this.$emit('node-drag-start', treeNode.data, e);
     // console.log('dragstart', treeNode.data.label)
    },
    // 当拖拽的元素的标记在进入的Dom元素上移动时触发，在自身移动时也会触发。
    handleDragOver (e, treeNode) {
     // console.log('dragover', e, treeNode.data.label, this.draggingNode.data.label)
      let dropPrev = true;
      let dropInner = true;
      let dropNext = true;
      let userAllowDropInner = true;
      if (typeof this.allowDrop === 'function') {
        dropPrev = this.allowDrop(this.draggingNode, treeNode, 'prev');
        userAllowDropInner = dropInner = this.allowDrop(this.draggingNode, treeNode, 'inner');
        dropNext = this.allowDrop(this.draggingNode, treeNode, 'next');
      }
      this.dropNode = treeNode
      const _top = this.dropNode.$el.getBoundingClientRect().top
      const _height = this.dropNode.$el.querySelector('.ix-tree-item').offsetHeight
      if (e.clientY >= _top + _height * 0.6 && dropPrev) this.dropType = 'after'
      else if (e.clientY >= _top + _height * 0.3 && userAllowDropInner) this.dropType = 'inner'
      else if (dropNext) this.dropType = 'before'
      else {
        this.dropType = null
        return
      }

      this.showDropIndicator = this.dropType != 'inner'
      const dropIndicator = this.$refs.dropIndicator;
      let indicatorTop = -9999
      const _top_top = this.$el.getBoundingClientRect().top;
      if (this.dropType === 'before') {
        indicatorTop = _top - _top_top;
      } else if (this.dropType === 'after') {
        indicatorTop = _top - _top_top + _height;
      }
      dropIndicator.style.top = indicatorTop + 'px';
      dropIndicator.style.left = (this.$el.offsetWidth - this.dropNode.$el.offsetWidth) + 'px';
      if (this.dropType === 'inner') {
        addClass(this.dropNode.$el, 'is-drop-inner');
      } else {
        removeClass(this.dropNode.$el, 'is-drop-inner');
      }

      this.$emit('node-drag-over', this.draggingNode.data, this.dropNode.data, e);
      //console.log(this.dropType, treeNode.$el.offsetHeight, e.clientY, treeNode.$el.getBoundingClientRect().top)
    },
    // 当拖拽行为结束，也就是松开鼠标的时候触发。
    handleDragEnd (e, treeNode) {
      //console.log('dragend', e, this.dropNode.data.label, this.draggingNode.data.label)
      e.preventDefault();
      this.showDropIndicator = false
      removeClass(this.dropNode.$el, 'is-drop-inner');
      if (!this.dropType || this.dropNode == this.draggingNode) {
        this.$emit('node-drag-end', this.draggingNode.data, null, null, e);
        return
      }

      const _parent = this.dropNode.data.parent ? this.dropNode.data.parent : null
      const child_parent = (_parent ? this.dropNode.data.parent[this.childrenProp] : this.dataList) || []
      if (this.dropType === 'before') {
        child_parent.splice(child_parent.length == 0 ? 0 : child_parent.indexOf(this.dropNode.data), 0, this.draggingNode.data)
      } else if (this.dropType === 'after') {
        child_parent.splice(child_parent.length == 0 ? 0 : child_parent.indexOf(this.dropNode.data) + 1, 0, this.draggingNode.data)
      } else if (this.dropType === 'inner') {
        const children = this.dropNode.data[this.childrenProp] || []
        children.splice(children.length, 0, this.draggingNode.data)
        this.dropNode.data[this.childrenProp] = children
      }
      const dragging_parent = this.draggingNode.data.parent ? this.draggingNode.data.parent[this.childrenProp] : this.dataList
      dragging_parent.splice(dragging_parent.indexOf(this.draggingNode.data), 1)
      if (child_parent.length > 0 && _parent) this.dropNode.data.parent[this.childrenProp] = child_parent

      this.$emit('node-drag-end', this.draggingNode.data, null, this.dropType, e);
      this.$emit('node-drop', this.draggingNode.data, this.dropNode.data, this.dropType, e);
    }
  }
}
