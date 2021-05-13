import {checkRange, checkSelected} from '#/dateUtil'

class dateInfo {
  constructor(value, month) {
    this.value = value
    this.month = month
  }
}

// 基类
class base {
  constructor(_this, _format) {
    this.picker = _this
    this.format = _format || _this.get_format
    this.selectDates = null // 多选的选中列表
  }
  getDateInfo (v, m) {
    return new dateInfo(v, m)
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
    dateinfo['value'] = this.picker.thisValue[0] ? new Date(this.picker.thisValue[0]) : null
    dateinfo['month'] = dateinfo['value'] ? dateinfo['value'] : new Date()
  }
  save () {
    this.picker.emit()
    this.picker.showPopup = false
  }
  to (t) {
    if (t) {
      let month = t.indexOf('L_') == 0 ? this.picker.calendarList[0].month : this.picker.calendarList[this.picker.calendarList.length - 1].month
      this.picker.calendarList.forEach((item, i) => {
        let nm = new Date(month)
        switch (t) {
          case 'L_M': // 上月
            nm.setMonth(nm.getMonth() - 1 + i)
            break
          case 'R_M': // 下月
            nm.setMonth(nm.getMonth() + i + (this.picker.is_range ? 0 : 1))
            break
          case 'L_Y': // 上一年
            nm.setFullYear(nm.getFullYear() - 1 + i)
            nm.setMonth(item.month.getMonth())
            break
          case 'R_Y': // 下一年
            nm.setFullYear(nm.getFullYear() + 1 + i)
            nm.setMonth(item.month.getMonth())
            break
        }
        item.month = nm
      })
    }
    this.picker.$nextTick(() => {
      this.update()
      this.showRangeBG()
    })
  }
  update(){
    checkSelected(this.picker.$refs.dp, this.selectDates)
    checkRange(this.picker.$refs.dp)
  }
  ymChange (_date) {
    this.picker.calendarList[0].month = _date
    this.picker.mVisible = false
  }
  showRangeBG () {}
}
export default base
