export default {
  name: "ix-row",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  data () {
    return {
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'ix-row',
      ],
      style: {
        'align-items': this.align,
        'justify-content' : this.justify == 'end' ? 'flex-end' : this.justify,
        'margin-left': this.gutter ? (-this.gutter / 2) + 'px' : null,
        'margin-right': this.gutter ? (-this.gutter / 2) + 'px' : null
      }
    }, this.$slots.default);
  }
}
