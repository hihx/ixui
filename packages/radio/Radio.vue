<template>
    <label class="ix-radio" :class="[disabled ? 'disabled' : '', is_selected ? 'selected' : '']">
      <input type="radio" @change="onchange" v-model="val" :value="lbl" :name="name"/>
      <slot></slot>
    </label>
</template>

<script>
    import {getSlots} from "#/util";

    export default {
      name: "ix-radio",
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
        label: {
          type: [String, Number],
          default: ''
        },
        name: String
      },
      data () {
        return {
          val: false,
          lbl: this.label
        }
      },
      computed: {
        is_selected () {
          this.val = this.value == this.lbl ? this.lbl : null
          return this.val
        }
      },
      watch: {
        value (v) {
          this.val = this.is_selected
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
        },
        onchange () {
          this.$emit('change', this.lbl)
        }
      }
    }
</script>
