
/**
 * 获取dom元素的attr值
 * @param dom 元素对象
 * @param key attr的key
 * @returns {null|key对应的值}
 */
export const attr = (dom, key) => {
  for (let i in dom.attributes) {
    if (dom.attributes[i].localName == key) return dom.attributes[i].value
  }
  return null
}

/**
 * 获取指定元素以浏览器左上角为原点的坐标
 * @param dom 元素dom对象
 * @returns [x, y] xy坐标数组
 */
export const getPoint = (dom) => {
  let y = dom.offsetTop // 获取该元素对应父容器的上边距
  let x = dom.offsetLeft // 对应父容器的上边距
  // 判断是否有父容器，如果存在则累加其边距
  while (dom = dom.offsetParent) {
    y += dom.offsetTop // 叠加父容器的上边距
    x += dom.offsetLeft // 叠加父容器的左边距
  }
  return [x, y]
}

/**
 * 获取滚动父元素
 * @param dom 元素dom对象
 * @returns dom 滚动父元素
 */
export const getScrollParent = (dom) => {
  // 判断父容器有没有滚动
  while (dom = dom.parentNode) {
    if (dom.tagName == 'DOCUMENT') return window
    let style = window.getComputedStyle(dom)
    if(!style){
      continue
    }
    if (style.overflow == 'auto' || style.overflow == 'scroll'
      || style.overflowX == 'auto' || style.overflowX == 'scroll'
      || style.overflowY == 'auto' || style.overflowY == 'scroll') return dom
  }
  return window
}

export const addClass = (el, className) => {
  let array = el.className.split(' ')
  array = array.filter(v => v != className)
  array.push(className)
  el.className = array.join(' ')
}

export const removeClass = (el, className) => {
  el.className = el.className.replace(className, '')
}
