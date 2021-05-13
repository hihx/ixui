<template>
    <a class="ix-menuitem" :class="{selected: is_selected, disabled:disabled}" :href="href" :target="target" @click="click">
      <div class="ix-menuitem__inner" :style="{paddingLeft: paddingLeft}">
        <i v-if="icon" class="conIco" :class="icon"></i>
        <slot>{{title}}</slot>
      </div>
      <slot name="append"></slot>
    </a>
</template>

<script>
    export default {
      name: "ix-menu-item",
      props: {
        icon: '',
        index: '',
        title: '',
        disabled: Boolean,
        href: '',
        target: '',
        to: null,
        isSub: false
      },
      inject: ['rootMenu', 'rootMenuSub'],
      computed: {
        is_selected () {
          return this.rootMenu.active == this.index
        },
        paddingLeft () {
          return ((this.index.split('-').length - 1) * this.rootMenu.subPadding) + 'px'
        }
      },
      data () {
        return {
        }
      },
      mounted() {
      },
      methods: {
        click (e) {
          if (this.href) e.stopPropagation()
          else if (this.to) this.$router.push(this.to)
          else this.rootMenu.clickItem(this.index, this.isSub, this.rootMenuSub)
        }
      }
    }
</script>
