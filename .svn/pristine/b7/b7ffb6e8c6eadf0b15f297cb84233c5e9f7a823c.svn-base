<template>
  <table class="ix-datepane">
    <thead>
      <tr>
        <th v-for="(item, i) in weekLabel" v-text="item" :key="i"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, i) in rows" :key="i">
        <td v-for="(item, i) in tr" :class="{gary: item.gary, today: item.is_today, this: is_selected(item), noclick: item.no_click, range: item.in_range}">
          <div class="ix-datepane_day" @click="selectDate(item)">{{item.i}}</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  class dateTD {
    constructor(i, value, date, gary, is_today) {
      this.i = i
      this.value = value
      this.date = date
      this.gary = gary
      this.is_today = is_today
      this.in_range = false
      this.no_click = false
      this.is_selected = -1 // 默认-1，只有多选才有值
    }
  }
  // date公共函数
  export default {
    name: 'ix-datepane',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: Date,
        default: null
      },
      today: {
        type: Date,
        default: () => new Date()
      },
      format: {
        type: String,
        default: 'yyyy-MM-dd'
      },
      weekLabel: {
        type: Array,
        default: () => ['日','一','二','三','四','五','六']
      },
      showDate: {
        type: Date,
        default: null
      }
    },
    data () {
      return {
        rows: null,
        thisValue: this.value,
        thisShow: null
      }
    },
    mounted () {
      this.getDateRowFromYM(this.thisValue || this.showDate || this.today || new Date())
    },
    watch: {
      value (v) {
        this.thisValue = v
        if (v) this.changeDate(v)
      },
      showDate (v) {
        if (v) this.changeDate(v)
      }
    },
    computed: {
      is_selected () {
        return (item, a, b) => {
          return !item.gary && (item.is_selected === -1 ? (this.thisValue && this.thisValue.toDateString() == item.date.toDateString()) : item.is_selected === 1)
        }
      }
    },
    methods: {
      selectDate (item) {
        if (item.gary) this.$emit('update:showDate', item.date)
        this.$emit('change', item.date)
        this.$emit('select', item.date)
      },
      changeDate (_date) {
        if (!this.thisShow || this.thisShow.getFullYear() != _date.getFullYear() || this.thisShow.getMonth() != _date.getMonth()) {
          this.getDateRowFromYM(_date)
        }
      },
      /**
       * 获取指天数列表
       * @param Date
       */
      getDateRowFromYM (_date) {
        this.thisShow = _date
        let date = new Date(_date.getFullYear(), _date.getMonth() + 1, 0)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const date_length = date.getDate()
        let date_week = new Date(year, month - 1, 0) // 上月最后一天
        let date_week_length = date_week.getDay() // 上月最后一天是星期几
        let date_prev_date = new Date(year, month - 1, 0).getDate() // 上月有几天
        let date_next = new Date(year, month + 1, 0) // 下个月
        let today_str = this.today.format(this.format) // 今天
        let value_str
        let result = []
        let i = 0
        let time_date = null
        let createObj = (i, value, gary) => {
          value_str = value.format(this.format)
          time_date = new Date(value_str)
          if (result.length == 0 || result[result.length - 1].length == 7) result.push([])
          result[result.length - 1].push(new dateTD(i, value_str, time_date, gary, today_str == value_str))
        }
        // 上月灰色部分
        for (i = date_week_length; i >= 0; i--) {
          date_week.setDate(date_prev_date-i)
          createObj(date_prev_date-i, date_week, true)
        }
        // 本月部分
        for (i = 1; i <=  date_length; i++) {
          date.setDate(i)
          createObj(i, date, false)
        }
        // 下月灰色部分
        for (i = 0; i <  42 - date_length - date_week_length - 1; i++) {
          date_next.setDate(i + 1)
          createObj(i + 1, date_next, true)
        }
        this.rows = result
      }
    }
  }
</script>
