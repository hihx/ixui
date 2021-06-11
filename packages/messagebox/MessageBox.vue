<template>
  <div class="ix-messagebox"
       :class="[className]">
    <transition name="fade">
      <div class="mark" v-show="model && thisVisible" @click="showClose ? close() : null"></div>
    </transition>
    <transition :name="transition" @after-leave="handleAfterLeave">
      <div class="view" :style="width ? 'width:'+width : ''" :class="transition" v-show="thisVisible">
        <div class="title">
          <label v-text="title"></label>
          <i class="ix-icon-close" @click="close()" v-show="showClose"></i>
        </div>
        <div class="content">
          <i v-if="iconClass || type" class="conIco" :class='ico_class'></i>
          <slot>
            <span v-html="message"></span>
          </slot>
          <ix-input v-if="showInput" :type="inputType" :placeholder="inputPlaceholder" v-model="thisInputValue"></ix-input>
        </div>
        <div class="dialog-footer">
          <ix-button @click="close()" v-text="cancelButtonText" v-show="showCancelButton" size="medium"></ix-button>
          <ix-button type="primary" @click="ok()" v-text="confirmButtonText" v-show="showConfirmButton" size="medium"></ix-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Util from '#/util'
  export default {
    name: "ix-messagebox",
    props: {
      className: String,
      width: { default: '420px' },
      title: { default: '提示消息' },
      message: '',
      model: { default: true },
      showClose: { default: true },
      transition: { default: 'slide-fade' },
      beforeClose: { type: Function, default: null },
      type: {default: null},
      iconClass: null,
      callback: { type: Function, default: null },
      showCancelButton: false,
      showConfirmButton: { default: true },
      cancelButtonText: { default: '取消' },
      confirmButtonText: { default: '确定' },
      showInput: false,
      inputPlaceholder: null,
      inputType: {default: 'text'},
      inputValue: null,
      inputPattern: { type: RegExp, default: null },
      inputValidator: { type: Function, default: null }
    },
    data () {
      return {
        thisVisible: false,
        resolve: Function,
        reject: Function,
        thisInputValue: this.inputValue
      }
    },
    watch: {
    },
    mounted() {
      if (this.showClose == true) window.addEventListener('keydown', this.keydown)
    },
    destroyed() {
      window.removeEventListener('keydown', this.keydown)
    },
    computed: {
      ico_class () {
        return this.iconClass || `ix-icon-${this.type}-fill ix-${this.type}`
      }
    },
    methods: {
      // 显示时，加入body
      show () {
        document.body.appendChild(this.$el)
        this.thisVisible = true
        return new Promise((resolve, reject) => {
          this.resolve = resolve
          this.reject = reject
        })
      },
      // 点击确定按钮时，有输入框时增加校验
      ok () {
        let result = 1 // 默认通过
        if (this.showInput) {
          let r
          if (this.inputValidator != null && (r = this.inputValidator(this.thisInputValue)) !== true) {
            result = 0
            this.$alert(r)
          } else if (this.inputPattern != null && (!this.thisInputValue || !this.inputPattern.test(this.thisInputValue))) {
            result = 0
            this.$alert('数据验证不通过')
          } else result = this.thisInputValue
        }
        if (this.callback != null) this.callback(result, this)
        this.showCancelButton && !result ? this.reject(result) : this.resolve(result)
        this.remove()
      },
      // 关闭时
      close () {
        let to = () => {
          if (this.callback != null) this.callback(0, this)
          this.showCancelButton ? this.reject({}) : this.resolve({})
          this.remove()
        }
        if (this.beforeClose != null) {
          this.beforeClose(() => {
            to()
          })
        } else to()
      },
      // 按Esc关闭
      keydown (e) {
        if (e.keyCode == 27) this.close()
      },
      remove () {
        this.thisVisible = false
      },
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
    }
  }
</script>
