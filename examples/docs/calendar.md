# Calendar 日历
----
### 基础用法
显示日期
<div class="demo-block">
    <ix-calendar v-model="value" @select="select"></ix-calendar>
</div>
<script>
    export default {
      data() {
        return {
          value: '2021-04-11'
        }
      },
      methods: {
        select (date) {
            console.log(date)
        }
      }
    }
</script>

::: demo
```html
    <ix-calendar v-model="value" @select="select"></ix-calendar>
<script>
    export default {
      data() {
        return {
          value: '2021-04-11'
        }
      },
      methods: {
        select (date) {
            console.log(date)
        }
      }
    }
</script>
```
:::

### 自定义范围

<div class="demo-block">
    <ix-calendar v-model="value" @select="select" :range="['2020-10-25', '2021-5-25']"></ix-calendar>
</div>

::: demo
```html
    <ix-calendar v-model="value" @select="select" :range="['2020-10-25', '2021-5-25']"></ix-calendar>
<script>
    export default {
      data() {
        return {
          value: '2021-04-11'
        }
      },
      methods: {
        select (date) {
            console.log(date)
        }
      }
    }
</script>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|value / v-model	|绑定值|	Date/string/number|	—|	—|
|range	|时间范围，包括开始时间与结束时间。|	Array|	—|	—|
|today	|可设置今天的日期|	string|	—|	new Date()|
