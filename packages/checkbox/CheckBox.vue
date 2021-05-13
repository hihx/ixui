<template>
    <label class="ix-checkbox" :class="[disabled || is_max ? 'disabled' : '', is_selected(val) ? 'selected' : '']">
      <input type="checkbox" @change="onchange" v-model="val" :value="lbl" :name="name"/>
      <slot></slot>
    </label>
</template>

<script>
    import {getSlots} from "#/util";

    export default {
      name: "ix-checkbox",
      model: {
        prop: 'value',
        event: 'change'
      },
      props: {
        value: {
          type: [String, Number, Array, Boolean],
          default: ''
        },
        disabled: {
          type: Boolean,
          default: false
        },
        label: {
          type: [String, Number],
          default: ''
        },
        name: String,
        max: Number
      },
      data () {
        return {
          val: false,
          lbl: this.label,
          isArray: Array.isArray(this.value)
        }
      },
      computed: {
        // 判断是否处于选中
        is_selected () {
          return (val) => {
            const bool = this.isArray || Array.isArray(this.value) ? this.value&&this.value.includes(this.lbl) : this.value
            // console.log('is_selected',this.val)
            return bool
          }
        },
        // 判断是否超过max选中数量限制
        is_max () {
          return this.max && (this.isArray || Array.isArray(this.value)) && this.value.length == this.max && !this.is_selected
        }
      },
      watch: {
        value (v) {
          // console.log('value', this.lbl, this.value)
          this.val = this.is_selected()
          this.isArray = Array.isArray(this.value) ? true : this.isArray
        }
      },
      mounted() {
        this.$nextTick(() => {
          this.init()
        })
      },
      methods: {
        init () {
          let slots = getSlots(this.$slots.default)
          if (slots.length > 0 && !this.label) this.lbl = slots[0].$el ? slots[0].$el.innerText : slots[0]
          this.val = this.is_selected()
        },
        // 选中状态改变时
        onchange () {
          let selectV = this.value
          if (this.isArray || Array.isArray(selectV)) {
            selectV = selectV ? selectV : []
            if (this.val) selectV.push(this.lbl)
            else selectV.splice(selectV.indexOf(this.lbl), 1)
          } else {
            if (this.val) {
              if (selectV) {
                selectV = [selectV, this.lbl]
              } else {
                selectV = typeof selectV == 'boolean' ? true : this.lbl
              }
            } else selectV = false
          }
          this.$emit('change', selectV)
        }
      }
    }
</script>
