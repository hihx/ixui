<template>
 <div class="ix-slider" :class="{disabled: disabled, 'is-vertical': vertical}" :style="{height: vertical ? height : null}">
   <div class="ix-slider_bg" @click="clickBar($event)"></div>
   <div class="ix-slider_points">
     <markCell v-for="(v, i) in pointList" :key="i" :cell="v"></markCell>
   </div>
   <div class="ix-slider_bar" :style="bar_style"></div>
   <ix-tooltip ref="tooltip0" placement="top" :disabled="!showTooltip" :className="tooltipClass">
     <div slot="content" v-html="label(0)"></div>
     <a class="ix-slider_bar_button" @mousedown="onMouseDown($event, 0)" :style="button0_style"></a>
   </ix-tooltip>
   <ix-tooltip ref="tooltip1" placement="top" :disabled="!showTooltip" :className="tooltipClass">
     <div slot="content" v-html="label(1)"></div>
     <a class="ix-slider_bar_button" @mousedown="onMouseDown($event, 1)" :style="button1_style" v-if="range"></a>
   </ix-tooltip>
 </div>
</template>

<script>
import markCell from './mark-cell'
import ixTooltip from '../tooltip'
    export default {
      name: "ix-slider",
      model: {
        prop: 'value',
        event: 'change'
      },
      components: {markCell, ixTooltip},
      props: {
        value: {
          type: [Number, Array],
          default: null
        },
        disabled: Boolean,
        showTooltip: {
          type: Boolean,
          default: true
        },
        formatTooltip: {
          type: Function,
          default: null
        },
        step: {
          type: Number,
          default: 1
        },
        showStops: Boolean,
        range: Boolean,
        vertical: Boolean,
        width: {
          type: String,
          default: '100%'
        },
        height: {
          type: String,
          default: '250px'
        },
        marks: {
          type: Object,
          default: null
        },
        min: {
          type: Number,
          default: 0
        },
        max: {
          type: Number,
          default: 100
        },
        tooltipClass: String
      },
      data () {
        return {
          saveXY: 0,
          saveLeft: 0,
          bar_width: 0,
          point0: 0,
          point1: 0,
          thisValue0: 0,
          thisValue1: 0,
          target: 0,
          pointList: null,
          offsetWidth: 0,
          is_moveed: false,
          decimal: 0,
          buttonSize: 0
        }
      },
      beforeDestroy() {
        this.onMouseUp()
      },
      watch: {
        value () {
          this.formatValue()
        },
        showStops () {
          this.showPoints()
        }
      },
      mounted() {
        this.getDecimal()
        this.formatValue()
        this.showPoints()
      },
      computed: {
        label () {
          return (p) => {
            return this.formatTooltip != null ? this.formatTooltip(this.range ? [this.thisValue0, this.thisValue1] : this.thisValue0) : (this['thisValue' + p])
          }
        },
        bar_style () {
          return this.vertical ? {
            height: (this.range ? this.point1 - this.point0 : this.point0) + 'px',
            bottom: (this.range ? this.point0 : 0) + 'px'
          } : {
            width: (this.range ? this.point1 - this.point0 : this.point0) + 'px',
            left: (this.range ? this.point0 : 0) + 'px'
          }
        },
        button0_style () {
          return this.vertical ? { bottom: this.point0 + 'px' } : { left: this.point0 + 'px' }
        },
        button1_style () {
          return this.vertical ? { bottom: this.point1 + 'px' } : { left: this.point1 + 'px' }
        },
      },
      methods: {
        // 获取横向 / 竖向时的offset
        getOffset () {
          return this.vertical ? this.$el.offsetHeight : this.$el.offsetWidth
        },
        // 获取竖向时需要反向的值
        getReverse (left) {
          return this.vertical ? this.getOffset() - left : left
        },
        // 获取间隔点有几位小数
        getDecimal () {
          const array = this.step.toString().split('.')
          this.decimal = array.length == 1 ? 0 : array[1].length
        },
        // 处理传进来的value值
        formatValue () {
          const offset = this.getOffset()
          if (this.range) {
            if (!this.value || this.value.length == 0) this.point0 = this.point1 = 0
            else {
              this.point0 = this.value[0] / this.max * offset
              this.point1 = this.value[1] / this.max * offset
            }
            this.thisValue0 = this.value[0]
            this.thisValue1 = this.value[1]
          } else {
            if (!this.value) this.point0 = this.point1 = 0
            else {
              this.point0 = this.value / this.max * offset
              this.point1 = 0
            }
            this.thisValue0 = this.value
          }
        },
        // 根据坐标计算返回值
        getValue () {
          const offset = this.getOffset()
          if (this.range) {
            this.thisValue0 = Number((this.point0 / offset * this.max).toFixed(this.decimal))
            this.thisValue1 = Number((this.point1 / offset * this.max).toFixed(this.decimal))
            return [this.thisValue0, this.thisValue1]
          } else {
            this.thisValue0 = Number((this.point0 / offset * this.max).toFixed(this.decimal))
            return this.thisValue0
          }
        },
        // 鼠标按下时
        onMouseDown (event, p) {
          event.stopPropagation()
          event.preventDefault()
          const offset = this.getOffset()
          this.buttonSize = event.currentTarget.clientHeight
          this.target = p
          this.saveLeft = this.getReverse(this['point' + p])
          this.saveXY = this.vertical ? event.pageY : event.pageX
          this.offsetWidth = offset
          window.addEventListener('mousemove', this.onMouseMove)
          window.addEventListener('mouseup', this.onMouseUp)
        },
        // 鼠标按下后拖动
        onMouseMove (event) {
          event.stopPropagation()
          event.preventDefault()
          const pageXY = this.vertical ? event.pageY : event.pageX
          let left = this.getStepPoint(this.saveLeft + pageXY - this.saveXY)
          if(left > this.offsetWidth){
            left = this.offsetWidth;
          } else if(left < 0){
            left = 0
          }
          if (this.range && this.target == 0 && left >= this.point1) {
            this.target = 1
            this.point0 = this.point1
            this.point1 = this.getReverse(left)
          }
          else if (this.range && this.target == 1 && left <= this.point0) {
            this.target = 0
            this.point1 = this.point0
            this.point0 = this.getReverse(left)
          } else this['point' + this.target] = this.getReverse(left)
          this.is_moveed = true
          this.$emit('input', this.getValue())
          this.moveTip(pageXY)
        },
        // 鼠标放开时
        onMouseUp () {
          this.saveXY = 0
          window.removeEventListener('mousemove', this.onMouseMove)
          window.removeEventListener('mouseup', this.onMouseUp)
          if (this.is_moveed) this.$emit('change', this.getValue())
          this.is_moveed = false
        },
        // 同时移动提示框
        moveTip (pageXY) {
          if (this.vertical) {
            this.$refs['tooltip' + this.target].$el.style['top'] = (pageXY - this.buttonSize - (this.$refs['tooltip' + this.target].$el['offsetHeight'])) + 'px'
          } else {
            this.$refs['tooltip' + this.target].$el.style['left'] = (pageXY - (this.$refs['tooltip' + this.target].$el['offsetHeight'] / 2)) + 'px'
          }
        },
        // 显示间隔点和标记点
        showPoints () {
          const offset = this.getOffset()
          if (this.marks) {
            const list = []
            Object.keys(this.marks).forEach((v, i) => {
              const isObject = typeof this.marks[v] === 'object'
              list.push(Object.assign({mark: 1, value: v, left: v / this.max * offset}, isObject ? this.marks[v] : {label: this.marks[v]}))
            })
            this.pointList = list
          }
          else if (this.showStops) {
            const list = []
            for (let i = 0; i < this.max / this.step; i++) {
              if (i * this.step > 0) list.push({left: i * this.step / this.max * offset})
            }
            this.pointList = list
          } else this.pointList = null
        },
        // 点击标记时，滑动到标记点
        clickMark (event, item) {
          event.stopPropagation()
          event.preventDefault()
          this.gotoLeft(this.getReverse(item.left))
        },
        // 点击bar时滑动到点击点
        clickBar (event) {
          this.gotoLeft(this.getStepPoint(this.vertical ? this.getReverse(event.offsetY) : event.offsetX))
        },
        // 滑动到指定点
        gotoLeft (left) {
          if (this.range) {
            const center = this.point0 + ((this.point1 - this.point0) / 2)
            if (left < center) this.point0 = left
            else this.point1 = left
          } else {
            this.point0 = left
          }
          this.$emit('change', this.getValue())
        },
        // 获取接近的间隔点
        getStepPoint (left) {
          const leftStep = this.step / this.max * this.getOffset()
          const isMin = (left % leftStep) < leftStep / 2
          return leftStep * (isMin ? Math.floor(left / leftStep) : Math.ceil(left / leftStep))
        }
      }
    }
</script>
