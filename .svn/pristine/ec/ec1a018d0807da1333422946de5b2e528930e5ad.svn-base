<template>
  <div class="ix-loading">
    <transition name="fade">
      <div class="mark" v-show="model" @click="showClose ? close() : null"></div>
    </transition>
    <transition :name="transition" @after-leave="handleAfterLeave">
      <div class="view" :class="transition" v-show="thisVisible">
        <div class="title">
          <i class="ix-icon-close" @click="close()" v-show="showClose"></i>
        </div>
        <div class="content">
          <i class="ix-icon-loading"></i>
          <span v-html="message"></span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "ix-loading",
    props: {
      message: '',
      transition: { default: 'slide-fade' },
      model: { default: true },
      showClose: { default: false },
      target: null,
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
    },
    methods: {
      // 显示时，加入target
      show () {
        this.target = this.target || document.body
        this.target.appendChild(this.$el)
        this.thisVisible = true
        return this
      },
      close () {
        this.thisVisible = false
      },
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>
