export default {
  name: "ix-table-cell",
  props: {
    cell: null,
    formatter: null
  },
  render(){
    return (
      <div class='cell'>
      {
        this.$slots.prepend
      }
      { this.cell.slot ? this.cell.slot : (this.formatter != null ? this.formatter(this.cell) : this.cell.label)}
      {
        this.$slots.default
      }
      </div>)
  }
}
