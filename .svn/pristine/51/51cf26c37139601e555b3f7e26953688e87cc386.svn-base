<template>
    <div class="ix-menugroup">
      <ix-menu-item ref="menuitem" :title="title" :icon="icon" class="ix-menugroup-item" :index="$parent.index+'-X'">
        <slot name="title"></slot>
      </ix-menu-item>
      <div class="ix-menugroup-list">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import IxMenuItem from '../menuitem'
    export default {
      name: "ix-menu-group",
      components: {IxMenuItem},
      props: {
        icon: '',
        title: '',
      },
      computed: {
      },
      data () {
        return {
        }
      },
      mounted() {
      },
      watch: {
      },
      methods: {
      }
    }
</script>
