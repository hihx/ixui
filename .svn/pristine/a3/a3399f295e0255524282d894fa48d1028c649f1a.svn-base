# Slider 滑块
----
### 基础用法
通过拖动滑块在一个固定区间内进行选择

<div class="demo-block">
  <div class="block">
    <span class="demonstration">默认</span>
    <ix-slider v-model="value1"></ix-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <ix-slider v-model="value2"></ix-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <ix-slider v-model="value3" :show-tooltip="false"></ix-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <ix-slider v-model="value4" :format-tooltip="formatTooltip"></ix-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <ix-slider v-model="value5" disabled></ix-slider>
  </div>
</div>
<script>
  export default {
    data() {
      return {
        value: 10,
        value1: 0,
        value11: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        value22: [4, 8],
        value33: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>

::: demo
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <ix-slider v-model="value1"></ix-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <ix-slider v-model="value2"></ix-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <ix-slider v-model="value3" :show-tooltip="false"></ix-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <ix-slider v-model="value4" :format-tooltip="formatTooltip"></ix-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <ix-slider v-model="value5" disabled></ix-slider>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
```
:::

### 离散值
选项可以是离散的
<div class="demo-block">
  <div class="block">
    <span class="demonstration">不显示间断点</span>
    <ix-slider
      v-model="value1"
      :step="10">
    </ix-slider>
  </div>
  <div class="block">
    <span class="demonstration">显示间断点</span>
    <ix-slider
      v-model="value2"
      :step="10"
      show-stops>
    </ix-slider>
  </div>
</div>

::: demo
```html
<div class="block">
  <span class="demonstration">不显示间断点</span>
  <ix-slider
    v-model="value1"
    :step="10">
  </ix-slider>
</div>
<div class="block">
  <span class="demonstration">显示间断点</span>
  <ix-slider
    v-model="value11"
    :step="10"
    show-stops>
  </ix-slider>
</div>
<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>
```
:::

### 范围选择
支持选择某一数值范围
<div class="demo-block">
    <ix-slider
      v-model="value22"
      range
      show-stops
      :max="10">
    </ix-slider>
</div>

::: demo
```html
<ix-slider
  v-model="value"
  range
  show-stops
  :max="10">
</ix-slider>
<script>
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
</script>
```
:::

### 竖向模式
设置`vertical`可使 `Slider` 变成竖向模式，此时必须设置高度`height`属性
<div class="demo-block">
    <ix-slider
      v-model="value"
      vertical
      height="200px">
    </ix-slider>
</div>

::: demo
```html
<ix-slider
  v-model="value"
  vertical
  height="200px">
</ix-slider>
```
:::

### 展示标记
设置 `marks` 属性可以展示标记
<div class="demo-block">
    <ix-slider
      v-model="value33"
      range
      :marks="marks">
    </ix-slider>
</div>

::: demo
```html
<ix-slider
  v-model="value"
  range
  :marks="marks">
</ix-slider>
<script>
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|value / v-model	|绑定值	|number/array|	—|	0|
|min	|最小值|	number	|—|	0|
|max	|最大值|	number	|—|	100|
|disabled	|是否禁用	|boolean|	—	|false|
|step	|步长|	number|	—	|1|
|show-stops|	是否显示间断点|	boolean|	—	|false|
|show-tooltip	|是否显示 tooltip|	boolean|	—|	true|
|format-tooltip	|格式化 tooltip message|	function(value)	|—|	—|
|range	|是否为范围选择|	boolean|	—|	false|
|vertical	|是否竖向模式|	boolean|	—|	false|
|height	|Slider 高度，竖向模式时必填	|string|	—	|—|
|tooltip-class	|tooltip 的自定义类名|	string	|—|	—|
|marks	|标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式|	object|	—|	—|

### Events
| 事件名称	| 说明	| 回调参数|
|---------- |-------- |---------- |
|change	|值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）	|改变后的值|
|input	|数据改变时触发（使用鼠标拖曳时，活动过程实时触发）	|改变后的值|
