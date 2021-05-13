<template>
    <div class="ix-inputnumber" :class="[size ? 'ix-' + size : '']">
      <ix-input ref="txt" @change="$emit('change', val)" v-model="val"
                v-bind="$props" @input="$emit('input', val)" @focus="$emit('focus', val)" @blur="$emit('blur', val)">
        <ix-button v-if="!controlsPosition" icon="ix-icon-sami-select" slot="prepend" :disabled="!is_sami" @click="calc(-step)"></ix-button>
        <ix-button v-if="!controlsPosition" icon="ix-icon-add-select" slot="append" :disabled="!is_add" @click="calc(+step)"></ix-button>
        <div class="pos_right" v-if="controlsPosition" slot="append">
          <ix-button icon="ix-icon-arrow-up" slot="prepend" size="mini" :disabled="!is_add" @click="calc(+step)"></ix-button>
          <ix-button icon="ix-icon-arrow-down" slot="append" size="mini" :disabled="!is_sami" @click="calc(-step)"></ix-button>
        </div>
      </ix-input>
    </div>
</template>

<script>
  import IxInput from '../input'
  import IxButton from '../button'
    export default {
      name: "ix-inputnumber",
      components: {IxButton, IxInput},
      model: {
        prop: 'value',
        event: 'change'
      },
      props: {
        value: {
          type: [Number],
          default: ''
        },
        disabled: {
          type: Boolean,
          default: false
        },
        name: String,
        readonly: Boolean,
        max: Number,
        min: Number,
        step: { type: Number, default: 1 },
        autofocus: Boolean,
        tabindex: Number,
        size: String,
        controlsPosition: {default: ''}
      },
      data () {
        return {
          val: this.value,
        }
      },
      watch: {
        value (v) {
          this.val = v
        },
        val (v) {
          this.$emit('change', v)
        }
      },
      mounted() {
      },
      computed: {
        is_add () {
          return this.max === undefined || this.val < this.max
        },
        is_sami () {
          return this.min === undefined || this.val > this.min
        }
      },
      methods: {
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
        calc (s) {
          this.val = parseFloat(this.val) + parseFloat(s)
        }
      }
    }
</script>
