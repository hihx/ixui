
import {getScrollParent, getPoint} from "#/dom";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    className: String,
    width: String,
    padding: {
      type: String,
      default: '10px'
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  data () {
    return {
      thisVisible: this.visible,
      target: null,
      scrollParent: null
    }
  },
  watch: {
    visible (v) {
      this.thisVisible = v
    }
  },
  beforeDestroy() {
    window.removeEventListener('mouseup', this.mouseup)
    if (this.scrollParent) this.scrollParent.removeEventListener('scroll', this.onscroll)
    this.scrollParent = null
    if (this.target) {
      this.target.removeEventListener('click', this.target_click)
      this.target.removeEventListener('mouseenter', this.target_enter)
      this.target.removeEventListener('mouseleave', this.target_leave)
      this.target = null
    }
  },
  methods: {
    init (slot) {
      if (slot) {
        slot.forEach(v => {
          if (v.elm && v.tag) {
            v.elm.parentNode.removeChild(v.elm)
            this.$el.parentNode.replaceChild(v.elm, this.$el)
            this.bindEvent(v.elm)
          }
        })
      }
    },
    setVisible (v) {
      this.thisVisible = v
      this.$emit('update:visible', this.thisVisible)
    },
    show (target) {
      document.body.appendChild(this.$el)
      this.target = target
      this.scrollParent = getScrollParent(target)
      this.setVisible(true)
      this.$nextTick(() => {
        this.$el.style.width = this.width == "100%" ? this.target.offsetWidth + 'px' : (this.width || 'auto')
        this.updateXY()
      })
      window.addEventListener('mouseup', this.mouseup)
      this.scrollParent.addEventListener('scroll', this.onscroll)
    },
    hide () {
      this.setVisible(false)
      window.removeEventListener('mouseup', this.mouseup)
      if (this.scrollParent) this.scrollParent.removeEventListener('scroll', this.onscroll)
    },
    updateXY () {
      let xy = this.target.getBoundingClientRect()
      this['placement_' + this.placement](xy)
    },
    placement_bottom (xy) {
      this.$el.style.left = (xy.left + (this.target.offsetWidth / 2 - this.$el.offsetWidth / 2)) + 'px'
      this.$el.style.top = (xy.top + this.target.offsetHeight + 10) + 'px'
    },
    placement_top (xy) {
      this.$el.style.left = (xy.left + (this.target.offsetWidth / 2 - this.$el.offsetWidth / 2)) + 'px'
      this.$el.style.top = (xy.top - this.$el.offsetHeight - 10) + 'px'
    },
    placement_left (xy) {
      this.$el.style.left = (xy.left - this.$el.offsetWidth - 10) + 'px'
      this.$el.style.top = (xy.top) + 'px'
    },
    placement_right (xy) {
      this.$el.style.left = (xy.left + this.target.offsetWidth + 15) + 'px'
      this.$el.style.top = (xy.top) + 'px'
    },
    onscroll (e) {
      this.updateXY()
    },
    bindEvent (target) {
      this.target = target
      if (this.trigger == 'click') target.addEventListener('click', this.target_click)
      else {
        target.addEventListener('mouseenter', this.target_enter)
        target.addEventListener('mouseleave', this.target_leave)
      }
    },
    target_click () {
      this.thisVisible ? this.hide() : this.show(this.target)
    },
    target_enter () {
      if (this.disabled) return
      this.show(this.target)
    },
    target_leave () {
      this.hide()
    }
  }
}
