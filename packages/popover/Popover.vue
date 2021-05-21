<template>
  <transition name="fade">
    <div class="ix-popover"
         :class="[className, 'ix-placement-'+placement]" v-show="thisVisible"
         @mouseenter="trigger == 'hover' ? setVisible(true) : null" @mouseleave="trigger == 'hover' ? setVisible(false) : null" :style="{padding:padding}">
      <slot></slot>
      <i class="ix-tooltip__arrow" :style="{left: arrowLeft}"></i>
      <slot name="reference"></slot>
    </div>
  </transition>
</template>

<script>
  import toolBase from "#/toolBase";
  import {checkMouseUp} from "#/util";
    export default {
      name: "ix-popover",
      mixins: [toolBase],
      props: {
        trigger: {
          type: String,
          default: 'click'
        },
      },
      mounted() {
        this.init(this.$slots.reference)
      },
      methods: {
        mouseup (e) {
          if (checkMouseUp(e, 'ix-popover')) this.hide()
        },
      }
    }
</script>
