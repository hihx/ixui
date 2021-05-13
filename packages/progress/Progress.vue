<template>
    <div class="ix-progress" :class="['ix-progress--'+type, status?'ix-'+status:'', textInside ? 'ix-text-inside' : '']">
      <div class="ix-progress-bar" v-if="type === 'line'" :style="{height: strokeWidth + 'px'}">
        <div class="ix-progress-bar_inner" :style="bar_style">
          <label class="ix-progress-bar_txt" v-show="showText && textInside">{{text}}</label>
        </div>
      </div>
      <div v-else class="ix-progress-circle" :style="{height: width + 'px', width: width + 'px'}">
        <svg viewBox="0 0 100 100">
          <circle :r="c_r" :cy="c_xy" :cx="c_xy" :stroke-width="strokeWidth" :style="circle_bg_style"
                  stroke-linejoin="round" stroke-linecap="round" fill="none" class="ix-progress-circle_bg"/>
          <circle :r="c_r" :cy="c_xy" :cx="c_xy" :stroke-width="strokeWidth" :style="circle_style"
                  stroke-linejoin="round" stroke-linecap="round" fill="none" class="ix-progress-circle_progress"/>
        </svg>
      </div>
      <i v-if="status" :class="status_icon"></i>
      <label v-else-if="showText && !textInside" class="ix-progress-bar_txt">{{text}}</label>
    </div>
</template>

<script>
    export default {
      name: "ix-progress",
      props: {
        percentage: {
          type: Number,
          default: 0,
          required: true,
          validator: val => val >= 0 && val <= 100
        },
        format: Function,
        status: String,
        textInside: Boolean,
        color: {
          type: [Array, String, Function],
          default: null
        },
        // line / dashboard / circle
        type: {
          type: String,
          default: 'line'
        },
        showText: {
          type: Boolean,
          default: true
        },
        strokeWidth: {
          type: Number,
          default: 6
        },
        width: {
          type: Number,
          default: 100
        },
      },
      data () {
        return {
        }
      },
      computed: {
        text () {
          return this.format != null ? this.format(this.percentage) : this.percentage + '%'
        },
        status_icon () {
          if (this.status == 'warning') return 'ix-icon-warning-fill'
          else if (this.status == 'success') return 'ix-icon-success'
          else if (this.status == 'exception') return 'ix-icon-error'
        },
        bar_style () {
          return {
            width: this.percentage + '%',
            background: this.bar_color
          }
        },
        bar_color () {
          if (Array.isArray(this.color)) {
            const result = this.color.filter(c => c.percentage <= this.percentage)
            return result.length > 0 ? result[result.length - 1].color : null
          } else if (typeof this.color === 'function') {
            return this.color(this.percentage)
          } else return this.color
        },
        c_xy () {
          return this.width/2
        },
        c_r () {
          return this.c_xy - this.strokeWidth / 2
        },
        pi_w () {
          return Math.PI * this.width
        },
        rate () {
          return this.type == 'dashboard' ? 0.7 : 1
        },
        circle_style () {
          return {
            stroke: this.bar_color,
            'stroke-dasharray': (this.percentage / 100 * this.rate) * this.pi_w + ', ' + this.pi_w,
          }
        },
        circle_bg_style () {
          return {
            'stroke-dasharray': this.rate * this.pi_w + ', ' + this.pi_w
          }
        }
      },
      watch: {
        percentage (nv, ov) {
          if (nv != ov) this.calc()
        }
      },
      mounted() {
        if (this.percentage > 0) this.calc()
      },
      methods: {
        calc () {

        },
      }
    }
</script>
