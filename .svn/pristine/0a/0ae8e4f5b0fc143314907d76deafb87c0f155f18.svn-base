# Tabs 标签页
----
分隔内容上有关联但属于不同类别的数据集合。
### 基础用法
基础的、简洁的标签页。

<div class="demo-block">
  <ix-tabs v-model="activeName" @tab-click="click">
    <ix-tabpane label="用户管理" name="first" icon="ix-icon-smile">用户管理</ix-tabpane>
    <ix-tabpane label="配置管理" name="second">配置管理</ix-tabpane>
    <ix-tabpane label="角色管理" name="third">角色管理</ix-tabpane>
    <ix-tabpane label="定时任务补偿" name="fourth">定时任务补偿</ix-tabpane>
  </ix-tabs>
</div>
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        activeName2: 'second',
        datas: [
            {label: '用户管理', name: 'first', content: '用户管理', icon: 'ix-icon-smile'},
            {label: '配置管理', name: 'second', content: '配置管理'},
            {label: '角色管理', name: 'third', content: '角色管理'},
            {label: '定时任务补偿', name: 'fourth', content: '定时任务补偿'},
        ]
      };
    },
    methods: {
      click(tab, event) {
        console.log(tab, event);
      },
      add () {
        this.datas.push({label: 'Tab '+this.datas.length, name: 'Tab'+this.datas.length, content: 'Tab '+this.datas.length})
      },
      edit (targetName, action) {
      console.log(targetName, action)
         if (action == 'remove') {
            this.datas = this.datas.filter(tab => tab.name !== targetName);
         }
      }
    }
  };
</script>

::: demo
```html
  <ix-tabs v-model="activeName" @tab-click="click">
    <ix-tabpane label="用户管理" name="first">用户管理</ix-tabpane>
    <ix-tabpane label="配置管理" name="second">配置管理</ix-tabpane>
    <ix-tabpane label="角色管理" name="third">角色管理</ix-tabpane>
    <ix-tabpane label="定时任务补偿" name="fourth">定时任务补偿</ix-tabpane>
  </ix-tabs>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      click(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### 动态数据
<div class="demo-block">
<ix-button @click="add">添加</ix-button>
  <ix-tabs v-model="activeName2" @tab-click="click" tab-position="left" editable @tab-edit="edit">
    <ix-tabpane :label="item.label" :name="item.name" :icon="item.icon" v-for="(item, i) in datas" :key="i">{{item.content}}</ix-tabpane>
  </ix-tabs>
</div>

::: demo
```html
<div class="demo-block">
<ix-button @click="add">添加</ix-button>
  <ix-tabs v-model="activeName" @tab-click="click" tab-position="left" editable @tab-edit="edit">
    <ix-tabpane :label="item.label" :name="item.name" :icon="item.icon" v-for="(item, i) in datas" :key="i">{{item.content}}</ix-tabpane>
  </ix-tabs>
</div>
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        datas: [
            {label: '用户管理', name: 'first', content: '用户管理', icon: 'ix-icon-smile'},
            {label: '配置管理', name: 'second', content: '配置管理'},
            {label: '角色管理', name: 'third', content: '角色管理'},
            {label: '定时任务补偿', name: 'fourth', content: '定时任务补偿'},
        ]
      };
    },
    methods: {
      click(tab, event) {
        console.log(tab, event);
      },
      add () {
        this.datas.push({label: 'Tab '+this.datas.length, name: 'Tab'+this.datas.length, content: 'Tab '+this.datas.length})
      },
      edit (targetName, action) {
         if (action == 'remove') {
            this.datas = this.datas.filter(tab => tab.name !== targetName);
         }
      }
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model	| 绑定值，选中选项卡的 name	| string	| —	| 第一个选项卡的 name|
| closable| 	标签是否可关闭	boolean| 	—	| false|
| tab-position	| 选项卡所在位置	string	| top/left| 	top|

### Events
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |-------- |
|tab-click	|tab 被选中时触发	|被选中的标签 tab 实例|
|tab-edit	|tab 被关闭后触发	|(targetName, action)|

### Tab-pane Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|label	|选项卡标题	|string	|—|	—|
|disabled	|是否禁用	|boolean|	—	|false|
|name	|与选项卡绑定值 value 对应的标识符，表示选项卡别名	|string	|—	|-|
|closable	|标签是否可关闭	|boolean	|—	|false|
