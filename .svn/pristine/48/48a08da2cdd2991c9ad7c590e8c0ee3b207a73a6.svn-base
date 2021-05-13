# Tree 树形控件
----
### 基础用法
基础的树形结构展示。

<div class="demo-block">
  <ix-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></ix-tree>
</div>
<script>
let id = 100;
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
          id: 'id'
        },
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1',
            disabled: true,
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1',
            disabled: true,
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);
        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }
        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }
          resolve(data);
        }, 500);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      append(data) {
        console.log('append', data);
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      remove(node, data) {
        console.log('remove', node, data);
        const parent = node.parent;
          const children = parent&&parent.children || this.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === '二级 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
        console.log(this.$refs.treedrag.getData())
      },
    }
  };
</script>

::: demo
```html
  <ix-tree
  :data="data"
  :props="defaultProps"
  @node-click="handleNodeClick"></ix-tree>
<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
```
:::

### 可选择
适用于需要选择层级时使用。

<div class="demo-block">
  <ix-tree :props="props" @node-click="handleNodeClick" lazy show-checkbox :load="loadNode"></ix-tree>
</div>

::: demo
```html
  <ix-tree
  :props="props"
  @node-click="handleNodeClick"
  lazy
  show-checkbox
  :load="loadNode"></ix-tree>
```
:::

### 默认展开和默认选中
可将 Tree 的某些节点设置为默认展开或默认选中<br>
需设置`props`的`id`字段<br>
此处还演示了`disabled`禁用状态

<div class="demo-block">
  <ix-tree :data="data2" :props="defaultProps" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" show-checkbox></ix-tree>
</div>

::: demo
```html
  <ix-tree
  :data="data2"
  :props="defaultProps"
  @node-click="handleNodeClick"
  show-checkbox
  :default-expanded-keys="[2, 3]"
  :default-checked-keys="[5]"></ix-tree>
<script>
  export default {
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label',
          id: 'id'
        },
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
            disabled: true,
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
            disabled: true,
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
      };
    },
  };
</script>
```
:::

### 树节点的选择

<div class="demo-block">
  <ix-tree ref="tree" :data="data2" :props="defaultProps" default-expand-all show-checkbox></ix-tree>
  <ix-button @click="setCheckedKeys">通过 key 设置</ix-button>
  <ix-button @click="resetChecked">清空选中</ix-button>
</div>

::: demo
```html
<ix-tree ref="tree" :data="data" :props="defaultProps" default-expand-all show-checkbox></ix-tree>
<ix-button @click="setCheckedKeys">通过 key 设置</ix-button>
<ix-button @click="resetChecked">清空选中</ix-button>
<script>
  export default {
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label',
          id: 'id'
        },
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
            disabled: true,
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
            disabled: true,
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
      };
    },
    methods: {
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    }
  };
</script>
```
:::

### 自定义节点内容
节点的内容支持自定义，可以在节点区添加按钮或图标等内容

<div class="demo-block">
  <ix-tree :data="data" :props="defaultProps" show-checkbox default-expand-all>
      <span class="custom-tree-node" slot-scope="{data, node}">
        <span>{{ data.label }}</span>
        <span>
          <ix-button
            type="text"
            size="mini"
            @click.stop="append(data)">
            Append
          </ix-button>
          <ix-button
            type="text"
            size="mini"
            @click.stop="remove(node, data)">
            Delete
          </ix-button>
        </span>
      </span>
  </ix-tree>
</div>

::: demo
```html
  <ix-tree
  :data="data"
  :props="defaultProps"
  show-checkbox
  default-expand-all>
      <span class="custom-tree-node" slot-scope="{data, node}">
        <span>{{ data.label }}</span>
        <span>
          <ix-button
            type="text"
            size="mini"
            @click.stop="append(data)">
            Append
          </ix-button>
          <ix-button
            type="text"
            size="mini"
            @click.stop="remove(node, data)">
            Delete
          </ix-button>
        </span>
      </span>
</ix-tree>
<script>
  let id = 100
  export default{
      methods: {
        append(data) {
          const newChild = { id: id++, label: 'testtest', children: [] };
          if (!data.children) {
            this.$set(data, 'children', []);
          }
          data.children.push(newChild);
        },
        remove(node, data) {
          const parent = node.parent;
          const children = parent&&parent.children || this.data;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
        },
      }
  }
</script>
```
:::

### 可拖拽节点
通过 draggable 属性可让节点变为可拖拽。

<div class="demo-block">
  <ix-tree ref="treedrag" :data="data" :props="defaultProps" show-checkbox default-expand-all draggable :allow-drop="allowDrop" :allow-drag="allowDrag" @node-drop="handleDrop"></ix-tree>
</div>

::: demo
```html
  <ix-tree
  ref="tree"
  :data="data"
  :props="defaultProps"
  show-checkbox
  default-expand-all
  draggable
  :allow-drop="allowDrop"
  :allow-drag="allowDrag"
  @node-drop="handleDrop"></ix-tree>
<script>
  export default{
      methods: {
        allowDrop(draggingNode, dropNode, type) {
          if (dropNode.data.label === '二级 3-1') {
            return type !== 'inner';
          } else {
            return true;
          }
        },
        allowDrag(draggingNode) {
          return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
          console.log('tree drop: ', dropNode.label, dropType);
          console.log(this.$refs.tree.getData())
        },
      }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|data|	展示数据|	array|	—|	—|
|props|	配置选项，具体看下表|	object|	—|	—|
|load|	加载子树数据的方法，仅当 lazy 属性为true 时生效|	function(node, resolve)|	—|	—|
|default-expand-all|	是否默认展开所有节点	|boolean|	—|	false|
|default-expanded-keys|	默认展开的节点的 key 的数组|	array|	—|	—|
|show-checkbox|	节点是否可被选择|	boolean|	—	|false|
|default-checked-keys|	默认勾选的节点的 key 的数组|	array|	—|	—|
|lazy|	是否懒加载子节点，需与 load 方法结合使用	|boolean|	—|	false|
|draggable|	是否开启拖拽节点功能|	boolean	|—|	false|
|allow-drag|	判断节点能否被拖拽	|Function(node)	|—|	—|
|allow-drop|	拖拽时判定目标节点能否被放置。type 参数有三种情况：'before'、'inner' 和 'after'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后|	Function(draggingNode, dropNode, type)|	—	|—|

### props参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|label	|指定节点标签为节点对象的某个属性值	|string|	—|	—|
|children|	指定子树为节点对象的某个属性值	|string|	—|	—|
|disabled	|指定节点选择框是否禁用为节点对象的某个属性值	|boolean|	—	|—|
|id |指定唯一ID为节点对象的某个属性值 |number,string|  —|	—|

### Methods
| 方法名	| 说明	| 参数|
|---------- |-------- |-------- |
|getData  |获取data | — |
|setCheckedKeys  |设置选中 | ID数组 |

### Events
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |-------- |
|node-click	|节点被点击时的回调	|共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。|
|check-change	|节点选中状态发生变化时的回调|	共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点|
|node-drag-start	|节点开始拖拽时触发的事件	|共两个参数，依次为：被拖拽节点对应的 Node、event|
|node-drag-enter	|拖拽进入其他节点时触发的事件	|共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event|
|node-drag-leave	|拖拽离开某个节点时触发的事件	|共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event|
|node-drag-over	|在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）	|共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event|
|node-drag-end	|拖拽结束时（可能未成功）触发的事件	|共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event|
|node-drop	|拖拽成功完成时触发的事件	|共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event|

### Slot
| name	| 说明	|
|---------- |-------- |
|—	|自定义树节点的内容，参数为 { node, data }|
