import dates from './dates'
import {checkSelected} from '#/dateUtil'
/**
 * 选择多个月份
 */
class months extends dates {
  constructor(_this) {
    super(_this, 'yyyy-MM')
  }
  ymChange (_date) {
    this.calendarSelectBase([_date])
  }
  update(){
    checkSelected(this.picker.$refs.ymp, this.selectDates, 'MM_list')
  }
}
export default months
