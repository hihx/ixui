# Layout 布局
----
通过基础的 24 分栏，迅速简便地创建布局。
### 基础用法
使用单一分栏创建基础的栅格布局。

<div class="demo-block">
<ix-row>
  <ix-col :span="24"><div class="grid-content bg-purple-dark"></div></ix-col>
</ix-row>
<ix-row>
  <ix-col :span="12"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="12"><div class="grid-content bg-purple-light"></div></ix-col>
</ix-row>
<ix-row>
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="8"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
</ix-row>
<ix-row>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple-light"></div></ix-col>
</ix-row>
</div>
<style lang="less">
  .ix-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .ix-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

::: demo
```html
<ix-row>
  <ix-col :span="24"><div class="grid-content bg-purple-dark"></div></ix-col>
</ix-row>
<ix-row>
  <ix-col :span="12"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="12"><div class="grid-content bg-purple-light"></div></ix-col>
</ix-row>
<ix-row>
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="8"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
</ix-row>
<ix-row>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple-light"></div></ix-col>
</ix-row>
<style lang="less">
  .ix-row {
    margin-bottom: 20px;
  }
  .ix-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::

### 使用宽度
只设置 `width` , 其余内容会自动铺满
<div class="demo-block">
<ix-row :gutter="20">
  <ix-col width="50px"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col width="60px"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col><div class="grid-content bg-purple"></div></ix-col>
  <ix-col><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col><div class="grid-content bg-purple"></div></ix-col>
  <ix-col width="100px"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
</div>

::: demo
```html
<ix-row :gutter="20">
  <ix-col width="50px"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col width="60px"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col><div class="grid-content bg-purple"></div></ix-col>
  <ix-col><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col><div class="grid-content bg-purple"></div></ix-col>
  <ix-col width="100px"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
```
:::

### 分栏间隔
Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。
<div class="demo-block">
<ix-row :gutter="20">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
</div>

::: demo
```html
<ix-row :gutter="20">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
```
:::

### 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
<div class="demo-block">
<ix-row :gutter="20">
  <ix-col :span="16"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="16"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
</div>

::: demo
```html
<ix-row :gutter="20">
  <ix-col :span="16"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="8"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="16"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="4"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
```
:::

### 分栏偏移
支持偏移指定的栏数。
<div class="demo-block">
<ix-row :gutter="20">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
</div>

::: demo
```html
<ix-row :gutter="20">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row :gutter="20">
  <ix-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
```
:::

### 对齐方式
支持偏移指定的栏数。
<div class="demo-block">
<ix-row class="row-bg">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row class="row-bg" justify="center">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row class="row-bg" justify="end">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row class="row-bg" justify="space-between">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row class="row-bg" justify="space-around">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
</div>

::: demo
```html
<ix-row class="row-bg">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row class="row-bg" justify="center">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row class="row-bg" justify="end">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row class="row-bg" justify="space-between">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
<ix-row class="row-bg" justify="space-around">
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple-light"></div></ix-col>
  <ix-col :span="6"><div class="grid-content bg-purple"></div></ix-col>
</ix-row>
```
:::


### Row Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|gutter	|栅格间隔	|number|	—	|0|
|justify	|flex 布局下的水平排列方式|	string	|start/end/center/space-around/space-between	|start|
|align	|flex 布局下的垂直排列方式	|string	|top/middle/bottom	|top|
|tag|	自定义元素标签	|string|	*	|div|

### Col Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|span|	栅格占据的列数	|number|	—|	24|
|width|	栅格占据的宽度, px	|string|	—|	null|
|offset	|栅格左侧的间隔格数|	number|	—|	0|
