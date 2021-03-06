import Vue from 'vue'
import MessageBox from '../messagebox/MessageBox.vue'
import {isVNode} from '#/util'

const MessageBoxConstructor = Vue.extend(MessageBox);
MessageBox.msgbox = function (options) {
  const ins = new MessageBoxConstructor({el: document.createElement('div')})
  if (isVNode(options.message)) {
    ins.$slots.default = options.message
    options.message = null
  }
  Object.assign(ins, options)
  if (options.autoClose) {
    let t = options.autoClose
    let bt = options.confirmButtonText || ins.confirmButtonText
    setInterval(() => {
      ins.confirmButtonText = bt + `(${t--})`
      if (t == 0) ins.close()
    }, 1000)
  }
  return ins.show()
}
MessageBox.alert = function (message, title, options) {
  if (typeof title == 'object') {
    options = title
    title = null
  }
  if (!options) options = {}
  options.message = message
  if (title) options.title = title
  return MessageBox.msgbox(options)
}
MessageBox.confirm = function (message, title, options) {
  if (typeof title == 'object') {
    options = title
    title = null
  }
  if (!options) options = {}
  options.showCancelButton = true
  options.message = message
  if (title) options.title = title
  return MessageBox.msgbox(options)
}
MessageBox.prompt = function (message, title, options) {
  if (typeof title == 'object') {
    options = title
    title = null
  }
  if (!options) options = {}
  options.showCancelButton = true
  options.showInput = true
  options.message = message
  if (title) options.title = title
  return MessageBox.msgbox(options)
}
export default MessageBox
