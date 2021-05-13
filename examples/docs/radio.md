# Radio 单选框
----
在一组备选项中进行单选
### 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 `Select` 选择器。<br>
要使用 `Radio` 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 `Radio` `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。
<div class="demo-block">
    <div>
    爱好：
          <ix-radio v-model="value" label="1">吃饭</ix-radio>
          <ix-radio v-model="value" label="2">睡觉</ix-radio>
    </div>
    <div>
    宠物：
          <ix-radio v-model="value2" label="1">猫猫</ix-radio>
          <ix-radio v-model="value2" label="2">狗狗</ix-radio>
    </div>
</div>
<script>
      export default {
        data() {
          return {
            value: '2',
            value2: '1',
            value3: '1',
            value4: '1',
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


::: demo
```html
<div class="demo-block">
    <div>
    爱好：
          <ix-radio v-model="value" label="1">吃饭</ix-radio>
          <ix-radio v-model="value" label="2">睡觉</ix-radio>
    </div>
    <div>
    宠物：
          <ix-radio v-model="value2" label="1">猫猫</ix-radio>
          <ix-radio v-model="value2" label="2">狗狗</ix-radio>
    </div>
</div>
<script>
      export default {
        data() {
          return {
            value: '2',
            value2: '1'
          }
        },
      }
</script>

```
:::

### 禁用状态
radio不可用状态。
你可以使用`disabled`属性来定义是否可用，它接受一个`Boolean`值。
<div class="demo-block">
      <ix-radio v-model="value3" label="1" :disabled="true">男士</ix-radio>
      <ix-radio v-model="value3" label="2" :disabled="true">女士</ix-radio>
</div>

::: demo
```html
      <ix-radio v-model="value" label="1" :disabled="true">男士</ix-radio>
      <ix-radio v-model="value" label="2" :disabled="true">女士</ix-radio>
<script>
  export default {
    data () {
      return {
        value: '1'
      };
    }
  }
</script>
```
:::

### 遍历数组
<div class="demo-block">
      <ix-radio v-model="value4" v-for="item in list" :key="item.value" :label="item.value">{{item.label}}</ix-radio>
</div>

::: demo
```html
<ix-radio v-model="value4" v-for="item in list" :key="item.value" :label="item.value">{{item.label}}</ix-radio>

<script>
      export default {
        data() {
          return {
            value4: '3',
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
| value / v-model     | 绑定值   | string / number / boolean    |   - |     -    |
| label	| Radio 的 value| 	string / number / boolean| 	—| 	—|
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| name	| 原生属性	| string	| —	| — |


