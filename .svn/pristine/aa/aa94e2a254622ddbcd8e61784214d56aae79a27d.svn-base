export default {
  props: {
    defaultSort: null,
  },
  methods: {
    // head上的排序
    dataSort (child) {
      // 后端排序
      if (child.sortable == 'custom') {
        this.$emit('sort-change', child)
      } else {
        // 前端排序
        if (child.order == 'asc') this.data.sort((a, b) => a[child.prop] - b[child.prop])
        else this.data.sort((a, b) => b[child.prop] - a[child.prop])
      }
    }
  }
}
