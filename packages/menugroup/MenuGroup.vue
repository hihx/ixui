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
    export default {
      name: "ix-menu-group",
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
