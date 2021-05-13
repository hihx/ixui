<template>
  <div class="ix-swiper">
    <a v-show="showBtn" class="ix-swiper-btnleft ix-icon-arrow-left" :class="{disabled: index===0}" @click="go(-1)"></a>
    <div class="ix-swiper-content">
      <slot></slot>
    </div>
    <a v-show="showBtn" class="ix-swiper-btnright ix-icon-arrow-right" :class="{disabled: index === total - 1}" @click="go(-2)"></a>
    <div class="ix-swiper-points" v-show="showPoint">
      <i v-for="i in total" :key="i" v-text="i" :class="{active: index === i - 1}" @click="go(i - 1)"></i>
    </div>
  </div>
</template>

<script>
    import {checkSlotChange} from "#/util";
    export default {
      name: "ix-swiper",
      // type: slide滑动 opacity渐隐
      props: {
        'type': { default: 'slide' },
        'autoplay': {default: true},
        'showPoint': {default: true},
        'showBtn': {default: true},
        'transitionDelay': {default: 2},
        'interval': {default: 3000}
      },
      data () {
        return {
          total: 0,
          index: -1,
          timeOut: 0,
          lists: null,
          W: 0,
          t: this.type == 'slide' ? 'transform' : 'opacity'
        }
      },
      computed: {
      },
      mounted () {
        this.$nextTick(() => {
          this.update()
        })
      },
      destroyed () {
        clearTimeout(this.timeOut)
      },
      methods: {
        update () {
          checkSlotChange(this, 'lists').then(__=>{
            this.total = this.lists.length
            this.W = this.$el.clientWidth || this.$parent.$el.clientWidth
            this.run();
          }).catch(__=>{
            this.total = this.index = 0
          })
        },
        // 开始轮播
        run (i) {
          let old = this.index
          if (this.index === this.total - 1) this.index = 0
          else this.index ++
          if (arguments.length === 1) this.index = i
          let item = null
          for (let i = 0; i < this.lists.length; i++) {
            item = this.lists[i]
            item.style.left = -(i * this.W) + 'px'
            item.style.transition = 'none'
            if (!item.className2) item.className2 = item.className || ''
            item.className = item.className2 + ' ' + this.type + '-enter'
          }
          this.lists[this.index].style.transition = this.t+' '+this.transitionDelay+'s'
          this.lists[this.index].className = this.lists[this.index].className2 + ' ' + this.type + '-enter-to ' + this.type + '-enter-active'
          if (old != -1){
            this.lists[old].style.transition = this.t+' '+this.transitionDelay+'s'
            this.lists[old].className = this.lists[old].className2 + ' ' + this.type + '-leave-to ' + this.type + '-leave-active'
          }
          if (this.autoplay && this.lists.length > 1) this.timeOut = setTimeout(this.run, this.interval)
        },
        go (i) {
          clearTimeout(this.timeOut)
          let to = 0
          switch (i) {
            case -1:
              to = this.index - 1
              break;
            case -2:
              to = this.index + 1
              break;
            default:
              to = i
              break;
          }
          this.run(to)
        }
      },
      updated() {
        this.update()
      }
    }
</script>
