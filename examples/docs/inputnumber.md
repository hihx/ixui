# InputNumber 计数器
----
### 基础用法
仅允许输入标准的数字值，可定义范围

<div class="demo-block">
    <ix-inputnumber v-model="input" :min="2" :max="6"></ix-inputnumber>
    <ix-inputnumber v-model="input" :min="2" :max="6" controls-position="right"></ix-inputnumber>
</div>
<script>
export default {
  data() {
    return {
      input: 4,
      input2: 2
    }
  }
}
</script>

::: demo
```html
    <template>
    <ix-inputnumber v-model="input" :min="2" :max="6"></ix-inputnumber>
    <ix-inputnumber v-model="input" :min="2" :max="6" controls-position="right"></ix-inputnumber>
    </template>
    <script>
    export default {
      data() {
        return {
          input: 4
        }
      }
    }
    </script>

```
:::

### 禁用状态
通过 `disabled` 属性指定是否禁用 `inputnumber` 组件
<div class="demo-block">
    <ix-inputnumber :disabled="true" v-model="input2"></ix-inputnumber>
</div>

::: demo
```html
    <ix-inputnumber :disabled="true" v-model="input"></ix-inputnumber>
```
:::

### 步数
允许定义递增递减的步数控制
<div class="demo-block">
  <div>
    <ix-inputnumber v-model="input2" :step="2"></ix-inputnumber>
  </div>
</div>

::: demo
```html
    <ix-inputnumber v-model="input" :step="2"></ix-inputnumber>
```
:::


### 不同尺寸
可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 `medium`、`small` 和 `mini` 三种尺寸。
<div class="demo-block">
  <div>
    <ix-inputnumber v-model="input2"></ix-inputnumber>
    <ix-inputnumber v-model="input2" size="medium"></ix-inputnumber>
    <ix-inputnumber v-model="input2" size="small"></ix-inputnumber>
    <ix-inputnumber v-model="input2" size="mini"></ix-inputnumber>
  </div>
</div>

::: demo
```html
    <ix-inputnumber v-model="input"></ix-inputnumber>
    <ix-inputnumber v-model="input" size="medium"></ix-inputnumber>
    <ix-inputnumber v-model="input" size="small"></ix-inputnumber>
    <ix-inputnumber v-model="input" size="mini"></ix-inputnumber>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|value / v-model|	绑定值	|number|	—|	0|
|min	|设置计数器允许的最小值	|number|	—	|-|
|max	|设置计数器允许的最大值	|number|	—	|-|
|step	|计数器步长|	number|	—	|1|
|size	|计数器尺寸	|string	large, small|	—|
|disabled	|是否禁用计数器	|boolean	|—	|false|
|controls-position	|控制按钮位置	|string	|right	|-|
|name	|原生属性	|string|	—	|—|

### Events 回调事件
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |---------- |
| blur	| 失去焦点时触发	| (event: Event)|
| focus	| 获得焦点时触发	| (event: Event)|
| change	| 仅在输入框失去焦点或用户按下回车时触发	| (value: string / number)|

### Methods 调用函数
| 方法名	| 说明	| 参数|
|---------- |-------- |---------- |
| focus	| 使 input 获取焦点	| - |
| blur	| 使 input 失去焦点	| - |
