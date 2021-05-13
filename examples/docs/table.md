# Table 表格
----
### 基础用法
基础的表格展示用法。
<div class="demo-block">
  <ix-table :data="tableData">
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
</div>
<script>
export default {
  data() {
    return {
      tableData: [{
                name: '王小虎',
                id: '12987122',
                amount2: '3.2',
                amount1: '234',
                amount3: 10
              }, {
                id: '12987123',
                name: '王小虎',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
              }, {
                id: '12987124',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
              }, {
                id: '12987125',
                name: '王小虎',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
              }],
              tableData2: [{
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-02',
                        name: '王小狮',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-01',
                        name: '王小猫',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-04',
                        name: '王小狮',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-07',
                        name: '王小猫',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }],
        tableData3: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          hasChildren: true
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  methods: {
    tableRowClassName (row, rowIndex) {
        if (rowIndex === 1) {
            return 'warning-row';
        } else if (rowIndex === 3) {
            return 'success-row';
        }
        return '';
    },
    deleteRow(index, rows) {
     console.log('deleteRow', index, rows);
     rows.splice(index, 1);
    },
    handleCurrentChange (val, index) {
        console.log('handleCurrentChange', val, index)
    },
    load(tree, resolve) {
       setTimeout(() => {
                 resolve([
                   {
                     id: 31,
                     date: '2016-05-01',
                     name: '王小虎',
                     address: '上海市普陀区金沙江路 1519 弄'
                   }, {
                     id: 32,
                     date: '2016-05-01',
                     name: '王小虎',
                     address: '上海市普陀区金沙江路 1519 弄'
                   }
                 ])
               }, 1000)
    },
    getSummaries ({columns, data}) {
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.prop]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });
        return [['单价', 'N/A','5','5','5'], sums]
    },
    arraySpanMethod ({row, column, rowIndex, columnIndex}) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
    },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
  }
}
</script>

::: demo
```html
  <ix-table :data="tableData">
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
<script>
export default {
  data() {
    return {
      tableData: [{
                name: '王小虎',
                id: '12987122',
                amount2: '3.2',
                amount1: '234',
                amount3: 10
              }, {
                id: '12987123',
                name: '王小虎',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
              }, {
                id: '12987124',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
              }, {
                id: '12987125',
                name: '王小虎',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
              }]
    }
  }
}
</script>
```
:::

### 有背景颜色的行
stripe可以更容易区分出不同行的数据;<br>
border可以设置表格边框。
<div class="demo-block">
  <ix-table :data="tableData" stripe border>
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" stripe border>
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
```
:::

### 带状态表格
可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。
<div class="demo-block">
  <ix-table :data="tableData" :row-class-name="tableRowClassName">
    <ix-table-column prop="id" label="编号" width="100"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
</div>
<style>
  .ix-table .warning-row {
    background: oldlace;
  }
  .ix-table .success-row {
    background: #f0f9eb;
  }
</style>

::: demo
```html
  <ix-table :data="tableData" :row-class-name="tableRowClassName">
    <ix-table-column prop="id" label="编号" width="100"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
<style>
  .ix-table .warning-row {
    background: oldlace;
  }
  .ix-table .success-row {
    background: #f0f9eb;
  }
</style>
<script>
export default {
    methods: {
        tableRowClassName (row, rowIndex) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        }
    }
}
</script>
```
:::

### 固定表头
纵向内容过多时，可选择固定表头。只要在table中定义了height高度属性，即可出现滚动条，自动实现固定表头。
<div class="demo-block">
  <ix-table :data="tableData" height="170">
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" height="170">
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
```
:::

### 固定列
横向内容过多时，可选择固定列。
<div class="demo-block">
  <ix-table :data="tableData" height="170" border>
    <ix-table-column prop="id" label="编号" fixed width="100"></ix-table-column>
    <ix-table-column prop="name" label="姓名" width="400"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
    <ix-table-column label="操作" fixed>
        <template slot-scope="scope">
                <ix-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  移除
                </ix-button>
              </template>
    </ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" height="170" border>
    <ix-table-column prop="id" label="编号" fixed width="100"></ix-table-column>
    <ix-table-column prop="name" label="姓名" width="400"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
    <ix-table-column label="操作" fixed>
        <template slot-scope="scope">
                <ix-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  移除
                </ix-button>
              </template>
    </ix-table-column>
  </ix-table>
<script>
export default {
    methods: {
        deleteRow(index, rows) {
         console.log('deleteRow', index, rows);
         rows.splice(index, 1);
        },
    }
}
</script>
```
:::

### 多级表头
数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。
<div class="demo-block">
  <ix-table :data="tableData2" height="170" border>
    <ix-table-column label="编号">
            <ix-table-column
              prop="province"
              label="左边"
              width="120">
            </ix-table-column>
            <ix-table-column
              prop="city"
              label="右边"
              width="120">
            </ix-table-column>
          </ix-table-column>
    <ix-table-column
      prop="date"
      label="日期"
      width="150">
    </ix-table-column>
    <ix-table-column label="配送信息">
      <ix-table-column
        prop="name"
        label="姓名"
        width="120">
      </ix-table-column>
      <ix-table-column label="地址">
        <ix-table-column
          prop="province"
          label="省份"
          width="120">
        </ix-table-column>
        <ix-table-column
          prop="city"
          label="市区"
          width="120">
        </ix-table-column>
        <ix-table-column
          prop="address"
          label="地址"
          width="300">
        </ix-table-column>
        <ix-table-column
          prop="zip"
          label="邮编"
          width="120">
        </ix-table-column>
      </ix-table-column>
    </ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" height="170" border>
    <ix-table-column
      prop="date"
      label="日期"
      width="150">
    </ix-table-column>
    <ix-table-column label="配送信息">
      <ix-table-column
        prop="name"
        label="姓名"
        width="120">
      </ix-table-column>
      <ix-table-column label="地址">
        <ix-table-column
          prop="province"
          label="省份"
          width="120">
        </ix-table-column>
        <ix-table-column
          prop="city"
          label="市区"
          width="120">
        </ix-table-column>
        <ix-table-column
          prop="address"
          label="地址"
          width="300">
        </ix-table-column>
        <ix-table-column
          prop="zip"
          label="邮编"
          width="120">
        </ix-table-column>
      </ix-table-column>
    </ix-table-column>
  </ix-table>
<script>
export default {
  data() {
    return {
              tableData2: [{
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-02',
                        name: '王小狮',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-01',
                        name: '王小猫',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-04',
                        name: '王小狮',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }, {
                        date: '2016-05-07',
                        name: '王小猫',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                      }],
    }
  },
}
</script>
```
:::

### 单选
选择单行数据时使用色块表示。
<div class="demo-block">
  <ix-table :data="tableData" highlight-current-row @selection-change="handleCurrentChange">
    <ix-table-column type="index"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" highlight-current-row @selection-change="handleCurrentChange">
    <ix-table-column type="index"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
<script>
export default {
    methods: {
        handleCurrentChange (val, index) {
            console.log('handleCurrentChange', val, index)
        },
    }
}
</script>
```
:::

### 多选
选择多行数据时使用 Checkbox。
<div class="demo-block">
  <ix-table :data="tableData" @selection-change="handleCurrentChange">
    <ix-table-column
      type="selection"
      width="55">
    </ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" @selection-change="handleCurrentChange">
    <ix-table-column
      type="selection"
      width="55">
    </ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
<script>
export default {
    methods: {
        handleCurrentChange (val, index) {
            console.log('handleCurrentChange', val, index)
        },
    }
}
</script>
```
:::

### 排序
对表格进行排序，可快速查找或对比数据。
<div class="demo-block">
  <ix-table :data="tableData" :default-sort = "{prop: 'amount1', order: 'desc'}">
    <ix-table-column prop="name" label="姓名" sortable></ix-table-column>
    <ix-table-column prop="amount1" label="分数1" sortable></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" :default-sort = "{prop: 'amount1', order: 'desc'}">
    <ix-table-column prop="name" label="姓名" sortable></ix-table-column>
    <ix-table-column prop="amount1" label="分数1" sortable></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
```
:::

### 筛选
对表格进行筛选，可快速查找到自己想看的数据。<br>
只需配置`filter`属性，会自动获取出现的字段生成筛选列表
<div class="demo-block">
  <ix-table :data="tableData2" height="170">
    <ix-table-column prop="name" label="姓名" filter></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期" filter></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" height="170">
    <ix-table-column prop="name" label="姓名" filter></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期" filter></ix-table-column>
  </ix-table>
```
:::

### 自定义列模板
自定义列的显示内容，可组合其他组件使用。
<div class="demo-block">
  <ix-table :data="tableData2" height="170">
    <ix-table-column label="姓名">
      <template slot-scope="scope">
        <ix-popover trigger="hover">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <ix-button slot="reference" type="primary" icon="ix-icon-account" size="mini">{{ scope.row.name }}</ix-button>
        </ix-popover>
      </template>
    </ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column label="操作">
      <template slot-scope="scope">
        <ix-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</ix-button>
        <ix-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</ix-button>
      </template>
    </ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData2" height="170">
    <ix-table-column prop="name" label="姓名">
      <template slot-scope="scope">
        <ix-popover trigger="hover">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <ix-button slot="reference" type="primary" icon="ix-icon-account" size="mini">{{ scope.row.name }}</ix-button>
        </ix-popover>
      </template>
    </ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期"></ix-table-column>
  </ix-table>
```
:::

### 展开行
当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。
<div class="demo-block">
  <ix-table :data="tableData2">
    <ix-table-column type="expand" width="55">
      <template slot-scope="props">
        <p>展开列</p>
        <p>姓名：{{props.row.name}}</p>
        <p>地址：{{props.row.address}}</p>
        <p>日期：{{props.row.date}}</p>
      </template>
    </ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期"></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData">
    <el-table-column type="expand" width="55">
      <template slot-scope="props">
        <p>这里是详情</p>
        <p>姓名：{{props.row.name}}</p>
        <p>地址：{{props.row.address}}</p>
        <p>日期：{{props.row.date}}</p>
      </template>
    </el-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期"></ix-table-column>
  </ix-table>
```
:::

### 树形数据与懒加载
配置`tree-props`里的字段视为树形数据<br>
`hasChildren`属性和`load`函数搭配使用可异步加载数据
<div class="demo-block">
  <ix-table border :data="tableData3" default-expand-all :load="load" lazy
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期"></ix-table-column>
  </ix-table>
  <p></p>
  <ix-table border :data="tableData3" :load="load" lazy
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期"></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table border :data="tableData3" default-expand-all :load="load" lazy
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期"></ix-table-column>
  </ix-table>
  <p></p>
  <ix-table border :data="tableData3" :load="load" lazy
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期"></ix-table-column>
  </ix-table>
<script>
export default {
    data () {
        return {
            tableData3: [{
              id: 1,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              hasChildren: true
            }, {
              id: 2,
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              id: 3,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              children: [{
                  id: 31,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }, {
                  id: 32,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
              }]
            }, {
              id: 4,
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        load(tree, resolve) {
           setTimeout(() => {
                     resolve([
                       {
                         id: 31,
                         date: '2016-05-01',
                         name: '王小虎',
                         address: '上海市普陀区金沙江路 1519 弄'
                       }, {
                         id: 32,
                         date: '2016-05-01',
                         name: '王小虎',
                         address: '上海市普陀区金沙江路 1519 弄'
                       }
                     ])
                   }, 1000)
        },
    }
}
</script>
```
:::

### 自定义表头
表头支持自定义
<div class="demo-block">
  <ix-table :data="tableData3" >
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期">
      <template slot="header" slot-scope="scope">
        <ix-input size="mini" placeholder="输入关键字搜索"/>
      </template>
    </ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData3" >
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="address" label="地址"></ix-table-column>
    <ix-table-column prop="date" label="日期">
      <template slot="header" slot-scope="scope">
        <ix-input size="mini" placeholder="输入关键字搜索"/>
      </template>
    </ix-table-column>
  </ix-table>
```
:::

### 表尾合计行
若表格展示的是各类数字，可以在表尾显示各列的合计。
<div class="demo-block">
  <ix-table :data="tableData" border show-summary>
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
  <p></p>
  <ix-table :data="tableData" border show-summary :summary-method="getSummaries">
      <ix-table-column prop="id" label="编号"></ix-table-column>
      <ix-table-column prop="name" label="姓名"></ix-table-column>
      <ix-table-column prop="amount1" label="分数1"></ix-table-column>
      <ix-table-column prop="amount2" label="分数2"></ix-table-column>
      <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" border show-summary>
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
  <p></p>
  <ix-table :data="tableData" border show-summary :summary-method="getSummaries">
      <ix-table-column prop="id" label="编号"></ix-table-column>
      <ix-table-column prop="name" label="姓名"></ix-table-column>
      <ix-table-column prop="amount1" label="分数1"></ix-table-column>
      <ix-table-column prop="amount2" label="分数2"></ix-table-column>
      <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
<script>
export default {
    methods: {
        getSummaries ({columns, data}) {
            const sums = [];
            columns.forEach((column, index) => {
              if (index === 0) {
                sums[index] = '总价';
                return;
              }
              const values = data.map(item => Number(item[column.prop]));
              if (!values.every(value => isNaN(value))) {
                sums[index] = values.reduce((prev, curr) => {
                  const value = Number(curr);
                  if (!isNaN(value)) {
                    return prev + curr;
                  } else {
                    return prev;
                  }
                }, 0);
                sums[index] += ' 元';
              } else {
                sums[index] = 'N/A';
              }
            });
            return [['单价', 'N/A','5','5','5'], sums]
        },
    }
}
</script>
```
:::

### 合并行或列
多行或多列共用一个数据时，可以合并行或列。
<div class="demo-block">
  <ix-table :data="tableData" border :span-method="arraySpanMethod">
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
  <ix-table :data="tableData" border :span-method="objectSpanMethod">
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
</div>

::: demo
```html
  <ix-table :data="tableData" border :span-method="arraySpanMethod">
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
  <ix-table :data="tableData" border :span-method="objectSpanMethod">
    <ix-table-column prop="id" label="编号"></ix-table-column>
    <ix-table-column prop="name" label="姓名"></ix-table-column>
    <ix-table-column prop="amount1" label="分数1"></ix-table-column>
    <ix-table-column prop="amount2" label="分数2"></ix-table-column>
    <ix-table-column prop="amount3" label="分数3"></ix-table-column>
  </ix-table>
<script>
export default {
    methods: {
        arraySpanMethod ({row, column, rowIndex, columnIndex}) {
            if (rowIndex % 2 === 0) {
              if (columnIndex === 0) {
                return [1, 2];
              } else if (columnIndex === 1) {
                return [0, 0];
              }
            }
        },
          objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
              if (rowIndex % 2 === 0) {
                return {
                  rowspan: 2,
                  colspan: 1
                };
              } else {
                return {
                  rowspan: 0,
                  colspan: 0
                };
              }
            }
          }
    }
}
</script>
```
:::

### Table Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|data	|显示的数据|	array	|—|	—|
|height|	Table 的高度，默认为自动高度|	string|	—|	—|
|max-height	|Table 的最大高度。合法的值为数字或者单位为 px 的高度。|	string|	—	|—|
|stripe|	|是否为斑马纹 table	|boolean|	—	|false|
|border	|是否带有纵向边框|	boolean|	—|	false|
|highlight-current-row	|是否要高亮当前行|	boolean|	—|	false|
|row-class-name	|行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。|	Function({row, rowIndex})/String|	—|	—|
|default-expand-all	|是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效	|Boolean|	—	|false|
|default-sort	|默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序	|Object	|order: asc, desc	|-|
|show-summary	|是否在表尾显示合计行	|Boolean	|—|	false|
|summary-method|	自定义的合计计算方法	|Function({ columns, data })|	—	|—|
|span-method|	合并行或列的计算方法|	Function({ row, column, rowIndex, columnIndex })	|—	|—|
|lazy|	是否懒加载子节点数据	|Boolean|	—|	—|
|load	|加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息|	Function(row, treeNode, resolve)	|—	|—|
|tree-props|	渲染嵌套数据的配置选项	|Object|	—	|{ hasChildren: 'hasChildren', children: 'children' }|

### Table Events 回调事件
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |---------- |
|selection-change	|当选择项发生变化时会触发该事件	|selection|

### Table Methods 调用函数
| 方法名	| 说明	| 参数|
|---------- |-------- |---------- |
|setSelection	|用于选中表格某一行或多行，如果传null则清空选择。|	index / [index]|

### Table-column Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|type	|对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮	|string|	selection/index/expand	|—|
|index	|如果设置了 type=index，可以通过传递 index 属性来自定义索引|	number|	-	|-|
|label	|显示的标题	|string	|—	|—|
|prop	|对应列内容的字段名，也可以使用 property 属性	|string	|—	|—|
|width	|对应列的宽度|	string|	—	|—|
|fixed	|列是否固定在左侧或者右侧，true 表示固定在左侧	|boolean	|true	|—|
|sortable	|对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件	|boolean, string|	true, false, 'custom'	|false|
|formatter	|用来格式化内容	|Function(row, column, cellValue, index)	|—|	—|

### Table-column Scoped Slot
| name	| 说明	|
|---------- |-------- |
|—	|自定义列的内容，参数为 { row, column, $index }|
|header	|自定义表头的内容. 参数为 { column, $index }|



