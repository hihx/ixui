<template>
  <transition :name="transition" @after-leave="handleAfterLeave">
    <div class="ix-message" :class="['ix-'+type, className]" v-show="thisVisible">
      <i v-if="iconClass || type" class="conIco" :class='ico_class'></i>
      <slot>
        <span v-html="message"></span>
      </slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "ix-message",
    props: {
      className: String,
      message: '',
      transition: { default: 'slide-fade' },
      type: {default: 'info'},
      iconClass: null
    },
    data () {
      return {
        thisVisible: false
      }
    },
    watch: {
    },
    mounted() {
    },
    destroyed() {
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
        this.$nextTick(() => {
          this.$el.style.left = (document.body.clientWidth || document.documentElement.clientWidth) / 2 - this.$el.clientWidth / 2 + 'px'
        })
        return this
      },
      remove () {
        this.thisVisible = false
      },
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>
