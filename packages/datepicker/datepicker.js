import p_date from './picker/date'
import p_dates from './picker/dates'
import p_month from './picker/month'
import p_months from './picker/months'
import p_daterange from './picker/daterange'
import p_monthrange from './picker/monthrange'
import datePane from "./module/datePane";
import ymPane from "./module/YMpane";
import dateUtil from "#/dateUtil";

const datepicker = {
  name: 'ix-datepicker',
  components: {datePane, ymPane},
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number, Array, Date],
      default: ''
    },
    type: {
      type: String,
      default: 'date' // year/month/date/dates/datetime/daterange/datetimerange
    },
    placeholder: {
      type: String,
      default: '请选择日期'
    },
    startPlaceholder: {
      type: String,
      default: '开始时间'
    },
    endPlaceholder: {
      type: String,
      default: '结束时间'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    readonly: Boolean,
    size: String,
    clearable: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: null
    },
    rangeSeparator: { default: '-' },
    pickerOptions: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      // 是否展开下拉
      showPopup: false,
      thisValue: ['', ''], // [date format] 格式化后的时间字符串，回调用
      inputValue: ['', ''], // 开始时间结束时间：年月日 ,   inputValue + timeValue 组合绑定
      timeValue: ['00:00:00', '00:00:00'], // 开始时间结束时间：时分秒,    inputValue + timeValue 组合绑定
      clickRange: 0, // 选择范围时 clickRange点击的次数
      calendarList: null, // calendar组件的列表
      DP: null,
      infocus: false,
      yVisible: false, // 选择年和月的层是否显示
      mVisible: false, // 选择年和月的层是否显示
    }
  },
  created() {
    this.mVisible = this.is_month
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  watch: {
    value: {
      handler (nv, ov) {
        this.loadValue(nv)
        this.DP.initCalendar()
      }
    },
    timeValue (nv) {
      if (!this.is_range && this.inputValue[0]) {
        this.thisValue[0] = new Date(this.inputValue[0] + ' ' + this.timeValue[0]).format(this.get_format)
        this.emit()
      }
    },
  },
  computed: {
    // 是否有时分秒
    has_time () {
      return this.type == 'datetime' || this.type == 'datetimerange'
    },
    // 是否选择范围
    is_range () {
      return this.type == 'daterange' || this.type == 'datetimerange' || this.type == 'monthrange'
    },
    // 是否选择范围或多个
    is_multiple () {
      return this.is_range || this.type == 'dates' || this.type == 'months'
    },
    // 是否显示时间选择
    show_time () {
      return this.type == 'datetime' || this.type == 'datetimerange'
    },
    get_format () {
      return this.format || (this.has_time ? 'yyyy-MM-dd hh:mm:ss' : 'yyyy-MM-dd') || this.DP&&this.DP.format || null
    },
    // 多选时显示的多个文本
    dates_label () {
      return this.thisValue[0] ? this.thisValue.join(',') : this.placeholder
    },
    // 是否是多选
    is_dates () {
      return this.type == 'dates' || this.type == 'months'
    },
    is_month () {
      return this.type == 'month' || this.type == 'months' || this.type == 'monthrange'
    },
    // 是否显示选择年月
    show_ympane () {
      return this.type != 'daterange' && this.type != 'datetimerange'
    },
    // 是否显示选择日
    show_datepane () {
      return (!this.yVisible && !this.mVisible) && !this.is_month
    }
  },
  methods: {
    init () {
      switch (this.type) {
        case 'date':
        case 'datetime':
          this.DP = new p_date(this)
          break;
        case 'daterange':
        case 'datetimerange':
          this.DP = new p_daterange(this)
          break;
        case 'dates':
          this.DP = new p_dates(this)
          break;
        case 'month':
          this.DP = new p_month(this)
          break;
        case 'months':
          this.DP = new p_months(this)
          break;
        case 'monthrange':
          this.DP = new p_monthrange(this)
          break;
      }
      if (this.value) this.loadValue(this.value)
      this.DP.initCalendar()
    },
    // 处理传入的值
    loadValue (val) {
      this.DP.loadValue(val)
    },
    // 确定保存：is_range=true时
    save () {
      this.DP.save()
    },
    // 点击快速按钮时
    itemClick (item) {
      item.onClick(this.pick)
    },
    // 外部设置值
    pick (_value) {
      this.loadValue(_value)
      this.emit()
    },
    emit () {
      this.$emit('change', this.is_range ? this.thisValue : this.thisValue[0])
    },
    // calendar选中值时
    calendarSelectBase (dates, i) {
      this.DP.calendarSelectBase(dates, i)
    },
    to (t) {
      this.DP.to(t)
    },
    /*
     触发：焦点进入
     */
    onfocus (event) {
      this.infocus = true
      this.$emit('focus', event)
    },
    /*
     触发：焦点失去
     */
    onblur (event) {
      this.infocus = false
      this.$emit('blur', event)
    },
    /*
     外部调用：设置焦点
     */
    focus () {
      this.$refs.txt.focus()
    },
    /*
     外部调用：移除焦点
     */
    blur () {
      this.$refs.txt.blur()
    },
    clear () {
      this.thisValue = ['', '']
      this.inputValue = ['', '']
      this.timeValue = ['00:00:00', '00:00:00']
      this.calendarList.forEach((item, j) => {
        if(item.value) item.value = null
      })
      this.emit()
    },
    to_ym (i) {
      if (i == 0) {
        this.yVisible = true
      } else {
        this.mVisible = true
      }
    },
    ymChange (_date) {
      this.DP.ymChange(_date)
    }
  }
}

export default datepicker
