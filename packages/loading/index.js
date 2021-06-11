import Vue from 'vue'
import Main from './Loading.vue'

const LoadingConstructor = Vue.extend(Main);

/**
 *
 * @param options
 * @returns {CombinedVueInstance<CombinedVueInstance}
 * @constructor
 */
const Loading = function (options) {
  if (typeof options == 'string') {
    options = {message: options}
  }
  const ins = new LoadingConstructor({el: document.createElement('div')})
  Object.assign(ins, options)
  ins.show()
  return ins
}
let instance = null
// 单例服务模式
Loading.service = (options) => {
  return instance && instance.thisVisible ? (instance = Object.assign(instance, options)) : Loading(options)
}

const loading_create = (el, binding) => {
  if (!el.loading) {
    el.loading = Loading({
      target: binding.modifiers.fullscreen ? document.body : el,
      model: binding.modifiers.model
    })
  }
  if (!binding.modifiers.fullscreen) {
    el.loading.$el.style.position = 'absolute'
    let view = el.loading.$el.querySelector('.view')
    view.style.marginTop = ((el.clientHeight) / 2 - view.clientHeight / 2) + 'px'
  }
}
Vue.directive('loading', {
  inserted: function (el, binding, vnode) {
    if (!binding.modifiers.fullscreen) {
      let style = window.getComputedStyle(el)
      if (style && style.position == 'static') {
        el.style.position = 'relative'
      }
    }
    if (binding.value) {
      loading_create(el, binding)
    }
  },
  update: function (el, binding, vnode) {
    if (binding.value) {
      loading_create(el, binding)
    }
    else {
      el.loading.close()
      el.loading = null
    }
  }
});

export default Loading
