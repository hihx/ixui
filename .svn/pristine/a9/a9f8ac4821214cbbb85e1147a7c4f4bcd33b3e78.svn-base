<template>
    <div class="ix-alert" :class="[type ? 'ix-'+type : null]">
      <i v-if="iconClass || type" class="conIco" :class='ico_class'></i>
      <div class="ix-alert-right">
        <div class="ix-alert-title">
          {{title}}
          <slot name="title"></slot>
        </div>
        <slot></slot>
        <div class="ix-alert-content">
          {{content}}
          <slot name="content"></slot>
        </div>
      </div>
      <i v-if="closable" class="ix-close ix-icon-close" @click="close"></i>
    </div>
</template>

<script>
    export default {
      name: "ix-alert",
      props: {
        iconClass: String,
        type: {
          type: String,
          default: 'info'
        },
        title: '',
        content: '',
        closable: { default: true }
      },
      computed: {
        ico_class () {
          return this.iconClass || `ix-icon-${this.type}-fill ix-${this.type}`
        }
      },
      methods: {
        close () {
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el)
        }
      }
    }
</script>
