<template>
  <div class="ix-YMpane">
    <div class="ix-YMpane_yyyy" v-show="yVisible">
      <div class="ix-YMpane_bar flex">
        <a class="ix-link ix-icon-arrow-left" @click="to_yyyy('L')"></a>
        <i class="f1"></i>
        <a class="ix-link" @click="clickLabel(0)" v-text="yyyy_label[0] + '年 - ' + yyyy_label[1] + '年'"></a>
        <i class="f1"></i>
        <a class="ix-link ix-icon-arrow-right" @click="to_yyyy('R')"></a>
      </div>
      <a class="ix-link" v-for="(item, i) in yyyy_list" :key="i" @click="to_yyyy(item.i)" v-text="item.i"
         :class="{this: is_y_selected(item), range: item.in_range}"></a>
    </div>
    <div class="ix-YMpane_MM" v-show="mVisible">
      <div class="ix-YMpane_bar flex">
        <a class="ix-link ix-icon-arrow-left" @click="to_MM('L')"></a>
        <i class="f1"></i>
        <label v-if="multiple" v-text="MM_yyyy + '年'"></label>
        <a v-else class="ix-link" @click="clickLabel(1)" v-text="MM_yyyy + '年'"></a>
        <i class="f1"></i>
        <a class="ix-link ix-icon-arrow-right" @click="to_MM('R')"></a>
      </div>
      <a class="ix-link" v-for="(item, i) in MM_list" :key="i" @click="to_MM(i, item)" v-text="item.i"
         :class="{this: is_m_selected(item), range: item.in_range}"></a>
    </div>
  </div>
</template>

<script>

  class month {
    constructor(i, value, date) {
      this.i = i
      this.value = value
      this.date = date
      this.in_range = false
      this.no_click = false
      this.is_selected = -1 // 默认-1，只有多选才有值
    }
  }

export default {
  name: 'ix-YMpane',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [Date],
      default: null
    },
    range: {
      type: Array,
      default: null
    },
    monthLabel: {
      type: Array,
      default: () => ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    format: {
      type: String,
      default: 'yyyy-MM'
    },
    yVisible: {
      type: Boolean,
      default: false
    },
    mVisible: {
      type: Boolean,
      default: false
    },
    showDate: {
      type: Date,
      default: null
    },
    multiple: false
  },
  data () {
    return {
      thisValue: null,
      yyyy_list: null,
      yyyy_label: [null, null],
      MM_list: null,
      MM_yyyy: null,
      thisShow: null,
      onlyMonth: this.mVisible // 默认月份为显示：只有月份选择
    }
  },
  mounted () {
    this.thisValue = this.value
    this.changeDate(this.thisValue || this.showDate || new Date())
    if (this.onlyMonth) this.get_MM_list()
  },
  watch: {
    value (v, o) {
      this.thisValue = v
      if (v) this.changeDate(v)
    },
    // 显示选择年界面
    yVisible (v) {
      if (v) {
        this.get_yyyy_list()
      }
    },
    // 显示选择月界面
    mVisible (v) {
      if (v) {
        this.get_MM_list()
      }
    },
    monthSelect (v) {
      if (v) {
        // console.log('xxx222', v.format())
        // this.getDateFromMon(v.getFullYear(), v.getMonth() + 1)
      }
    },
    showDate (v) {
      if (v) this.changeDate(v)
    }
  },
  computed: {
    is_y_selected () {
      return (item) => {
        return (item.is_selected === -1 ? (this.thisValue && this.thisValue.getFullYear() == item.date.getFullYear()) : item.is_selected === 1)
      }
    },
    is_m_selected () {
      return (item) => {
        return (item.is_selected === -1 ? (
          this.MM_yyyy == item.date.getFullYear() &&
          this.thisValue &&
          this.thisValue.getFullYear() == item.date.getFullYear() &&
          this.thisValue.getMonth() == item.date.getMonth()) : item.is_selected === 1)
      }
    }
  },
  methods: {
    emitUpdate (key, value) {
      this.$emit('update:' + key, value)
    },
    clickLabel (i) {
      if (i == 0) this.emitUpdate('yVisible', false)
      else this.emitUpdate('mVisible', false)
    },
    changeDate (_date) {
      if (!this.thisShow || this.thisShow.getFullYear() != _date.getFullYear() || this.thisShow.getMonth() != _date.getMonth()) {
        this.thisShow = _date
        if (this.yVisible) this.get_yyyy_list()
        else if (this.mVisible) this.get_MM_list()
      }
    },
    selectDate (_date) {
      this.$emit('select', _date)
    },
    get_yyyy_list (y_date) {
      y_date = y_date ? y_date : this.thisShow
      // 校验设置了选择范围，不在范围内的年份隐藏
      this.yyyy_list = (() => {
        let arr = []
        let min = y_date.getFullYear() - 5
        let max = y_date.getFullYear() + 5
        let r_y_min = this.range ? new Date(this.range[0]).getFullYear() : 0
        let r_y_max = this.range ? new Date(this.range[1]).getFullYear() : 0
        for (let i = min; i <= max; i++) {
          if (!this.range || (i >= r_y_min && i <= r_y_max)) arr.push(new month(i, i, new Date(i,1,1)))
        }
        return arr
      })()
      this.yyyy_label[0] = this.yyyy_list[0].i
      this.yyyy_label[1] = this.yyyy_list[this.yyyy_list.length - 1].i
    },
    get_MM_list (y_date) {
      y_date = y_date ? y_date : this.thisShow
      this.MM_yyyy = y_date.getFullYear()
      // 校验设置了选择范围，不在范围内的月份隐藏
      this.MM_list = (() => {
        let arr = []
        let min = y_date.getFullYear() - 6
        let max = y_date.getFullYear() + 5
        let i_time_l = 0
        let i_time = 0
        let _d
        for (let i = 0; i < this.monthLabel.length; i++) {
          _d = new Date(this.MM_yyyy, i, 1)
          i_time_l = new Date(this.MM_yyyy, i + 1, 0).getTime()
          i_time = _d.getTime()
          if (!this.range || (i_time_l >= new Date(this.range[0]).getTime() && i_time <= new Date(this.range[1]).getTime()))
            arr.push(new month(this.monthLabel[i], i, _d))
        }
        return arr
      })()
    },
    to_yyyy (t) {
      switch (t) {
        case 'L':
          this.get_yyyy_list(new Date(this.yyyy_label[0] - 5, 1, 1))
          break
        case 'R':
          this.get_yyyy_list(new Date(this.yyyy_label[1] + 5, 1, 1))
          break
        default:
          this.thisShow.setFullYear(t)
          this.emitUpdate('yVisible', false)
          this.emitUpdate('mVisible', true)
      }
    },
    to_MM (t, item) {
      switch (t) {
        case 'L':
          this.get_MM_list(new Date(this.MM_yyyy - 1, 1, 1))
          this.emitChangeYear(t)
          break
        case 'R':
          this.get_MM_list(new Date(this.MM_yyyy + 1, 1, 1))
          this.emitChangeYear(t)
          break
        default:
          this.thisShow = this.thisValue = new Date(this.MM_yyyy, t)
          this.selectDate(this.thisShow)
      }
    },
    emitChangeYear (t) {
      this.$nextTick(() => {
        this.$emit('changeYear', t)
      })
    }
  }
}
</script>
