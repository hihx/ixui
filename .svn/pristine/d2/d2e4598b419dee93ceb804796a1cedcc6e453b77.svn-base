<template>
    <div class="ix-tooltip"
         :class="[className, 'ix-placement-'+placement]" v-show="thisVisible"
         @mouseenter="setVisible(true)" @mouseleave="setVisible(false)" :style="{padding:padding}">
      <slot></slot>
      <slot name="content">{{content}}</slot>
      <i class="ix-tooltip__arrow"></i>
    </div>
</template>

<script>
import toolBase from "#/toolBase";
    export default {
      name: "ix-tooltip",
      mixins: [toolBase],
      props: {
        content: String,
        disabled: Boolean
      },
      data () {
        return {
          trigger: 'hover',
        }
      },
      mounted() {
        this.init(this.$slots.default)
      },
      methods: {
        mouseup (e) {}
      }
    }
</script>
