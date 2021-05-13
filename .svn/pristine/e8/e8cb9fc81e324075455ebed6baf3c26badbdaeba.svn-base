# DatePicker 日期选择器
----
### 基础用法

<div class="demo-block">
<ix-datepicker clearable></ix-datepicker>
<ix-datepicker type="datetime" clearable placeholder="请选择日期时间"></ix-datepicker>
</div>
<script>
    export default {
      data() {
        return {
          value1: ['2000-10-11 10:10:00', '2000-10-17 10:10:00'],
          pickerOptions: [{
            text: '最近一周',
            onClick(pick) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              pick([start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(pick) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              pick([start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(pick) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              pick([start, end]);
            }
          }
          ]
        }
      },
      methods: {
      }
    }
    </script>

::: demo
```html
<ix-datepicker clearable></ix-datepicker>
<ix-datepicker type="datetime" clearable placeholder="请选择日期时间"></ix-datepicker>
```
:::

### 选择范围
<div class="demo-block">
    <ix-datepicker type="daterange" placeholder="请选择日期" range-separator="至"></ix-datepicker>
    <ix-datepicker type="datetimerange" v-model="value1" placeholder="请选择日期时间" :pickerOptions="pickerOptions"></ix-datepicker>
</div>

::: demo
```html
    <ix-datepicker type="daterange" placeholder="请选择日期" range-separator="至"></ix-datepicker>
    <ix-datepicker type="datetimerange" v-model="value1" placeholder="请选择日期时间"></ix-datepicker>
    <script>
    export default {
      data() {
        return {
          value1: ['2000-10-11 10:10:00', '2000-10-17 10:10:00'],
        }
      },
      methods: {
      }
    }
    </script>
```
:::

### 选择多个
<div class="demo-block">
    <ix-datepicker type="dates" placeholder="请选择日期"></ix-datepicker>
</div>

::: demo
```html
    <ix-datepicker type="dates" placeholder="请选择日期"></ix-datepicker>
```
:::

### 选择月份
<div class="demo-block">
    <ix-datepicker type="month" placeholder="请选择月份"></ix-datepicker>
    <ix-datepicker type="months" placeholder="请选择多个月份"></ix-datepicker>
    <ix-datepicker type="monthrange" start-placeholder="开始月份" end-placeholder="结束月份"></ix-datepicker>
</div>

::: demo
```html
    <ix-datepicker type="month" placeholder="请选择月份"></ix-datepicker>
    <ix-datepicker type="months" placeholder="请选择多个月份"></ix-datepicker>
    <ix-datepicker type="monthrange" start-placeholder="开始月份" end-placeholder="结束月份"></ix-datepicker>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|value / v-model	|绑定值	|date / array|	—|	—|
|readonly	|完全只读|	boolean	|—	|false|
|disabled	|禁用|	boolean	|—	|false|
|editable	|文本框可输入	|boolean|	—	|true|
|clearable	|是否显示清除按钮	|boolean	|—	|true|
|size	|输入框尺寸	|string	|medium, small, mini	|—|
|placeholder	|非范围选择时的占位内容|	string	|—|	—|
|start-placeholder	|范围选择时开始日期的占位内容|	string	|—	|—|
|end-placeholder	|范围选择时结束日期的占位内容|	string|	—	|—|
|type	|显示类型	|string	|month/date/dates/ datetime/datetimerange/ daterange/monthrange	|date|
|format	|显示在输入框中的格式	|string	|日期格式化	|yyyy-MM-dd|
|picker-options	|当前时间日期选择器特有的选项参考下表	|object	|—|	null|
|range-separator	|选择范围时的分隔符|	string	|—|	'-'|
|name	|原生属性	|string	|—	|—|
