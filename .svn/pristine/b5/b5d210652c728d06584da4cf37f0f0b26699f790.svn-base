# Alert 警告
----
用于页面中展示重要的提示信息。
### 基础用法
页面中的非浮层元素，不会自动消失。

<div class="demo-block">
    <ix-alert
        title="成功提示的文案"
        type="success">
      </ix-alert>
      <ix-alert
        title="消息提示的文案"
        type="info">
      </ix-alert>
      <ix-alert
        title="警告提示的文案"
        type="warning">
      </ix-alert>
      <ix-alert
        title="错误提示的文案"
        type="error">
      </ix-alert>
</div>

::: demo
```html
      <ix-alert
        title="成功提示的文案"
        type="success">
      </ix-alert>
      <ix-alert
        title="消息提示的文案"
        type="info">
      </ix-alert>
      <ix-alert
        title="警告提示的文案"
        type="warning">
      </ix-alert>
      <ix-alert
        title="错误提示的文案"
        type="error">
      </ix-alert>
```
:::

### 其他写法

<div class="demo-block">
      <ix-alert closable="false">消息提示的文案</ix-alert>
      <ix-alert
        title="带内容介绍"
        content="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为"
        type="warning">
      </ix-alert>
      <ix-alert
        type="error">
        <span slot="title" style="color: red">可以自定义标题</span>
        <span slot="content" style="color: red">可以自定义内容</span>
      </ix-alert>
</div>

::: demo
```html
      <ix-alert closable="false">消息提示的文案</ix-alert>
      <ix-alert
        title="带内容介绍"
        content="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为"
        type="warning">
      </ix-alert>
      <ix-alert
        type="error">
        <span slot="title" style="color: red">可以自定义标题</span>
        <span slot="content" style="color: red">可以自定义内容</span>
      </ix-alert>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|title	|标题, 也可通过 slot 传入	|string	|—	|—|
|type	|主题	|string	|success/warning/info/error	|info|
|content|	内容文字, 也可通过 slot 传入	|string	|—	|—|
|closable	|是否可关闭	|boolean|	—	|true|

### Slots 插槽
| 名称      | 说明    |
|---------- |-------- |
| -	| 标题 |
| title	| 标题 |
| content	| 内容文字 |
