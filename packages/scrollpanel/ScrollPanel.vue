<template>
    <div class="ix-scrollpanel"
         :style="{width:width || '100%', height:height || '100%'}"
         @mouseenter="mouseenter" @mouseleave="bar_visible = scroll || mouseDown || false">
      <div ref="view" class="ix-scrollpanel__view" :style="{'height': height ? viewWH.h : 'calc(100% + '+bar_size+'px)', 'width': viewWH.w, 'margin-right': -bar_size+'px', 'margin-bottom': -bar_size+'px'}">
        <slot></slot>
      </div>
      <div class="ix-scrollpanel__bar is-bottom" v-show="bar_visible && bar_status.hor !== 1" @click.self="clickBar($event, 'hor')">
        <a ref="hor" class="ix-scrollpanel__t" @mousedown.stop="mousedown($event, 'hor')"></a>
      </div>
      <div class="ix-scrollpanel__bar is-right" v-show="bar_visible && bar_status.ver !== 1" @click.self="clickBar($event, 'ver')">
        <a ref="ver" class="ix-scrollpanel__t" @mousedown.stop="mousedown($event, 'ver')"></a>
      </div>
    </div>
</template>

<script>
    export default {
      name: "ix-scrollpanel",
      data () {
        return {
          // 原生滚动条宽度
          bar_size: 15,
          // 新滚动条滑块显示隐藏
          bar_visible: false,
          // 是否点击了滚动条滑块
          mouseDown: false,
          // 滑块按下时记录坐标
          saveXY: Number,
          // 滚动div
          scroll_view: Object,
          scroll_save: [0, 0],
          viewWH: {w:0, h:0},
          saveScroll: 0,
          bar_status: {hor:0, ver:0} // 2个滚动条状态
        }
      },
      props:['width', 'height', 'scroll'],
      computed: {
      },
      mounted () {
        this.bar_visible = this.scroll ? true : false
        this.scroll_view = this.$refs.view
        this.scroll_view.addEventListener('scroll', this.onscroll)
        // 监听全局的鼠标释放
        window.addEventListener('mouseup', this.mouseup)
        this.$nextTick(() => {
          this.calc()
        })
      },
      beforeDestroy () {
        this.scroll_view.removeEventListener('scroll', this.onscroll)
        window.removeEventListener('mouseup', this.mouseup)
        window.removeEventListener('mousemove', this.mousemove)
        this.scroll_view = null
      },
      methods: {
        // 鼠标进入面板显示滚动条
        mouseenter () {
          this.bar_visible = true
          this.calc()
        },
        // 计算滚动条大小
        calc () {
          this.bar_size = (this.scroll_view.offsetWidth-this.scroll_view.clientWidth) || this.bar_size
          this.viewWH.w = (this.$el.clientWidth + this.bar_size) + 'px'
          this.viewWH.h = (this.$el.clientHeight + this.bar_size) + 'px'
          this.$nextTick(() => {
            // console.log('calc x', this.$el.clientWidth, this.$parent.$el.clientWidth, this.$refs.view.clientWidth, this.$refs.view.scrollWidth)
            this.scroll_save[0] = this.scroll_view.scrollWidth
            this.scroll_save[1] = this.scroll_view.scrollHeight
            // console.log('calc y', this.scroll_view.clientHeight, this.scroll_view.scrollHeight)
            this.bar_status.ver = this.scroll_view.clientHeight / this.scroll_view.scrollHeight
            this.$refs.ver.style.height = this.bar_status.ver == 1 ? '0px' : (this.bar_status.ver * this.scroll_view.clientHeight) + 'px'
            this.bar_status.hor = this.scroll_view.clientWidth / this.scroll_view.scrollWidth
            this.$refs.hor.style.width = this.bar_status.hor == 1 ? '0px' : (this.bar_status.hor * this.scroll_view.clientWidth) + 'px'
          })
        },
        // 滚动时更新滚动条滑块位置
        onscroll () {
          this.$refs.ver.style.top = (this.scroll_view.scrollTop / this.scroll_view.scrollHeight) * this.scroll_view.clientHeight + 'px'
          this.$refs.hor.style.left = (this.scroll_view.scrollLeft / this.scroll_view.scrollWidth) * this.scroll_view.clientWidth + 'px'
          this.$emit('scroll')
          // console.log('onscroll', this.scroll_view.scrollTop, this.$refs.view.scrollHeight)
        },
        // 鼠标按住滑块时
        mousedown (event, dir) {
          // console.log('mousedown', event, event.layerY)
          this.mouseDown = dir
          this.saveXY = dir == 'hor' ? event.pageX : event.pageY
          this.saveScroll = dir == 'hor' ? this.scroll_view.scrollLeft : this.scroll_view.scrollTop
          window.addEventListener('mousemove', this.mousemove)
        },
        // 鼠标放开滑块时结束滑动
        mouseup () {
          this.mouseDown = false
          window.removeEventListener('mousemove', this.mousemove)
        },
        // 滑块开始滑动
        mousemove (event) {
          if (!this.mouseDown) return
          event.stopPropagation()
          event.preventDefault()
          if (this.mouseDown == 'hor') {
            this.scroll_view.scrollLeft = this.saveScroll + (event.pageX - this.saveXY) * 2
          } else {
            this.scroll_view.scrollTop = this.saveScroll + (event.pageY - this.saveXY) * 2
          }
        },
        /*
          外部调用：滚动到指定位置x,y
         */
        scrollTo (x, y) {
          this.scroll_view.scrollLeft = x || 0
          this.scroll_view.scrollTop = y || 0
        },
        // 点击Bar时滚动到目标位置
        clickBar (event, dir) {
          if (dir == 'hor') {
            this.scroll_view.scrollLeft = event.offsetX / this.$el.offsetWidth * (this.$el.scrollWidth + parseFloat(this.$refs.hor.style.width))
          } else {
            this.scroll_view.scrollTop = event.offsetY / this.$el.offsetHeight * (this.$el.scrollHeight + parseFloat(this.$refs.ver.style.height))
          }
        }
      },
      updated() {
        if (this.scroll_view && (this.scroll_save[0] != this.scroll_view.scrollWidth || this.scroll_save[1] != this.scroll_view.scrollHeight)) this.calc()
      }
    }
</script>
