# MessageBox 消息提示
----
常用于主动操作后的反馈提示<br>
### 基础用法
从顶部出现，3 秒后自动消失。

<div class="demo-block">
    <ix-button @click="open()">点击打开Message</ix-button>
    <ix-button @click="openVn()">点击打开 VNode</ix-button>
</div>
<script>
    export default {
      methods: {
        open() {
            this.$message('这是一条消息提示');
        },
        openVn() {
                const h = this.$createElement;
                this.$message({
                  message: h('span', null, [
                    h('span', null, '内容可以是 '),
                    h('i', { style: 'color: teal' }, 'VNode')
                  ])
                });
              },
        open1() {
                this.$message('这是一条消息提示');
              },
              open2() {
                this.$message({
                  message: '恭喜你，这是一条成功消息',
                  type: 'success'
                });
              },
              open3() {
                this.$message({
                  message: '警告哦，这是一条警告消息',
                  type: 'warning'
                });
              },
              open4() {
                this.$message.error('错了哦，这是一条错误消息');
              }
      }
    }
</script>

::: demo
```html
    <ix-button @click="open()">点击打开Message</ix-button>
<script>
    export default {
      methods: {
        open() {
            this.$message('这是一条消息提示');
        },
      }
    }
</script>
```
:::

### 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。

<div class="demo-block">
    <ix-button :plain="true" @click="open2">成功</ix-button>
      <ix-button :plain="true" @click="open3">警告</ix-button>
      <ix-button :plain="true" @click="open1">消息</ix-button>
      <ix-button :plain="true" @click="open4">错误</ix-button>
</div>

::: demo
```html
    <ix-button :plain="true" @click="open2">成功</ix-button>
      <ix-button :plain="true" @click="open3">警告</ix-button>
      <ix-button :plain="true" @click="open1">消息</ix-button>
      <ix-button :plain="true" @click="open4">错误</ix-button>
<script>
    export default {
      methods: {
                open1() {
                  this.$message('这是一条消息提示');
                },
                open2() {
                  this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                  });
                },

                open3() {
                  this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                  });
                },

                open4() {
                  this.$message.error('错了哦，这是一条错误消息');
                }
       }
    }
</script>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|message	|消息文字	|string / VNode	|—	|—|
|type	|主题	|string	|success/warning/info/error	|info|
|iconClass	|自定义图标的类名，会覆盖 |type|	string	|—|	—|
|className	|自定义类名	|string	|—	|—|
