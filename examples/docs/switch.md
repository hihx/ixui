# Switch 开关
----
### 基础用法
表示两种相互对立的状态间的切换，多用于触发「开/关」。
<div class="demo-block">
  <ix-switch v-model="value"></ix-switch>
</div>
<script>
  export default {
    data() {
      return {
        value: true,
        value1: '100'
      }
    }
  };
</script>

::: demo
```html
<ix-switch v-model="value"></ix-switch>
<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
```
:::

### 文字描述
使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。<br>
可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。
<div class="demo-block">
  <ix-switch
  v-model="value"
  active-text="按月付费"
  inactive-text="按年付费"></ix-switch>
  <ix-switch style="display: flex"
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费"></ix-switch>
</div>

::: demo
```html
  <ix-switch
    v-model="value"
    active-text="按月付费"
    inactive-text="按年付费">
  </ix-switch>
  <ix-switch
    style="display: flex"
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="按月付费"
    inactive-text="按年付费">
  </ix-switch>
```
:::

### 扩展的 value 类型
设置`active-value`和`inactive-value`属性，接受`Boolean`, `String`或`Number`类型的值。
<div class="demo-block">
  <div>Switch value: {{value1}}</div>
  <ix-switch
    v-model="value1"
    active-value="100"
    inactive-value="0">
  </ix-switch>
</div>

::: demo
```html
<div>Switch value: {{value}}</div>
<ix-switch
  v-model="value"
  active-value="100"
  inactive-value="0">
</ix-switch>
<script>
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|value / v-model|	绑定值	|boolean / string / number|	—|	—|
|disabled	|是否禁用	|boolean|	—	|false|
|width|	switch 的宽度（像素）	|number|	—	|40|
|active-text|	switch 打开时的文字描述	|string|	—|	—|
|inactive-text|	switch 关闭时的文字描述	|string	|—	|—|
|active-value	|switch 打开时的值	|boolean |/ string / number|	—|	true|
|inactive-value|	switch 关闭时的值	|boolean / string / number|	—|	false|
|active-color	|switch 打开时的背景色|	string|	—	||
|inactive-color|	switch 关闭时的背景色	|string	|—|	|
|name|	switch 对应的 name 属性|	string|	—|	—|
