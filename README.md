# ix-ui

> 基于vue.js轻量级ui组件库，组件命名/参数命名贴近element-ui，轻松上手
>
> 文档：https://hihx.github.io/ixui/

## 发布后的js / css静态资源体积
ix-ui: index.js(160k) index.css(50k)

element-ui: index.js(554k) index.css(227k)

开启gzip后：

ix-ui: index.js(38k) index.css(9k)

element-ui: index.js(554k) index.css(227k)

## 源码目录
packages
src

## docs文档目录
examples

## Build Setup

``` bash
# 安装依赖 install dependencies
npm install

# 运行 serve with hot reload at localhost:8080
npm run dev

# 编译文档docs build for production with minification
npm run build

# 分析 build for production and view the bundle analyzer report
npm run build --report

# 编译所有js css，生成静态资源
npm run build:all

# 编译单个组件，放在lib目录下
npm run build:one

# 发布到 npmjs
npm publish --access=public

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
