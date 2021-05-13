<template>
    <div class="ix-menu" :class="'ix-' + mode">
      <slot></slot>
    </div>
</template>

<script>
  import {checkMouseUp, checkSlotChange, getSlots} from "#/util";
    export default {
      name: "ix-menu",
      props: {
        mode: { type: String, default: 'vertical' },
        defaultActive: '',
        subPadding: { default: 14 },
        collapse: { type: Boolean, default: false },
        uniqueOpened: false
      },
      provide () {
        return {
          rootMenu: this,
          rootMenuSub: null
        }
      },
      data () {
        return {
          items: null,
          active: this.defaultActive
        }
      },
      computed: {
      },
      watch: {
        defaultActive (nv, ov) {
          if (nv != this.active) this.open(nv)
          this.active = this.defaultActive
        }
      },
      mounted() {
        this.$nextTick(() => {
          this.init()
        })
      },
      destroyed() {
        window.removeEventListener('mouseup', this.mouseup)
      },
      methods: {
        // 初始化
        init () {
          this.update(this.mode == 'vertical' ? this.collapse : null)
        },
        // 点其他空白收起菜单, 仅horizontal
        mouseup (e) {
          if (checkMouseUp(e, 'ix-menu')) this.closeAll()
        },
        // 更新数据
        update (_collapse) {
          checkSlotChange(this, 'items').then(__=>{
            if (_collapse) this.open(this.active)
          }).catch(__=>{})
        },
        // 点击menuitem选项时
        clickItem (_index, _isSub, _sub) {
          // 点击的是menusub展开菜单
          if (_isSub) {
            // 展开菜单，收起其他menusub
            if (!_sub.open) {
              // 收起其他一级和它的下级:设置了uniqueOpened同时只能展开一项 / 仅horizontal
              if ((this.mode == 'vertical' && this.uniqueOpened) || this.mode == 'horizontal') {
                this.closeAll(_sub)
              }
              _sub.open = true
              if (this.mode == 'horizontal') {
                window.removeEventListener('mouseup', this.mouseup)
                window.addEventListener('mouseup', this.mouseup)
              }
            } else {
              _sub.open = false
              if (this.mode == 'horizontal') this.operLower(_sub, false)
            }
          } else {
            // 点击了菜单项
            this.active = _index
            this.$emit('update:defaultActive', _index)
            this.$emit('change', _index)
            // 如果horizontal，收起所有菜单
            if (this.mode == 'horizontal') {
              this.items.forEach(item => {
                this.operLower(item, false)
              })
            }
          }
        },
        // 收起所有菜单, _sub:要排除的sub
        closeAll (_sub) {
          this.items.forEach((item, i) => {
            if (item.hasOwnProperty('open')) {
              if (item.open && (!_sub || _sub.index.indexOf(item.index) != 0)) this.operLower(item, false)
            }
          })
        },
        // 操作下级
        operLower (_sub, visible) {
          if (_sub.hasOwnProperty('open')) _sub.open = visible
          _sub.$children.forEach(item => {
            this.operLower(item, visible)
          })
        },
        // 层层展开指定的index
        open (_index) {
          let func = (_slot) => {
            if (!_slot || _slot.length == 0 || !_slot[0] || typeof _slot[0] !== 'object') return
            for (let i in _slot) {
              if (_slot[i].hasOwnProperty('open')) {
                _slot[i].open = _index.indexOf(_slot[i].index) == 0 ? true : (this.uniqueOpened ? false : _slot[i].open)
              }
              func(_slot[i].$slots && getSlots(_slot[i].$slots.default))
            }
          }
          func(this.items)
        }
      },
      updated() {
        this.update()
      }
    }
</script>
