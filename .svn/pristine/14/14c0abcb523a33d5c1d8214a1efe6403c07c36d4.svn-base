# Menu 导航菜单
----
为网站提供导航功能的菜单。
### 顶栏
适用广泛的基础用法。

<div class="demo-block">
    <ix-menu :default-active.sync="activeIndex" mode="horizontal" @select="handleSelect">
      <ix-menu-item index="1">处理中心</ix-menu-item>
      <ix-menusub index="2">
        <template slot="title">我的工作台</template>
        <ix-menu-item index="2-1">选项1</ix-menu-item>
        <ix-menu-item index="2-2">选项2</ix-menu-item>
        <ix-menu-item index="2-3">选项3</ix-menu-item>
        <ix-menusub index="2-4">
          <template slot="title">选项4</template>
          <ix-menu-item index="2-4-1">选项1</ix-menu-item>
          <ix-menu-item index="2-4-2">选项2</ix-menu-item>
          <ix-menu-item index="2-4-3">选项3</ix-menu-item>
        </ix-menusub>
      </ix-menusub>
      <ix-menu-item index="3" disabled>消息中心</ix-menu-item>
      <ix-menu-item index="4" href="https://www.baidu.com" target="_blank">跳转url</ix-menu-item>
      <ix-menu-item index="5" to="/hello">跳转路由</ix-menu-item>
    </ix-menu>
</div>
<script>
  export default {
    data() {
      return {
        activeIndex: '2-4-3',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

::: demo
```html
<div class="demo-block">
    <ix-menu :default-active.sync="activeIndex" mode="horizontal" @select="handleSelect">
      <ix-menu-item index="1">处理中心</ix-menu-item>
      <ix-menusub index="2">
        <template slot="title">我的工作台</template>
        <ix-menu-item index="2-1">选项1</ix-menu-item>
        <ix-menu-item index="2-2">选项2</ix-menu-item>
        <ix-menu-item index="2-3">选项3</ix-menu-item>
        <ix-menusub index="2-4">
          <template slot="title">选项4</template>
          <ix-menu-item index="2-4-1">选项1</ix-menu-item>
          <ix-menu-item index="2-4-2">选项2</ix-menu-item>
          <ix-menu-item index="2-4-3">选项3</ix-menu-item>
        </ix-menusub>
      </ix-menusub>
      <ix-menu-item index="3" disabled>消息中心</ix-menu-item>
      <ix-menu-item index="4" href="https://www.baidu.com" target="_blank">跳转url</ix-menu-item>
      <ix-menu-item index="5" to="/hello">跳转路由</ix-menu-item>
    </ix-menu>
</div>
<script>
  export default {
    data() {
      return {
        activeIndex: '2-4-3',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### 侧栏
垂直菜单，可内嵌子菜单。
<div class="demo-block">
    <ix-menu default-active="2" style="width: 240px">
      <ix-menusub index="1" icon="ix-icon-store" title="导航一">
        <ix-menu-group>
          <template slot="title">分组一</template>
          <ix-menu-item index="1-1">选项1</ix-menu-item>
          <ix-menu-item index="1-2">选项2</ix-menu-item>
        </ix-menu-group>
        <ix-menu-group title="分组2">
          <ix-menu-item index="1-3">选项3</ix-menu-item>
        </ix-menu-group>
        <ix-menusub index="1-4">
          <template slot="title">选项4</template>
          <ix-menu-item index="1-4-1">选项1</ix-menu-item>
        </ix-menusub>
      </ix-menusub>
      <ix-menu-item index="2" icon="ix-icon-map">
        导航二
      </ix-menu-item>
      <ix-menu-item index="3" disabled title="导航三" icon="ix-icon-folder"></ix-menu-item>
      <ix-menu-item index="4">
        <i class="ix-icon-set"></i>
        导航四
      </ix-menu-item>
    </ix-menu>
</div>

::: demo
```html
    <ix-menu default-active="2" style="width: 240px">
      <ix-menusub index="1" icon="ix-icon-store" title="导航一">
        <ix-menu-group>
          <template slot="title">分组一</template>
          <ix-menu-item index="1-1">选项1</ix-menu-item>
          <ix-menu-item index="1-2">选项2</ix-menu-item>
        </ix-menu-group>
        <ix-menu-group title="分组2">
          <ix-menu-item index="1-3">选项3</ix-menu-item>
        </ix-menu-group>
        <ix-menusub index="1-4">
          <template slot="title">选项4</template>
          <ix-menu-item index="1-4-1">选项1</ix-menu-item>
        </ix-menusub>
      </ix-menusub>
      <ix-menu-item index="2" icon="ix-icon-map">
        导航二
      </ix-menu-item>
      <ix-menu-item index="3" disabled title="导航三" icon="ix-icon-folder"></ix-menu-item>
      <ix-menu-item index="4">
        <i class="ix-icon-set"></i>
        导航四
      </ix-menu-item>
    </ix-menu>
```
:::


### Menu Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|mode	|模式	|string	|horizontal / vertical	|vertical|
|collapse	|是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）|	boolean	|—|	false|
|default-active	|当前激活菜单的 index|	string|	—|	—|
|unique-opened	|是否只保持一个子菜单的展开	|boolean|	—	|false|
|subPadding |层级缩进px| Number| - | - |

### Menu Methods 调用函数
| 方法名	| 说明	| 参数|
|---------- |-------- |---------- |
|open	|展开指定的 index|	index: 需要打开的 index|

### Menu Events 回调事件
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |---------- |
| change	| 菜单激活回调	| (index: 选中菜单项的 index)|

### SubMenu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|index	|唯一标志	|string/null|	—	|null|
|disabled	|是否禁用	|boolean	|—	|false|
|icon   |图标   |string| -| - |
|title  |文字，也可由默认 slot 传入 |string| -| -|

### Menu-Item Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|index	|唯一标志	|string/null|	—	|null|
|disabled	|是否禁用	|boolean	|—	|false|
|icon   |图标   |string| -| - |
|title  |文字，也可由默认 slot 传入 |string| -| -|
|href	| a原生 href 属性	|string|	—	|-|
|to	| router-link 路由属性	|string / object|	—	|-|

### Menu-Group Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|icon   |图标   |string| -| - |
|title	|文字，也可由默认 slot 传入	|string|	—	|-|

