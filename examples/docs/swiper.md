# Swiper 轮播图
----
### 基础用法
无缝滚动

<div class="demo-block">
  <ix-swiper>
    <div class="demo-swiper-item">1</div>
    <div class="demo-swiper-item" style="background: lavenderblush">2</div>
    <div class="demo-swiper-item" style="background: lavender">3</div>
    <div class="demo-swiper-item" style="background: lightyellow">4</div>
    <div class="demo-swiper-item" style="background: lightblue">5</div>
  </ix-swiper>
</div>

::: demo
```html
  <ix-swiper>
    <div class="demo-swiper-item">1</div>
    <div class="demo-swiper-item" style="background: lavenderblush">2</div>
    <div class="demo-swiper-item" style="background: lavender">3</div>
    <div class="demo-swiper-item" style="background: lightyellow">4</div>
    <div class="demo-swiper-item" style="background: lightblue">5</div>
  </ix-swiper>
```
:::

### 渐隐切换
<div class="demo-block">
  <ix-swiper type="opacity">
    <div class="demo-swiper-item">1</div>
    <div class="demo-swiper-item" style="background: lavenderblush">2</div>
    <div class="demo-swiper-item" style="background: lavender">3</div>
    <div class="demo-swiper-item" style="background: lightyellow">4</div>
    <div class="demo-swiper-item" style="background: lightblue">5</div>
  </ix-swiper>
</div>

::: demo
```html
  <ix-swiper type="opacity">
    <div class="demo-swiper-item">1</div>
    <div class="demo-swiper-item" style="background: lavenderblush">2</div>
    <div class="demo-swiper-item" style="background: lavender">3</div>
    <div class="demo-swiper-item" style="background: lightyellow">4</div>
    <div class="demo-swiper-item" style="background: lightblue">5</div>
  </ix-swiper>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|type	|类型	|string	| slide/opacity | slide |
|autoplay	|是否自动播放	|boolean	|—	|true|
|interval	|播放间隔,毫秒	|number|	—	|3000|
|transitionDelay	| 缓动速度,秒	|number|	—	|2|
|showBtn|是否显示左右切换按钮		|boolean|	—|	true|
|showPoint|是否显示指示器		|boolean|	—|	true|
