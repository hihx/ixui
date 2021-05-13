export default {
  props: {
    highlightCurrentRow: Boolean,
  },
  data () {
    return {
      selectedRows: null, // 选中的数组
      multipleRow: Boolean, // 是否有多选
    }
  },
  methods: {
    // 单选：鼠标点击选中时
    clickItem (i) {
      if (!this.highlightCurrentRow) return
      if (i == null || (this.selectedRows && this.selectedRows[0] == i)) this.selectedRows = null
      else this.selectedRows = [i]
      this.emitSelected()
    },
    // 多选
    clickItemMul (type, value) {
      if (!this.multipleRow || !this.data) return
      if (type == 'all') {
        this.selectedRows = value ? this.data.map((v, i) => i) : null
        this.setRefsFunc('tb', 'checkedItems', this.selectedRows)
      } else {
        this.selectedRows = value
        this.setRefsFunc('th', 'checkedItem', this.selectedRows && this.selectedRows.length == this.data.length)
      }
      this.emitSelected()
    },
    setRefsFunc (key, parm, value) {
      this.$refs[key + '_main'][parm] = value
      if (this.$refs[key + '_left']) this.$refs[key + '_left'][parm] = value
      if (this.$refs[key + '_right']) this.$refs[key + '_right'][parm] = value
    },
    // 选中回调函数
    emitSelected () {
      if (this.selectedRows) {
        this.$emit(
          'selection-change',
          this.highlightCurrentRow ? this.data[this.selectedRows[0]] : this.selectedRows.map(v => this.data[v]),
          this.highlightCurrentRow ? this.selectedRows[0] : this.selectedRows
        )
      } else {
        this.$emit('selection-change', null, null)
      }
    },
    // 设置选中，外部调用
    setSelection (item) {
      if (this.highlightCurrentRow) this.clickItem(item)
      else if (this.multipleRow) this.clickItemMul(null, item)
    }
  }
}
