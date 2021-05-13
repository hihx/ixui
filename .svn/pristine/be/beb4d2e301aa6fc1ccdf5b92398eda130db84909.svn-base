import base from './base'
/**
 * 选择多个日期
 */
class dates extends base{
  loadValue (val) {
    this.picker.thisValue = this.selectDates = val.map((item) => { return  new Date(item).format(this.picker.get_format)})
  }
  // 初始化Calendar 显示的月份
  initCalendar () {
    let dateinfo
    if (this.picker.calendarList) {
      dateinfo = this.picker.calendarList[0]
    } else {
      dateinfo = this.getDateInfo()
      this.picker.calendarList = [dateinfo]
    }
    const v = this.picker.thisValue[0] ? new Date(this.picker.thisValue[0]) : null
    dateinfo['month'] = v ? v : new Date()
    if (this.picker.value) {
      this.picker.$nextTick(() => {
        this.update()
      })
    }
  }
  calendarSelectBase (dates, i) {
    const date = dates[0]
    if (!this.selectDates) this.selectDates = [date.format(this.format)]
    else if (this.selectDates.some(i => new Date(i).toDateString() == date.toDateString())){
      this.selectDates = this.selectDates.filter(i => new Date(i).toDateString() != date.toDateString())
    } else {
      this.selectDates.push(date.format(this.format))
    }
    this.picker.thisValue = this.selectDates
    this.update()
    this.picker.emit()
  }
}
export default dates
