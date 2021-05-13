<template>
    <a class="ix-option" :class="[disabled ? 'disabled' : '', is_selected]" @click="onclick">
      <slot><span v-text="thisLabel"></span></slot>
      <i class="ix-icon-seleted"></i>
    </a>
</template>

<script>
    import {getSlots} from "#/util";

    export default {
      name: "ix-option",
      inject: ['rootSelect'],
      props: {
        value: {
          type: [String, Number],
          default: ''
        },
        disabled: {
          type: Boolean,
          default: false
        },
        label: {
          type: [Number, String, Boolean],
          default: null
        },
      },
      data () {
        return {
          thisValue: this.value,
          thisLabel: this.label
        }
      },
      computed: {
        is_selected () {
          const bool = Array.isArray(this.rootSelect.selectedItem.value) ? this.rootSelect.selectedItem.value.includes(this.thisValue) : this.rootSelect.selectedItem.value == this.thisValue
          return bool ? 'selected' : ''
        }
      },
      watch: {
        value (v) {
          this.thisValue = v
        },
        label (v) {
          this.thisLabel = v
          if (!this.value) this.thisValue = this.thisLabel
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
          if (slots.length > 0) this.thisLabel = slots[0].$el ? slots[0].$el.innerText : slots[0]
          if (!this.value) this.thisValue = this.label || this.thisLabel
        },
        onclick () {
          this.rootSelect.clickOption(this.thisValue, this.thisLabel)
        }
      }
    }
</script>
