import base from './base'
/**
 * 选择单个月份
 */
class month extends base {
  constructor(_this) {
    super(_this, 'yyyy-MM')
  }
  loadValue (val) {
    this.picker.thisValue = [new Date(val).format(this.format), '']
  }
  calendarSelectBase (dates, i) {
  }
  ymChange (_date) {
    this.picker.thisValue = [_date.format(this.format)]
    this.picker.calendarList[0].value = _date
    this.picker.emit()
    this.picker.showPopup = false
  }
}
export default month
