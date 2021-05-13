# Input 文本框
----
### 基础用法
通过鼠标或键盘输入字符

<div class="demo-block">
  <div>
    <ix-input v-model="input" placeholder="请输入内容..."></ix-input>
  </div>
</div>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

::: demo
```html
    <template>
        <ix-input v-model="input" placeholder="请输入内容..."></ix-input>
    </template>
    <script>
    export default {
      data() {
        return {
          input: ''
        }
      }
    }
    </script>

```
:::

### 禁用状态
通过 `disabled` 属性指定是否禁用 `input` 组件
<div class="demo-block">
    <ix-input placeholder="请输入内容..." :disabled="true"></ix-input>
</div>

::: demo
```html
    <ix-input placeholder="请输入内容..." :disabled="true"></ix-input>
```
:::

### 密码框
<div class="demo-block">
  <div>
    <ix-input type="password"></ix-input>
  </div>
</div>

::: demo
```html
  <ix-input type="password"></ix-input>
```
:::

### 带 icon 的输入框
可以通过 `prefix-icon` 和 `suffix-icon` 属性在 `input` 组件首部和尾部增加显示图标
<div class="demo-block">
  <div>
    <ix-input prefix-icon="ix-icon-search"></ix-input>
  </div>
  <div>
    <ix-input suffix-icon="ix-icon-smile"></ix-input>
  </div>
</div>

::: demo
```html
  <div>
    <ix-input prefix-icon="ix-icon-search"></ix-input>
  </div>
  <div>
    <ix-input suffix-icon="ix-icon-smile"></ix-input>
  </div>
```
:::

### 多行文本域
用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`
<div class="demo-block">
  <div>
    <ix-input type="textarea" :rows="5"></ix-input>
  </div>
</div>

::: demo
```html
  <ix-input type="textarea" :rows="5"></ix-input>
```
:::

### 复合型输入框
可前置或后置元素，一般为标签或按钮
<div class="demo-block">
    <ix-input>
        <template slot="prepend">Http://</template>
    </ix-input>
    <div>
        <ix-input>
            <template slot="append">.com</template>
        </ix-input>
    </div>
    <div>
        <ix-input style="width: 400px">
            <ix-select slot="prepend">
                <ix-option label="餐厅名" value="1"></ix-option>
                <ix-option label="订单号" value="2"></ix-option>
                <ix-option label="用户电话" value="3"></ix-option>
            </ix-select>
            <ix-button slot="append" icon="ix-icon-search"></ix-button>
        </ix-input>
    </div>
</div>

::: demo
```html
    <ix-input>
        <template slot="prepend">Http://</template>
    </ix-input>
    <div>
        <ix-input>
            <template slot="append">.com</template>
        </ix-input>
    </div>
    <div>
        <ix-input style="width: 400px">
            <ix-select slot="prepend">
                <ix-option label="餐厅名" value="1"></ix-option>
                <ix-option label="订单号" value="2"></ix-option>
                <ix-option label="用户电话" value="3"></ix-option>
            </ix-select>
            <ix-button slot="append" icon="ix-icon-search"></ix-button>
        </ix-input>
    </div>
```
:::

### 不同尺寸
可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 `medium`、`small` 和 `mini` 三种尺寸。
<div class="demo-block">
  <div>
    <ix-input suffix-icon="ix-icon-search"></ix-input>
    <ix-input size="medium" suffix-icon="ix-icon-search"></ix-input>
    <ix-input size="small" suffix-icon="ix-icon-search"></ix-input>
    <ix-input size="mini" suffix-icon="ix-icon-search"></ix-input>
  </div>
</div>

::: demo
```html
    <ix-input suffix-icon="ix-icon-search"></ix-input>
    <ix-input size="medium" suffix-icon="ix-icon-search"></ix-input>
    <ix-input size="small" suffix-icon="ix-icon-search"></ix-input>
    <ix-input size="mini" suffix-icon="ix-icon-search"></ix-input>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   text，textarea 和其他 原生 input 的 type 值 |     text    |
| value / v-model     | 绑定值   | string / number    |   - |     -    |
| maxlength	| 原生属性，最大输入长度	| number	| —	| — |
| minlength	| 原生属性，最小输入长度	| number	| —	| — |
| placeholder |	输入框占位文本	| string |	— |	— |
| prefix-icon	| 输入框头部图标	| string	| —	| — |
| suffix-icon	| 输入框尾部图标	| string	| —	| — |
| rows	| 输入框行数，只对 type="textarea" 有效	| number	| —	| 2 |
| autocomplete	| 原生属性，自动补全	| string	| on, off	| off |
| name	| 原生属性	| string	| —	| — |
| readonly	| 原生属性，是否只读	| boolean	| —	| false |
| max	| 原生属性，设置最大值	| —	| —	| — |
| min	| 原生属性，设置最小值	| —	| —	| — |
| step	| 原生属性，设置输入字段的合法数字间隔	| —	| —	| — |
| autofocus	| 原生属性，自动获取焦点	| boolean	| true, false	| false |
| form	| 原生属性	| string	| —	| — |
| label	| 输入框关联的label文字	| string	| —	| — |
| tabindex	| 输入框的tabindex	| string	| -	| - |
| size     | 输入框尺寸，只在 type!="textarea" 时有效   | string  |   medium / small / mini            |    —     |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| clearable	| 是否可清空| 	boolean| 	—| 	false|

### Input Slots 插槽
| 名称      | 说明    |
|---------- |-------- |
| prefix	| 输入框头部内容 |
| suffix	| 输入框尾部内容 |
| prepend	| 输入框前置内容 |
| append	| 输入框后置内容 |

### Input Events 回调事件
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |---------- |
| blur	| 在 Input 失去焦点时触发	| (event: Event)|
| focus	| 在 Input 获得焦点时触发	| (event: Event)|
| change	| 仅在输入框失去焦点或用户按下回车时触发	| (value: string | number)|
| input	| 在 Input 值改变时触发	| (value: string | number)|

### Input Methods 调用函数
| 方法名	| 说明	| 参数|
|---------- |-------- |---------- |
| focus	| 使 input 获取焦点	| - |
| blur	| 使 input 失去焦点	| - |
