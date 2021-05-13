import base_range from './base_range'
import {checkSelected} from '#/dateUtil'
/**
 * 选择范围月份
 */
class monthrange extends base_range  {
  constructor(_this) {
    super(_this, 'yyyy-MM')
  }
  loadValue (val) {
    this.picker.thisValue = this.selectDates = [new Date(val[0]).format(this.format), new Date(val[1]).format(this.format)]
  }
  // 初始化Calendar 显示的年份
  initCalendar () {
    let length = 2
    let date
    let list = this.picker.calendarList || []
    for (let i = 0; i < length; i++) {
      date = this.picker.thisValue[i]
      if (date) {
        date = new Date(date)
        // 如果2个日期在同一个月，第2个Calendar月份+1
        if (i > 0 && list[i - 1].month.getFullYear() == date.getFullYear()) {
          date.setFullYear(list[i - 1].month.getFullYear() + 1)
        }
      } else {
        date = new Date()
        date.setFullYear(date.getFullYear() + i)
      }
      if (this.picker.calendarList) {
        list[i].month = date
      } else list.push(this.getDateInfo(null, date))
    }
    this.picker.calendarList = list
    if (this.picker.is_range && this.picker.value) {
      this.picker.$nextTick(() => {
        this.update()
        this.showRangeBG()
      })
    }
  }
  save () {
    this.picker.thisValue = this.selectDates.map(i => i.format(this.format))
    super.save()
  }
  ymChange (_date) {
    this.calendarSelectBase([_date])
  }
  update(){
    checkSelected(this.picker.$refs.ymp, this.selectDates, 'MM_list')
  }
  showRangeBG () {
    this.picker.$refs.ymp.forEach(dp => {
      dp.MM_list.forEach(r => {
        r.in_range = this.selectDates && r.date.getTime() >= new Date(this.selectDates[0]).getTime() && r.date.getTime() <= new Date(this.selectDates[1]).getTime()
      })
    })
  }
}
export default monthrange
