class filter {
  constructor(list, checkedItems) {
    this.list = list
    this.checkedItems = checkedItems
  }
}
export default {
  data () {
    return {
      filterList: null, // 过滤器列表
    }
  },
  methods: {
    // 校验是否启用了筛选
    checkFilter (item) {
      if (item.filter) {
        this.filterList = this.filterList ? this.filterList : {}
        if (this.filterList[item.prop]) {
          this.filterList[item.prop].list.includes(item[item.prop]) ? null : this.filterList[item.prop].list.push(item[item.prop])
        } else {
          this.filterList[item.prop] = new filter([item[item.prop]], [])
        }
      }
    },
    clearFilter () {
      this.filterList = null
    },
    // 点击筛选 选项时
    filterChange () {
      this.tbody.forEach((v, vi) => {
        let included = true
        v.list.forEach(item => {
          const porp = this.filterList[item.prop]
          if (porp && porp.checkedItems.length > 0 && !porp.checkedItems.includes(item[item.prop])) included = false
        })
        v.filter_visible = included
      })
    }
  }
}
