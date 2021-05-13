export default {
  name: "ix-slider-cell",
  props: {
    cell: null,
  },
  render(){
    const style = {left: this.cell.left + 'px', 'z-index': this.cell.mark ? 1 : 0}
    return (
      <div class='ix-slider_points_item' style={style}>
        <i></i>
        {this.cell.label ? <a style={this.cell.style} on-click={ ($event) => this.$parent.clickMark($event, this.cell)}>{this.cell.label}</a> : null}
      </div>
    )
  }
}
