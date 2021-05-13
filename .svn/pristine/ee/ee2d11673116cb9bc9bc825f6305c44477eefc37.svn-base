# Select 选择器
----
当选项过多时，使用下拉菜单展示并选择内容。
### 基础用法
适用广泛的基础单选
`v-model`的值为当前被选中的`ix-option`的 `value` 属性值
<div class="demo-block">
      <ix-select v-model="value" placeholder="请选择">
        <ix-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ix-option>
      </ix-select>
</div>
<script>
      export default {
        data() {
          return {
            options: [{
              value: '0',
              label: '黄金糕'
            }, {
              value: '1',
              label: '双皮奶'
            }, {
              value: '2',
              label: '蚵仔煎'
            }],
            value: '0'
          }
        },
      }
    </script>


::: demo
```html
<template>
  <ix-select v-model="value" placeholder="请选择">
    <ix-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ix-option>
  </ix-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '0',
          label: '黄金糕'
        }, {
          value: '1',
          label: '双皮奶'
        }, {
          value: '2',
          label: '蚵仔煎'
        }],
        value: '0'
      }
    }
  }
</script>

```
:::

### 禁用状态
按钮不可用状态。
你可以使用`disabled`属性来定义是否可用，它接受一个`Boolean`值。
<div class="demo-block">
  <ix-select placeholder="请选择" :disabled="true">
    <ix-option value="0">滴滴滴</ix-option>
  </ix-select>
  <ix-select placeholder="请选择">
    <ix-option value="0">哈哈哈</ix-option>
    <ix-option value="1" :disabled="true">哒哒哒</ix-option>
    <ix-option value="2">滴滴滴</ix-option>
  </ix-select>
</div>

::: demo
```html
  <ix-select placeholder="请选择" :disabled="true">
    <ix-option value="0">滴滴滴</ix-option>
  </ix-select>
  <ix-select placeholder="请选择">
    <ix-option value="0">哈哈哈</ix-option>
    <ix-option value="1" :disabled="true">哒哒哒</ix-option>
    <ix-option value="2">滴滴滴</ix-option>
  </ix-select>
```
:::

### 基础多选
适用性较广的基础多选, 可同时选中多项
<div class="demo-block">
  <ix-select placeholder="请选择" multiple>
    <ix-option value="0">哈哈哈</ix-option>
    <ix-option value="1">哒哒哒</ix-option>
    <ix-option value="2">滴滴滴</ix-option>
    <ix-option value="3">嘻嘻嘻</ix-option>
    <ix-option value="4">好好好</ix-option>
  </ix-select>
</div>

::: demo
```html
  <ix-select placeholder="请选择" multiple>
    <ix-option value="0">哈哈哈</ix-option>
    <ix-option value="1">哒哒哒</ix-option>
    <ix-option value="2">滴滴滴</ix-option>
    <ix-option value="3">嘻嘻嘻</ix-option>
    <ix-option value="4">好好好</ix-option>
  </ix-select>
```
:::

### 加载中
数据还在加载中，显示loading动画
要设置为 `loading` 状态，只要设置`loading`属性为`true`即可。
<div class="demo-block">
  <ix-select :loading='true'></ix-select>
</div>

::: demo
```html
  <ix-select :loading='true'></ix-select>
```
:::

### 不同尺寸
组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。
<div class="demo-block">
  <div>
    <ix-select><ix-option value="0">哈哈哈</ix-option></ix-select>
    <ix-select size="medium"><ix-option value="0">哈哈哈</ix-option></ix-select>
    <ix-select size="small"><ix-option value="0">哈哈哈</ix-option></ix-select>
    <ix-select size="mini"><ix-option value="0">哈哈哈</ix-option></ix-select>
  </div>
</div>

::: demo
```html
    <ix-select>
        <ix-option value="0">哈哈哈</ix-option>
    </ix-select>
    <ix-select size="medium">
        <ix-option value="0">哈哈哈</ix-option>
    </ix-select>
    <ix-select size="small">
        <ix-option value="0">哈哈哈</ix-option>
    </ix-select>
    <ix-select size="mini">
        <ix-option value="0">哈哈哈</ix-option>
    </ix-select>
```
:::

### Select Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model     | 绑定值   | string / number / array(multiple=true时)    |   - |     -    |
| placeholder |	输入框占位文本	| string |	— |	— |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| name	| 原生属性	| string	| —	| — |
| autocomplete	| 自动补全	| string	| on, off	| off |
| readonly	| 是否只读	| boolean	| —	| false |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| multiple	| 是否多选	| boolean	| —	| false |
| multiple-limit	| 多选时用户最多可以选择的项目数，为 0 则不限制	| number	| —	| 0 |
| loading	| 处于加载中	| boolean	| —	| false |

### Select Slots 插槽
| 名称      | 说明    |
|---------- |-------- |
| -	| Option 组件列表 |
| prepend	| Select 组件头部内容 |

### Select Events
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |-------- |
| change	| 选中值发生变化时触发| 	目前的选中值|

### Option Attributes
| 参数	| 说明	| 类型	| 可选值	| 默认值
|---------- |-------- |-------- |-------- |-------- |
| value	| 选项的值	| string/number/object| 	—	| —|
| label	| 选项的标签，若不设置则默认与 value 相同	| string/number	| —	| —|
| disabled	| 是否禁用该选项	| boolean	| —	| false|

