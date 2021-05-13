<template>
  <div class="ix-calendar">
    <div class="ix-calendar_bar flex">
      <label v-text="label" class="f1"></label>
      <ix-button size="small" group="0" @click="to('L_M')">上一月</ix-button><ix-button size="small" group="0" @click="to(0)">今天</ix-button><ix-button size="small" group="0" @click="to('R_M')">下一月</ix-button>
    </div>
    <datePane ref="dp" v-bind="$props" v-model="thisValue" :showDate.sync="showDate" @select="selectDate"></datePane>
  </div>
</template>

<script>
  import datePane from '../datepicker/module/datePane'
  import {checkRange} from "#/dateUtil";
  import IxButton from '../button'
export default {
  name: 'ix-calendar',
  components: {datePane, IxButton},
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [Date, String, Number],
      default: null
    },
    weekLabel: Array,
    today: {
      type: [Date],
      default: () => new Date()
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    range: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      thisValue: null,
      showDate: null
    }
  },
  mounted () {
    this.loadValue(this.value)
  },
  watch: {
    value (v, o) {
      this.loadValue(v)
    },
    showDate (v) {
      this.$nextTick(() => {
        checkRange([this.$refs.dp])
      })
    }
  },
  computed: {
    label () {
      return this.showDate && this.showDate.format('yyyy年MM月') || this.thisValue && this.thisValue.format('yyyy年MM月')
    }
  },
  methods: {
    loadValue (val) {
      this.thisValue = val ? new Date(val) : null
      this.showDate = this.thisValue
    },
    selectDate (_date) {
      this.thisValue = _date
      this.showDate = _date
    },
    to (t) {
      let _date
      switch (t) {
        case 'L_M': // 上月
          _date = new Date(this.$refs.dp.thisShow)
          _date.setMonth(_date.getMonth() - 1)
          this.showDate = _date
          break
        case 0: // 今天
          this.thisValue = this.today
          this.showDate = this.today
          break
        case 'R_M': // 下月
          _date = new Date(this.$refs.dp.thisShow)
          _date.setMonth(_date.getMonth() + 1)
          this.showDate = _date
          break
      }
    },
  }
}
</script>
