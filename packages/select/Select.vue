<template>
    <div class="ix-select">
      <ix-input v-model="selectedItem.label" :name="name" :disabled="disabled" :placeholder="placeholder" readonly v-popover:pop
                :class="[showPopup ? 'no_event' : '', size ? 'ix-' + size : '']">
        <slot name="prepend" slot="prefix"></slot>
        <i slot="suffix" class="ix-select__caret no_event"
           :class="[showPopup ? 'is-reverse' : '', loading ? 'ix-icon-loading' : 'ix-icon-arrow-down']"></i>
      </ix-input>
      <ix-popover ref="pop" width="100%" :visible.sync="showPopup" padding="1px">
        <ix-scrollpanel ref="sp">
          <slot></slot>
        </ix-scrollpanel>
      </ix-popover>
    </div>
</template>

<script>
  import {checkSlotChange} from "#/util";
    export default {
      name: "ix-select",
      model: {
        prop: 'value',
        event: 'change'
      },
      props: {
        value: {
          type: [String, Number, Array],
          default: ''
        },
        placeholder: {
          type: String,
          default: '请选择'
        },
        disabled: {
          type: Boolean,
          default: false
        },
        name: String,
        autocomplete: String,
        readonly: Boolean,
        size: String,
        multiple: Boolean,
        multipleLimit: {
          type: Number,
          default: 0
        },
        loading: Boolean
      },
      provide () {
        return {
          rootSelect: this
        }
      },
      data () {
        return {
          // 当前选中项的对象,value:选中的值|多个值, label: 显示的选中文本,
          selectedItem: {value: this.multiple ? [] : '', label: ''},
          // value和文本对应的键值对
          labelObject: {},
          // 是否展开下拉
          showPopup: false,
          // ix-option列表
          options: null,
        }
      },
      watch: {
        // 父组件的v-model变化时
        value (v) {
          this.selectedItem.value = v
          this.updateSelect()
        }
      },
      mounted() {
        this.$nextTick(() => {
          this.init()
        })
      },
      destroyed() {
      },
      methods: {
        // 初始化，获取插槽中的option
        init () {
          this.selectedItem.value = this.value || (this.multiple ? [] : '')
          this.update()
        },
        // 更新选中的label
        updateSelect () {
          let labels = []
          for (let i in this.options) {
            if (this.options[i].is_selected) {
              labels.push(this.options[i].thisLabel)
            }
          }
          if (this.multiple) this.selectedItem.label = labels.join(',')
          else this.selectedItem.label = labels[0]
        },
        // 点击option选项时
        clickOption (_value, _label) {
          if (this.multiple) {
            let i = this.selectedItem.value.indexOf(_value)
            if (i > -1) this.selectedItem.value.splice(i, 1)
            else if (this.multipleLimit == 0 || this.multipleLimit > this.selectedItem.value.length) this.selectedItem.value.push(_value)
            else return false
          } else {
            this.selectedItem.value = _value
          }
          this.updateSelect()
          this.$emit('change', this.selectedItem.value)
          if (!this.multiple) this.$refs.pop.hide()
        },
        // 更新数据后调用
        update () {
          checkSlotChange(this, 'options', null, this.$refs.sp).then(__=>{
            this.updateSelect()
          }).catch(__=>{})
        }
      },
      updated() {
        this.update()
      }
    }
</script>
