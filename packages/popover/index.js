import Vue from 'vue'
import Popover from './Popover.vue'

Popover.install = function(Vue) {
  Vue.component(Popover.name, Popover)
}
Vue.directive('popover', {
  inserted: function (el, binding, vnode) {
    let pop = vnode.context.$refs[binding.arg]
    pop.bindEvent(el)
  }
});

export default Popover
