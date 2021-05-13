<template>
    <div class="ix-dialog"
         :class="[className]">
      <transition name="fade">
        <div class="mark" v-show="model && thisVisible" @click="showClose ? close() : null"></div>
      </transition>
      <transition :name="transition">
        <div class="view" :style="width ? 'width:'+width : ''" v-show="thisVisible" :class="transition">
          <div class="title">
            <slot name="title"></slot>
            <label v-text="title"></label>
            <i class="ix-icon-close" @click="close()" v-show="showClose"></i>
          </div>
          <div class="content">
            <slot></slot>
          </div>
          <slot name="footer"></slot>
        </div>
      </transition>
    </div>
</template>

<script>
    export default {
      name: "ix-dialog",
      props: {
        visible: { type: Boolean, default: false },
        className: String,
        width: { default: '50%' },
        title: { default: null },
        model: { default: true },
        showClose: { default: true },
        transition: { default: 'slide-fade' },
        appendToBody: Boolean,
        beforeClose: { type: Function, default: null }
      },
      data () {
        return {
          thisVisible: this.visible
        }
      },
      watch: {
        visible (v) {
          this.thisVisible = v
          if (v) {
            this.$emit('open')
          } else {
            this.$emit('close')
          }
        },
      },
      mounted() {
        if (this.appendToBody) document.body.appendChild(this.$el)
        if (this.showClose == true) window.addEventListener('keydown', this.keydown)
      },
      destroyed() {
        window.removeEventListener('keydown', this.keydown)
      },
      methods: {
        // 关闭
        close () {
          let to = () => {
            this.thisVisible = false
            this.$emit('update:visible', this.thisVisible)
          }
          if (this.beforeClose != null) {
            this.beforeClose(() => {
              to()
            })
          } else to()
        },
        // 按Esc关闭
        keydown (e) {
          if (e.keyCode == 27 && this.thisVisible) this.close()
        }
      }
    }
</script>
