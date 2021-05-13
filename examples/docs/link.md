# Link 文字链接
----
### 基础用法
文字超链接

<div class="demo-block">
  <ix-link href="https://www.baidu.com" target="_blank">默认链接</ix-link>
    <ix-link type="primary">主要链接</ix-link>
    <ix-link type="success">成功链接</ix-link>
    <ix-link type="warning">警告链接</ix-link>
    <ix-link type="danger">危险链接</ix-link>
    <ix-link type="info">信息链接</ix-link>
    <div>
        <ix-link to="/hello">路由链接</ix-link>
    </div>
</div>

::: demo
```html

  <ix-link href="https://www.baidu.com" target="_blank">默认链接</ix-link>
    <ix-link type="primary">主要链接</ix-link>
    <ix-link type="success">成功链接</ix-link>
    <ix-link type="warning">警告链接</ix-link>
    <ix-link type="danger">危险链接</ix-link>
    <ix-link type="info">信息链接</ix-link>
    <div>
        <ix-link to="/hello">路由链接</ix-link>
    </div>
```
:::

### 禁用状态
按钮不可用状态。
你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
<div class="demo-block">
  <ix-link href="https://www.baidu.com" target="_blank" :disabled="true">默认链接</ix-link>
    <ix-link type="primary" :disabled="true">主要链接</ix-link>
    <ix-link type="success" :disabled="true">成功链接</ix-link>
    <ix-link type="warning" :disabled="true">警告链接</ix-link>
    <ix-link type="danger" :disabled="true">危险链接</ix-link>
    <ix-link type="info" :disabled="true">信息链接</ix-link>
</div>

::: demo
```html
  <ix-link href="https://www.baidu.com" target="_blank" :disabled="true">默认链接</ix-link>
    <ix-link type="primary" :disabled="true">主要链接</ix-link>
    <ix-link type="success" :disabled="true">成功链接</ix-link>
    <ix-link type="warning" :disabled="true">警告链接</ix-link>
    <ix-link type="danger" :disabled="true">危险链接</ix-link>
    <ix-link type="info" :disabled="true">信息链接</ix-link>
```
:::

### 图标
带图标的文字链接可增强辨识度。
<div class="demo-block">
    <ix-link icon="ix-icon-smile">编辑</ix-link>
    <ix-link>搜索<i class="ix-icon-search"></i></ix-link>
</div>

::: demo
```html
  <div>
    <ix-button type="primary" icon="ix-icon-tool"></ix-button>
    <ix-button type="primary" icon="ix-icon-smile"></ix-button>
    <ix-button type="primary" icon="ix-icon-search">搜索</ix-button>
    <ix-button type="primary">上传<i class="ix-icon-upload"></i></ix-button>
  </div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|type	|类型	|string|	primary / success / warning / danger / info	|default|
|disabled	|是否禁用状态	|boolean	|—	|false|
|href	|原生 href 属性	|string|	—	|-|
|to	| router-link 路由属性	|string / object|	—	|-|
|icon|图标类名		|string|	—|	-|
