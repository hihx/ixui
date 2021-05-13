# ScrollPanel 滚动面板
----
### 基础用法
鼠标移上面板显示滚动条
<div class="demo-block">
      <ix-scrollpanel width="200px" height="100px">
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
      </ix-scrollpanel>
</div>


::: demo
```html
      <ix-scrollpanel width="200px" height="100px">
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
        滚动面板<br>
      </ix-scrollpanel>

```
:::

### 基础用法
横向滚动条
<div class="demo-block">
      <ix-scrollpanel width="200px" height="100px">
        <div style="white-space: nowrap">滚动面板滚动面板滚动面板滚动面板滚动面板滚动面板滚动面板滚动面板</div>
      </ix-scrollpanel>
</div>


::: demo
```html
      <ix-scrollpanel width="200px" height="100px">
        <div style="white-space: nowrap">滚动面板滚动面板滚动面板滚动面板滚动面板滚动面板滚动面板滚动面板</div>
      </ix-scrollpanel>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width     | 面板宽度   | string  |   -            |    —     |
| height     | 面板高度   | string    |   - |     —    |

### Slots 插槽
| 名称      | 说明    |
|---------- |-------- |
| default	| 默认 |

### Events 回调事件
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |---------- |
| scroll	| 滚动时触发	| (event: Event)|

### Methods 调用函数
| 方法名	| 说明	| 参数|
|---------- |-------- |---------- |
| scrollTo	| 滚动到指定位置	| (x, y) |
