<template>
    <div class="ix-menusub" :class="{selected: is_selected, opened: open}">
      <ix-menu-item ref="menuitem" :title="title" :icon="icon" :index="index" :is-sub="true">
        <slot name="title"></slot>
        <i :class="['ix-menusub__caret', open ? 'is-reverse' : '', 'ix-icon-arrow-down']" slot="append"></i>
      </ix-menu-item>
      <ix-collapse-transition>
        <div ref="list" class="ix-menusub-list" v-show="open">
          <slot></slot>
        </div>
      </ix-collapse-transition>
    </div>
</template>

<script>
  import IxCollapseTransition from '#/collapse-transition'
    export default {
      name: "ix-menusub",
      components: {IxCollapseTransition},
      props: {
        icon: '',
        title: '',
        index: '',
      },
      inject: ['rootMenu'],
      provide () {
        return {
          rootMenuSub: this
        }
      },
      data () {
        return {
          open: false,
        }
      },
      mounted() {
      },
      destroyed() {
      },
      computed: {
        is_selected () {
          return this.rootMenu.active.indexOf(this.index) == 0
        }
      },
      watch: {
      },
      methods: {
      }
    }
</script>
