export default {
  name: "ix-col",
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: null
    },
    width: {
      type: String,
      default: null
    },
    offset: Number,
    pull: Number,
    push: Number,
  },
  data () {
    return {
      maxSpan: 24
    }
  },
  render(h) {
    const style = {
      'flex': this.span == null && this.width == null ? 1 : null,
      'padding-left': this.$parent.gutter ? (this.$parent.gutter / 2) + 'px' : null,
      'padding-right': this.$parent.gutter ? (this.$parent.gutter/ 2) + 'px' : null,
      'margin-left': this.offset ? (this.offset / this.maxSpan * 100) + '%' : null
    }

    if (this.width != null) style.width = this.width
    else style.width = ((this.span || this.maxSpan) / this.maxSpan * 100) + '%'

    return h(this.tag, {
      class: [
        'ix-col'
      ],style
    }, this.$slots.default);
  }
}
