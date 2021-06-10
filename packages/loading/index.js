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

export default Loading
