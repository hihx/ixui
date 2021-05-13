export default {
  props: {
    showSummary: Boolean,
    summaryMethod: Function
  },
  methods: {
    createSumFoot () {
      if (!this.showSummary) return
      if (this.summaryMethod != null) {
        this.tfoot = this.summaryMethod({columns:this.headData, data:this.formatTbody()})
        return
      }
      const sums = ['总计']
      this.tbody.forEach((tr, i) => {
        tr.list.forEach((td, j) => {
          if (j > 0) {
            const num = Number(td[td.prop])
            if (isNaN(num)) sums[j] = ''
            else sums[j] = (Number(sums[j]) || 0) + num
          }
        })
      })
      this.tfoot = [sums]
    },
    // tbody还原回data结构，包含children
    formatTbody () {
      const data = []
      this.tbody.forEach((tr, i) => {
        const obj = {}
        tr.list.forEach((td, j) => {
          obj[td.prop] = td[td.prop]
        })
        data.push(obj)
      })
      return data
    }
  }
}
