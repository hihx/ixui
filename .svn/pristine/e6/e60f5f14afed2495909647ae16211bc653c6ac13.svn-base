# MessageBox 弹框
----
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。<br>
`MessageBox` 的作用是美化系统自带的 `alert`、`confirm` 和 `prompt`，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 `Dialog`。
### 消息提示
当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

<div class="demo-block">
    <ix-button @click="open()">点击打开Message box</ix-button>
    <ix-button @click="openV()">点击打开VNode</ix-button>
</div>
<script>
    export default {
      methods: {
        open() {
            this.$alert('这是一段内容', '标题名称', {
                                  confirmButtonText: '确定',
                                  callback: action => {
                                    this.$alert(action)
                                  }
                                })
        },
        openV () {
            const h = this.$createElement;
            this.$alert(h('span', null, [
                                    h('span', null, '内容可以是 '),
                                    h('i', { style: 'color: teal' }, 'VNode')
                                  ]))
        },
          open2() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          },
          open3() {
            this.$prompt('请输入邮箱', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    }).then(value => {
                      this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                      });
                    }).catch(() => {
                      this.$message({
                        type: 'info',
                        message: '取消输入'
                      });
                    });
          }
      }
    }
</script>

::: demo
```html
    <ix-button @click="open">点击打开Message box</ix-button>
    <ix-button @click="openV()">点击打开VNode</ix-button>
<script>
    export default {
      methods: {
        open () {
            this.$alert('这是一段内容', '标题名称', {
                                  confirmButtonText: '确定',
                                  callback: action => {
                                    alert(action)
                                  }
                                })
        },
        openV () {
            const h = this.$createElement;
            this.$alert(h('span', null, [
                                    h('span', null, '内容可以是 '),
                                    h('i', { style: 'color: teal' }, 'VNode')
                                  ]))
        },
      }
    }
</script>
```
:::

### 确认消息
提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

<div class="demo-block">
    <ix-button @click="open2()">点击打开Message box</ix-button>
</div>

::: demo
```html
    <ix-button @click="open">点击打开Message box</ix-button>
<script>
    export default {
      methods: {
          open() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }
       }
    }
</script>
```
:::

### 提交内容
当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。

<div class="demo-block">
    <ix-button @click="open3()">点击打开Message box</ix-button>
</div>

::: demo
```html
    <ix-button @click="open">点击打开Message box</ix-button>
<script>
    export default {
      methods: {
          open() {
            this.$prompt('请输入邮箱', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    }).then((value) => {
                      this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                      });
                    }).catch(() => {
                      this.$message({
                        type: 'info',
                        message: '取消输入'
                      });
                    });
          }
       }
    }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|title	|MessageBox 标题	|string|	—|	—|
|message	|MessageBox 消息正文内容	|string / VNode	|—|	—|
|type	|消息类型，用于显示图标	|string	|success / info / warning / error	|—|
|iconClass	|自定义图标的类名，会覆盖 type|	string	|—	|—|
|className	|MessageBox 的自定义类名	|string|	—	|—|
|callback	|若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调	function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法|	—|	—|
|showCancelButton	|是否显示取消按钮	|boolean	|—	|false（以 confirm 和 prompt 方式调用时为 true）|
|showConfirmButton	|是否显示确定按钮	|boolean	|—	|true|
|cancelButtonText	|取消按钮的文本内容	|string	|—	|取消|
|confirmButtonText	|确定按钮的文本内容	|string	|—	|确定|
|showInput	|是否显示输入框	|boolean|	—	|false（以 prompt 方式调用时为 true）|
|inputPlaceholder	|输入框的占位符	|string	|—	|—|
|inputType	|输入框的类型	|string	|—	|text|
|inputValue	|输入框的初始文本	|string|	—|	—|
|inputPattern	|输入框的校验表达式	|regexp	|—|	—|
|inputValidator	|输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage	|function	|—	|—|
