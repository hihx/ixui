# CheckBox 多选框
----
一组备选项中进行多选
### 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍<br>
要使用 `checkbox` 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 `checkbox` `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。
<div class="demo-block">
    <div>
    爱好：
          <ix-checkbox v-model="value" label="1">吃饭</ix-checkbox>
          <ix-checkbox v-model="value" label="2">睡觉</ix-checkbox>
    </div>
    <div>
    是否同意：<ix-checkbox v-model="value2">我同意游戏规则</ix-checkbox>
    </div>
</div>
<script>
      export default {
        data() {
          return {
            value: ['2'],
            value2: true,
            value3: false,
            value4: ['3', '2'],
            list: [
                {label: '北京', value: '1'},
                {label: '上海', value: '2'},
                {label: '广州', value: '3'},
                {label: '深圳', value: '4'},
            ],
            list1: [
                {label: '北京', value: '1'},
                {label: '上海', value: '2'},
                {label: '广州', value: '3'},
                {label: '深圳', value: '4'},
                {label: '杭州', value: '5'},
            ]
          }
        },
      }
    </script>


::: demo
```html
<div class="demo-block">
    <div>
    爱好：
          <ix-checkbox v-model="value" label="1">吃饭</ix-checkbox>
          <ix-checkbox v-model="value" label="2">睡觉</ix-checkbox>
    </div>
    <div>
    是否同意：<ix-checkbox v-model="value2">我同意游戏规则</ix-checkbox>
    </div>
</div>
<script>
      export default {
        data() {
          return {
            value: ['2'],
            value2: true,
          }
        },
      }
</script>

```
:::

### 禁用状态
checkbox不可用状态。
你可以使用`disabled`属性来定义是否可用，它接受一个`Boolean`值。
<div class="demo-block">
      <ix-checkbox v-model="value2" :disabled="true">男士</ix-checkbox>
      <ix-checkbox v-model="value3" :disabled="true">女士</ix-checkbox>
</div>

::: demo
```html
      <ix-checkbox v-model="value2" :disabled="true">男士</ix-checkbox>
      <ix-checkbox v-model="value3" :disabled="true">女士</ix-checkbox>
<script>
  export default {
    data () {
      return {
        value2: true,
        value3: false
      };
    }
  }
</script>
```
:::

### 遍历数组
<div class="demo-block">
      <ix-checkbox v-model="value4" v-for="item in list" :key="item.value" :label="item.value">{{item.label}}</ix-checkbox>
</div>

::: demo
```html
<ix-checkbox v-model="value4" v-for="item in list" :key="item.value" :label="item.value">{{item.label}}</ix-checkbox>

<script>
      export default {
        data() {
          return {
            value4: ['3', '2'],
            list: [
                {label: '北京', value: '1'},
                {label: '上海', value: '2'},
                {label: '广州', value: '3'},
                {label: '深圳', value: '4'},
                {label: '杭州', value: '5'},
            ]
          }
        },
      }
    </script>
```
:::

### 可选项目数量的限制
使用 `max` 属性能够限制可以被勾选的项目的数量。
<div class="demo-block">
      请选择2项：
      <ix-checkbox v-model="value4" v-for="item in list1" :key="item.value" :label="item.value" :max="2">{{item.label}}</ix-checkbox>
</div>

::: demo
```html
<ix-checkbox v-model="value4" v-for="item in list" :key="item.value" :label="item.value" :max="2">{{item.label}}</ix-checkbox>

<script>
      export default {
        data() {
          return {
            value4: ['3', '2'],
            list: [
                {label: '北京', value: '1'},
                {label: '上海', value: '2'},
                {label: '广州', value: '3'},
                {label: '深圳', value: '4'},
            ]
          }
        },
      }
    </script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model     | 绑定值   | string / number / boolean / Array    |   - |     -    |
| label	| checkbox 的 value| 	string / number / boolean| 	—| 	—|
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| name	| 原生属性	| string	| —	| — |
| max	| 可被勾选的 checkbox 的最大数量	| number	| —|  — |


