import Vue from 'vue'
import Main from './Message.vue'
import {isVNode} from '#/util'

let messageLists = []
const MessageConstructor = Vue.extend(Main);
const time = 3 // 3秒关闭

function addToList (box) {
  box.show()
  messageLists.push(box)
  setTimeout(removeFromList, time * 1000)
}

function removeFromList () {
  let box = messageLists.splice(0, 1)[0]
  box.remove()
}
const Message = function (options) {
  const ins = new MessageConstructor({el: document.createElement('div')})
  if (typeof options == 'string') {
    options = {message: options}
  } else if (isVNode(options)){
    ins.$slots.default = options
    options = null
  } else if (isVNode(options.message)) {
    ins.$slots.default = options.message
    options.message = null
  }
  Object.assign(ins, options)
  addToList(ins)
  return ins
}

let types = ['success', 'warning', 'info', 'error']
types.forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    } else if (isVNode(options)){
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

export default Message
