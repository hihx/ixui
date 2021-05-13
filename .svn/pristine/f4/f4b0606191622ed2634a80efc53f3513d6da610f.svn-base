# Loading 加载
----
加载数据时显示动效。
### 整页加载
页面数据加载时显示。

<div class="demo-block">
    <ix-button @click="open1()" v-loading.fullscreen="fullscreenLoading">指令方式</ix-button>
    <ix-button @click="open2()">服务方式</ix-button>
</div>
<script>
    export default {
        data() {
          return {
            fullscreenLoading: false,
            loading: true
          }
        },
      methods: {
        open1() {
            this.fullscreenLoading = true;
            setTimeout(() => {
                      this.fullscreenLoading = false;
                    }, 2000);
        },
        open2() {
                const loading = this.$loading('加载中。。。');
                setTimeout(() => {
                  loading.close();
                }, 2000);
         }
      }
    }
</script>

::: demo
```html
    <ix-button @click="open1()" v-loading.fullscreen="fullscreenLoading">指令方式</ix-button>
    <ix-button @click="open2()">服务方式</ix-button>
<script>
    export default {
        data() {
          return {
            fullscreenLoading: false
          }
        },
      methods: {
        open1() {
            this.fullscreenLoading = true;
            setTimeout(() => {
                      this.fullscreenLoading = false;
                    }, 2000);
        },
        open2() {
                const loading = this.$loading('加载中。。。');
                setTimeout(() => {
                  loading.close();
                }, 2000);
         }
      }
    }
</script>
```
:::

### 局部加载
在表格等容器中加载数据时显示。

<div class="demo-block">
    <table class="table" v-loading.model="loading">
        <thead>
            <tr>
                <td>日期</td>
                <td>姓名</td>
            </tr>
        </thead>
        <tbody>
            <tr><td>20210102</td><td>李逍遥</td></tr>
            <tr><td>20210104</td><td>赵灵儿</td></tr>
            <tr><td>20210105</td><td>林月如</td></tr>
            <tr><td>20210106</td><td>阿奴</td></tr>
        </tbody>
    </table>
</div>

::: demo
```html
    <table class="table" v-loading="loading">
        <thead>
            <tr>
                <td>日期</td>
                <td>姓名</td>
            </tr>
        </thead>
        <tbody>
            <tr><td>20210102</td><td>李逍遥</td></tr>
            <tr><td>20210104</td><td>赵灵儿</td></tr>
            <tr><td>20210105</td><td>林月如</td></tr>
            <tr><td>20210106</td><td>阿奴</td></tr>
        </tbody>
    </table>
<script>
    export default {
        data() {
          return {
            loading: true
          }
        },
    }
</script>
```
:::

### 服务
`Loading` 还可以以服务的方式调用。引入 `Loading` 服务：
```javascript
import { Loading } from 'ix-ui';
```
在需要调用时：
```javascript
Loading.service(options);
```
其中 `options` 参数为 `Loading` 的配置项，具体见下表。`LoadingService` 会返回一个 `Loading` 实例，可通过调用该实例的 `close` 方法来关闭它：
```javascript
let loadingInstance = Loading.service(options);
this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
  loadingInstance.close();
});
```

以服务的方式调用的全屏 `Loading` 是单例的：若在前一个全屏 `Loading` 关闭前再次调用全屏 `Loading`，并不会创建一个新的 `Loading` 实例，而是返回现有全屏 `Loading` 的实例：
```javascript
let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
```



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|message	|显示的加载文字	|string / VNode	|—	|—|
|target	|Loading 需要覆盖的 DOM 节点	|object	|—	|document.body|
|fullscreen	|同 v-loading 指令中的 fullscreen 修饰符|	boolean	—	|true|
|model	|同 v-loading 指令中的 model 修饰符	|boolean	|—	|false|
