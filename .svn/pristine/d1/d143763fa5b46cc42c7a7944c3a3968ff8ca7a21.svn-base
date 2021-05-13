import base from './base'
/**
 * 选择单个日期
 */
class date extends base{
  loadValue (val) {
    this.picker.thisValue = [new Date(val).format(this.picker.get_format), '']
    this.picker.inputValue = [this.picker.thisValue[0].split(' ')[0], null]
    if (this.picker.has_time) {
      this.picker.timeValue = [this.picker.thisValue[0].split(' ')[1], null]
    }
  }
  calendarSelectBase (dates, i) {
    let date = dates[0]
    this.picker.inputValue[0] = date.format(this.picker.get_format).split(' ')[0]
    this.picker.thisValue[0] = new Date(this.picker.inputValue[0] + (this.picker.has_time ? ' ' + this.picker.timeValue[0] : '')).format(this.picker.get_format)
    this.picker.emit()
    this.picker.showPopup = false
  }
}
export default date
