# Dialog 对话框
----
`Dialog` 弹出一个对话框，适合需要定制性更大的场景。<br>
需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 `Dialog`。`Dialog` 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`的用法。
### 基础用法
<div class="demo-block">
    <ix-button @click="visible = true">点击打开对话框</ix-button>
    <ix-dialog width="30%" title="欢迎" :visible.sync="visible" :before-close="handleClose">
        <p>
            <label>标题</label>
            <ix-input></ix-input>
        </p>
        <div>
            <label>内容</label>
            <ix-input type="textarea" :rows="5"></ix-input>
        </div>
        <div slot="footer" class="dialog-footer">
            <ix-button @click="visible = false">取 消</ix-button>
            <ix-button type="primary" @click="visible = false">确 定</ix-button>
        </div>
    </ix-dialog>
</div>
<script>
    export default {
      data() {
        return {
          visible: false,
          overvisible: false,
          innerVisible: false
        }
      },
      methods: {
        handleClose(done) {
            if (confirm('确认关闭？')) {
             done()
            }
        }
      }
    }
    </script>

::: demo
```html
    <ix-button @click="visible = true">点击打开对话框</ix-button>
    <ix-dialog width="30%" title="欢迎" :visible.sync="visible" :before-close="handleClose">
        <p>
            <label>标题</label>
            <ix-input></ix-input>
        </p>
        <div>
            <label>内容</label>
            <ix-input type="textarea" :rows="5"></ix-input>
        </div>
        <div slot="footer" class="dialog-footer">
            <ix-button @click="visible = false">取 消</ix-button>
            <ix-button type="primary" @click="visible = false">确 定</ix-button>
        </div>
    </ix-dialog>
<script>
    export default {
      data() {
        return {
          visible: false,
          methods: {
            handleClose(done) {
                this.$confirm('确认关闭？').then(_ => { done(); }).catch(_ => {});
            }
          }
        }
      }
    }
    </script>
```
:::

### 嵌套的 Dialog
如果需要在一个 `Dialog` 内部嵌套另一个 `Dialog`，需要使用 `append-to-body` 属性。
<div class="demo-block">
    <ix-button @click="overvisible = true">点击外层对话框</ix-button>
    <ix-dialog width="30%" title="欢迎" :visible.sync="overvisible">
        <ix-dialog
              width="30%"
              title="内层 Dialog"
              :visible.sync="innerVisible"
              append-to-body>
        </ix-dialog>
        <div slot="footer" class="dialog-footer">
            <ix-button @click="overvisible = false">取 消</ix-button>
            <ix-button type="primary" @click="innerVisible = true">打开内层Dialog</ix-button>
        </div>
    </ix-dialog>
</div>

::: demo
```html
    <ix-button @click="overvisible = true">点击外层对话框</ix-button>
        <ix-dialog width="30%" title="欢迎" :visible.sync="overvisible">
            <ix-dialog
                  width="30%"
                  title="内层 Dialog"
                  :visible.sync="innerVisible"
                  append-to-body>
            </ix-dialog>
            <div slot="footer" class="dialog-footer">
                <ix-button @click="overvisible = false">取 消</ix-button>
                <ix-button type="primary" @click="innerVisible = true">打开内层Dialog</ix-button>
            </div>
        </ix-dialog>
<script>
    export default {
      data() {
        return {
          overvisible: false,
          innerVisible: false
        }
      }
    }
    </script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| visible	| 是否显示 Dialog，支持 .sync 修饰符	| Boolean	| -	| false |
| className     | Dialog 的自定义类名   | string  |   -            |    —     |
| width     | Dialog 的宽度   | string    |   - |     50%    |
| title     | Dialog 的标题，也可通过具名 slot （见下表）传入   | string    |   - |     —    |
| model     | 是否需要遮罩层   | Boolean    |   - |     true    |
| showClose     | 	是否显示关闭按钮   | Boolean    |   - |     true    |
| transition     | 动画类名   | string    |   - |     slide-fade    |
| append-to-body     | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true   | boolean    |   - |     false    |
| beforeClose     | 关闭前的回调，会暂停 Dialog 的关闭   | function(done)，done 用于关闭 Dialog    |   - |     —    |

### Slots 插槽
| 名称      | 说明    |
|---------- |-------- |
|—	|Dialog 的内容|
|title	|Dialog 标题区的内容|
|footer	|Dialog 按钮操作区的内容|


### Events 回调函数
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |---------- |
| open	| Dialog 打开的回调	| - |
| close	| Dialog 关闭的回调	| - |
