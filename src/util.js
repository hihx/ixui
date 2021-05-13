
/**
 * MouseUp target是否存在于path列表
 * @param e
 * @returns {boolean}
 */
export const checkMouseUp = (e, className) => {
  for (let i in e.path) {
    if (e.path[i].className && e.path[i].className.split(' ').includes(className)) return false
  }
  return true
}

/**
 * 检测slot是否有更新
 * @param dataName slot遍历的列表变量名
 * @param tagName slot里的组件名称
 * @param parent $children的父级，默认this
 * @returns {Promise<unknown>}
 */
export const checkSlotChange = (_this, dataName, tagName, parent) => {
  return new Promise((resolve, reject) => {
    if (!_this.$slots.default) {
      _this[dataName] = null
      _this.$nextTick(reject)
    } else {
      parent = parent ? parent : _this
      const __datas = tagName ? parent.$children.filter(child => child.$options.name === tagName) : getSlots(parent.$slots.default)
      const panesChanged = !_this[dataName] || __datas.length !== _this[dataName].length || !(__datas.every((pane, index) => pane === _this[dataName][index]));

      if (panesChanged) {
        console.log('panesChanged', panesChanged)
        _this[dataName] = __datas
        _this.$nextTick(resolve)
      }
    }
  })
}

/**
 * 是否是vnode节点
 * @param node
 * @returns {*}
 */
export const isVNode = (node) => {
  return node !== null && typeof node === 'object' && Object.prototype.hasOwnProperty.call(node, 'componentOptions');
}

/**
 * 获取插槽列表里的vue组件对象列表
 * @param slots 插槽指定到名称 如：this.$slots.default
 * @returns {[]|vue组件对象列表}
 */
export const getSlots = (slots) => {
  if(!slots) return []
  let slotChildren = []
  for (let i = 0; i < slots.length; i++) {
    if (slots[i].elm && slots[i].elm.nodeType !== 3) {
      slotChildren.push(slots[i].componentInstance || slots[i].elm)
    } else if (slots[i].text && slots[i].text.trim()) {
      slotChildren.push(slots[i].text)
    }
  }
  return slotChildren
}
