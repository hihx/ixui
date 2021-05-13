// thead的th类
class HeadTH {
  constructor(order, colspan, slot, children, parent, level) {
    this.order = order
    this.colspan = colspan
    this.slot = slot
    this.children = children
    this.parent = parent
    this.level = level
    this.rowspan = 0
    this.is_filter = false // 是否处于筛选状态
  }
}
export default HeadTH
