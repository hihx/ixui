# Tooltip 文字提示
----
### 基础用法
<div class="demo-block flex">
  <ix-tooltip content="这是 Left" placement="left">
    <ix-button>Left</ix-button>
  </ix-tooltip>
  <div style="display: flex; flex-direction: column;justify-content: center">
    <ix-tooltip content="这是 Top" placement="top">
      <ix-button>Top</ix-button>
    </ix-tooltip>
    <div style="height: 100px"></div>
      <ix-tooltip content="这是 Bottom">
        <ix-button>Bottom</ix-button>
      </ix-tooltip>
  </div>
  <ix-tooltip content="这是 Right" placement="right">
    <ix-button>Right</ix-button>
  </ix-tooltip>
</div>

::: demo
```html
<div class="flex">
  <ix-tooltip content="这是 Left" placement="left">
    <ix-button>Left</ix-button>
  </ix-tooltip>
  <div style="display: flex; flex-direction: column;justify-content: center">
    <ix-tooltip content="这是 Top" placement="top">
      <ix-button>Top</ix-button>
    </ix-tooltip>
    <div style="height: 100px"></div>
    <ix-tooltip content="这是 Bottom">
      <ix-button>Bottom</ix-button>
    </ix-tooltip>
  </div>
  <ix-tooltip content="这是 Right" placement="right">
    <ix-button>Right</ix-button>
  </ix-tooltip>
</div>
```
:::

### 更多 Content
展示多行文本或者是设置文本内容的格式
<div class="demo-block">
  <ix-tooltip content="这是 Top" placement="top">
    <div slot="content">多行信息<br/>第二行信息</div>
    <ix-button>Top</ix-button>
  </ix-tooltip>
</div>

::: demo
```html
<ix-tooltip content="这是 Top" placement="top">
  <div slot="content">多行信息<br/>第二行信息</div>
  <ix-button>Top</ix-button>
</ix-tooltip>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| visible.sync     | 显示隐藏   | Boolean  |   -            |    —     |
| width     | 宽度   | string    |   - |     —    |
| className     | 添加类名   | string    |   - |     —    |
|content	|显示的内容，也可以通过 slot#content 传入 DOM|	String|	—|	—|
|placement|	Tooltip 的出现位置	|String	|top/bottom/left/right|	bottom|
|disabled	|Tooltip 是否可用|	Boolean|	—|	false|

### Slots 插槽
| 名称      | 说明    |
|---------- |-------- |
| default	| 触发 tooltip 的控件 |
| content	| 自定义文本内容 |
