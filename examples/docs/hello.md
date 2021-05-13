# Hello
----
## 使用 npm 安装
推荐使用 `npm` 的方式安装，它能更好地和 `webpack` 打包工具配合使用。

```bash
npm install ix-ui-vue --save
```

## CDN
目前可以通过 unpkg.com/ix-ui-vue 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
```javascript
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/ix-ui-vue/lib/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/ix-ui-vue/lib/index.js"></script>
```

## Hello world
通过 CDN 的方式我们可以很容易地使用 IXUI 写出一个 Hello world 页面。
```javascript
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/ix-ui-vue/lib/index.css">
</head>
<body>
  <div id="app">
    <ix-button @click="visible = true">Button</ix-button>
    <ix-dialog :visible.sync="visible" title="Hello world">
      <p>Try IXUI</p>
    </ix-dialog>
  </div>
</body>
  <!-- import Vue -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/ix-ui-vue/lib/index.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { visible: false }
      }
    })
  </script>
</html>
```

## 完整引入 ixui
你可以引入整个 `ixui`，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 `ixui`。<br>
在 main.js 中写入以下内容：
```javascript
import Vue from 'vue';
import ixui from 'ix-ui';
import 'ixui/lib/index.css';
import App from './App.vue';

Vue.use(ixui);

new Vue({
    el: '#app',
    render: h => h(App)
});
```
以上代码便完成了 `ixui` 的引入。需要注意的是，样式文件需要单独引入。

## 按需引入 ixui
借助 `babel-plugin-component`，我们可以只引入需要的组件，以达到减小项目体积的目的。<br>
首先，安装 `babel-plugin-component`：
```bash
npm install babel-plugin-component -D
```
然后，将 `.babelrc` 修改为：
```javascript
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "ix-ui",
        "styleLibraryName": "theme-default"
      }
    ]
  ]
}
```
接下来，如果你只希望引入部分组件，比如 `Button` 和 `Select`，那么需要在 `main.js` 中写入以下内容：
```javascript
import Vue from 'vue';
import { Button, Select } from 'ix-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
