import base_range from './base_range'
/**
 * 选择范围日期
 */
class daterange extends base_range {
  loadValue (val) {
    this.picker.thisValue = this.selectDates = [new Date(val[0]).format(this.format), new Date(val[1]).format(this.format)]
    this.picker.inputValue = [this.picker.thisValue[0].split(' ')[0], this.picker.thisValue[1].split(' ')[0]]
    if (this.picker.has_time) {
      this.picker.timeValue = [this.picker.thisValue[0].split(' ')[1], this.picker.thisValue[1].split(' ')[1]]
    }
  }
  save () {
    const stime = new Date(this.picker.inputValue[0] + (this.picker.has_time ? ' ' + this.picker.timeValue[0] : '')).format(this.format)
    const etime = new Date(this.picker.inputValue[1] + (this.picker.has_time ? ' ' + this.picker.timeValue[1] : '')).format(this.format)
    this.picker.thisValue = [stime, etime]
    super.save()
  }
}
export default daterange
