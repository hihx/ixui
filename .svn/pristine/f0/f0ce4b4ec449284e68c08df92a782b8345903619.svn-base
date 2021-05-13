# Popover 弹出框
----
### 基础用法
<div class="demo-block">
    <ix-button v-popover:popover1>click 指令触发</ix-button>
    <ix-popover ref="popover1" :visible.sync="visible">click 指令触发</ix-popover>
    <ix-button v-popover:popover2>hover 指令触发</ix-button>
    <ix-popover ref="popover2" trigger="hover" padding="0">
        <table class="table">
            <thead>
                <tr>
                    <td>名称</td>
                    <td>说明</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>33</td>
                    <td>44</td>
                </tr>
            </tbody>
        </table>
    </ix-popover>
    <ix-popover trigger="hover">
        你好呀~
        <ix-button slot="reference">reference插槽触发</ix-button>
    </ix-popover>
</div>
<script>
    export default {
      data() {
        return {
          visible: false
        }
      }
    }
    </script>

::: demo
```html
    <ix-button v-popover:popover1>click</ix-button>
    <ix-popover ref="popover1" :visible.sync="visible">你好啊</ix-popover>
    <ix-button v-popover:popover2>hover</ix-button>
    <ix-popover ref="popover2" trigger="hover">
        <table class="table">
            <thead>
                <tr>
                    <td>名称</td>
                    <td>说明</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>33</td>
                    <td>44</td>
                </tr>
            </tbody>
        </table>
    </ix-popover>
    <ix-popover trigger="hover">
        你好呀~
        <ix-button slot="reference">reference插槽触发</ix-button>
    </ix-popover>
    <script>
    export default {
      data() {
        return {
          visible: false
        }
      }
    }
    </script>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger	| 触发方式	| String	| click/hover/	| click |
| visible.sync     | 显示隐藏   | Boolean  |   -            |    —     |
| width     | 宽度   | string    |   - |     —    |
| className     | 添加类名   | string    |   - |     —    |
|placement|	Tooltip 的出现位置	|String	|top/bottom/left/right|	bottom|

### Slots 插槽
| 名称      | 说明    |
|---------- |-------- |
| default	| 默认 |


### Methods 调用函数
| 方法名	| 说明	| 参数|
|---------- |-------- |---------- |
| show	| 显示弹出框	| (target: 触发的元素el) |
| hide	| 关闭弹出框	| - |
