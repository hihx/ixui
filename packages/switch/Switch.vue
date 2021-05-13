<template>
  <div class="ix-switch" :class="{disabled: disabled, checked: thisValue}" @click="onClick">
    <input type="checkbox" v-model="thisValue" :name="name"/>
    <span class="ix-switch_txt_left" v-if="inactiveText" :class="{active: !thisValue}">{{inactiveText}}</span>
    <div class="ix-switch_bar" :style="{background: thisValue ? activeColor : inactiveColor, width: width + 'px'}"></div>
    <span class="ix-switch_txt_right" v-if="activeText" :class="{active: thisValue}">{{activeText}}</span>
  </div>
</template>

<script>
    export default {
      name: "ix-switch",
      model: {
        prop: 'value',
        event: 'change'
      },
      props: {
        value: {
          type: [String, Number, Boolean],
          default: ''
        },
        disabled: {
          type: Boolean,
          default: false
        },
        name: String,
        // 打开时文本
        activeText: String,
        inactiveText: String,
        // 打开时背景色
        activeColor: {
          type: String,
          default: null
        },
        inactiveColor: {
          type: String,
          default: null
        },
        width: {
          type: Number,
          default: 40
        },
        // 打开时的值
        activeValue: {
          type: [String, Number, Boolean],
          default: null
        },
        inactiveValue: {
          type: [String, Number, Boolean],
          default: null
        }
      },
      data () {
        return {
          thisValue: this.is_set_value ? (this.value == this.activeValue) : (this.value ? true : false)
        }
      },
      watch: {
        value (nv) {
          this.thisValue = this.is_set_value ? (nv == this.activeValue) : (nv ? true : false)
        }
      },
      computed: {
        is_set_value () {
          return this.activeValue != null && this.inactiveValue != null
        }
      },
      methods: {
        onClick () {
          this.thisValue = !this.thisValue
          this.$emit('change',  this.is_set_value ? (this.thisValue ? this.activeValue : this.inactiveValue) : this.thisValue)
        }
      }
    }
</script>
