import base from './base'
/**
 * 范围选择基类
 */
class base_range extends base{
  constructor(_this, _format) {
    super(_this, _format)
  }
  // 初始化Calendar 显示的月份
  initCalendar () {
    let length = 2
    let date
    let list = this.picker.calendarList || []
    for (let i = 0; i < length; i++) {
      date = this.picker.thisValue[i]
      if (date) {
        date = new Date(date)
        // 如果2个日期在同一个月，第2个Calendar月份+1
        if (i > 0 && list[i - 1].month.getMonth() == date.getMonth()) {
          date.setMonth(list[i - 1].month.getMonth() + 1)
        }
      } else {
        date = new Date()
        date.setMonth(date.getMonth() + i)
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
  calendarSelectBase (dates, i) {
    let date = dates[0]
    this.picker.clickRange ++
    if (this.picker.clickRange == 2) {
      // 点了2次
      this.picker.clickRange = 0
      this.selectDates.push(date)
      this.picker.inputValue = this.getCalendarValue()
      // 不用选时间的话 自动保存
      if (!this.picker.has_time) this.save()
    } else {
      // 范围最多只能选2个点，多了就清空之前的选中
      this.selectDates = [date]
    }
    this.picker.$nextTick(() => {
      this.update()
      this.showRangeBG()
    })
  }
  // 获取多个Calendar的2个范围值
  getCalendarValue () {
    let array = []
    this.selectDates.forEach(i => {
      array.push(new Date(i).format(this.format).split(' ')[0])
    })
    const sort = (d1, d2) => { return new Date(d1).getTime() - new Date(d2).getTime() }
    array.sort(sort)
    this.selectDates.sort(sort)
    return array
  }
  showRangeBG () {
    this.picker.$refs.dp.forEach(dp => {
      dp.rows.forEach(row => {
        row.forEach(r => {
          r.in_range = !r.gary && this.selectDates && r.date.getTime() >= new Date(this.selectDates[0]).getTime() && r.date.getTime() <= new Date(this.selectDates[1]).getTime()
        })
      })
    })
  }
}
export default base_range
