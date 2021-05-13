<template>
    <div class="ix-input"
         :class="[
           infocus ? 'infocus' : '',
           disabled ? 'disabled' : '',
           type == 'textarea' ? 'ix-textarea' : '',
           size ? 'ix-' + size : '']">
      <div class="ix-input-prepend"><slot name="prepend"></slot></div>
      <slot name="prefix">
        <i class="ix-icon" :class="prefixIcon"></i>
      </slot>
      <textarea class="ix-input-inner" v-if="type=='textarea'" ref="txt" @change="$emit('change', val)" v-model="val" v-bind="$props" @input="$emit('input', val)" @focus="onfocus" @blur="onblur" @mouseup="$emit('mouseup', $event)"></textarea>
      <input class="ix-input-inner" v-else ref="txt" @change="$emit('change', val)" v-model="val" v-bind="$props" @input="$emit('input', val)" @focus="onfocus" @blur="onblur" @mouseup="$emit('mouseup', $event)"/>
      <a v-show="clearable && val" class="ix-icon-error" @click.stop="val = null; $emit('change', val)" title="清空"></a>
      <slot name="suffix">
        <i class="ix-icon" :class="suffixIcon" @click="infocus = !infocus"></i>
      </slot>
      <div class="ix-input-append"><slot name="append"></slot></div>
    </div>
</template>

<script>
    export default {
      name: "ix-input",
      model: {
        prop: 'value',
        event: 'change'
      },
      props: {
        value: {
          type: [String, Number],
          default: ''
        },
        placeholder: {
          type: String,
          default: '请输入内容'
        },
        disabled: {
          type: Boolean,
          default: false
        },
        type: {
          type: String,
          default: 'text'
        },
        'prefixIcon': String,
        'suffixIcon': String,
        minlength: Number,
        maxlength: Number,
        name: String,
        autocomplete: String,
        readonly: Boolean,
        max: Number,
        min: Number,
        step: Number,
        autofocus: Boolean,
        form: String,
        label: String,
        tabindex: Number,
        rows: { type: Number, default: 2 },
        size: String,
        clearable: {
          type: Boolean,
          default: false
        }
      },
      data () {
        return {
          val: this.value,
          infocus: false // 是否获得焦点
        }
      },
      watch: {
        value (v) {
          this.val = v
        }
      },
      mounted() {
      },
      methods: {
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
      }
    }
</script>
