# Pagination 分页
----
### 基础用法
当数据量过多时，使用分页分解数据。
<div class="demo-block">
<div>页数较少时的效果</div>
<ix-pagination
  :total="50"
  layout="prev, pager, next"></ix-pagination>
<div>大于 7 页时的效果</div>
<ix-pagination
  :total="1000"
  layout="prev, pager, next"></ix-pagination>
</div>

::: demo
```html

<div>页数较少时的效果</div>
<ix-pagination
  :total="50"
  layout="prev, pager, next"></ix-pagination>
<div>大于 7 页时的效果</div>
<ix-pagination
  :total="1000"
  layout="prev, pager, next"></ix-pagination>

```
:::

### 附加功能
根据场景需要，可以添加其他功能模块。
<div class="demo-block">
    <div>显示总数</div>
    <ix-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </ix-pagination>
    <div>调整每页显示条数</div>
    <ix-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </ix-pagination>
    <div>直接前往</div>
    <ix-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </ix-pagination>
    <div>完整功能</div>
    <ix-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </ix-pagination>
</div>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

::: demo
```html
<div>显示总数</div>
<ix-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage1"
  :page-size="100"
  layout="total, prev, pager, next"
  :total="1000">
</ix-pagination>
<div>调整每页显示条数</div>
<ix-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage2"
  :page-sizes="[100, 200, 300, 400]"
  :page-size="100"
  layout="sizes, prev, pager, next"
  :total="1000">
</ix-pagination>
<div>直接前往</div>
<ix-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage3"
  :page-size="100"
  layout="prev, pager, next, jumper"
  :total="1000">
</ix-pagination>
<div>完整功能</div>
<ix-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="currentPage4"
  :page-sizes="[100, 200, 300, 400]"
  :page-size="100"
  layout="total, sizes, prev, pager, next, jumper"
  :total="400">
</ix-pagination>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|page-size	|每页显示条目个数，支持 .sync 修饰符|	number	|—	|10|
|total|	总条目数	|number|	—|	—|
|page-count	|总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性	|Number|	—|	—|
|pager-count	|页码按钮的数量，当总页数超过该值时会折叠	|number	|大于等于 5 且小于等于 21 的奇数	|6|
|current-page	|当前页数，支持 .sync 修饰符|	number|	—|	1|
|layout	|组件布局，子组件名用逗号分隔	|String	|sizes, prev, pager, next, jumper, total|	'prev, pager, next, jumper, total'|
|page-sizes	|每页显示个数选择器的选项设置	|number[]|	—|	[10, 30, 50, 100]|
|hide-on-single-page|	只有一页时是否隐藏|	boolean|	—|	-|

### Events
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |-------- |
|size-change	|pageSize 改变时会触发	|每页条数|
|current-change	|currentPage 改变时会触发	|当前页|

### Slot
| name	| 说明	|
|---------- |-------- |
|—	|自定义内容，需要在 layout 中列出 slot|
