<template>
    <div class="ix-popover"
         :class="[className, 'ix-placement-'+placement]" v-show="thisVisible"
         @mouseenter="setVisible(true)" @mouseleave="trigger == 'hover' ? setVisible(false) : null" :style="{padding:padding}">
      <slot></slot>
      <i class="ix-tooltip__arrow"></i>
      <slot name="reference"></slot>
    </div>
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
