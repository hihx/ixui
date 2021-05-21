webpackJsonp([24],{"14aQ":function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Hello")]),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("使用 npm 安装")]),s._v(" "),t("p",[s._v("推荐使用 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("npm")]),s._v(" 的方式安装，它能更好地和 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("webpack")]),s._v(" 打包工具配合使用。")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-bash"}},[s._v("npm install ix-ui-vue --save\n")])]),s._v(" "),t("h2",[s._v("CDN")]),s._v(" "),t("p",[s._v("目前可以通过 unpkg.com/ix-ui-vue 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-javascript"}},[s._v("\x3c!-- 引入样式 --\x3e\n"),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/ix-ui-vue/lib/index.css"')]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 引入组件库 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/ix-ui-vue/lib/index.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("h2",[s._v("Hello world")]),s._v(" "),t("p",[s._v("通过 CDN 的方式我们可以很容易地使用 IXUI 写出一个 Hello world 页面。")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-javascript"}},[s._v("<html>\n"),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("meta")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("charset")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"UTF-8"')]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import CSS --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/ix-ui-vue/lib/index.css"')]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible = true"')]),s._v(">")]),s._v("Button"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-dialog")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Hello world"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Try IXUI"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ix-dialog")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import Vue --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue/dist/vue.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import JavaScript --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/ix-ui-vue/lib/index.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"actionscript"}},[s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n      el: "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n      data: "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" ")]),s._v("{\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { visible: "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" }\n      }\n    })\n  ")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("h2",[s._v("完整引入 ixui")]),s._v(" "),t("p",[s._v("你可以引入整个 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("ixui")]),s._v("，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("ixui")]),s._v("。"),t("br"),s._v("\n在 main.js 中写入以下内容：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" ixui "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ix-ui'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ixui/lib/index.css'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./App.vue'")]),s._v(";\n\nVue.use(ixui);\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("h")]),s._v(" =>")]),s._v(" h(App)\n});\n")])]),s._v(" "),t("p",[s._v("以上代码便完成了 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("ixui")]),s._v(" 的引入。需要注意的是，样式文件需要单独引入。")]),s._v(" "),t("h2",[s._v("按需引入 ixui")]),s._v(" "),t("p",[s._v("借助 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("babel-plugin-component")]),s._v("，我们可以只引入需要的组件，以达到减小项目体积的目的。"),t("br"),s._v("\n首先，安装 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("babel-plugin-component")]),s._v("：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-bash"}},[s._v("npm install babel-plugin-component -D\n")])]),s._v(" "),t("p",[s._v("然后，将 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v(".babelrc")]),s._v(" 修改为：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-javascript"}},[s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"presets"')]),s._v(": [["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"es2015"')]),s._v(", { "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modules"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" }]],\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"plugins"')]),s._v(": [\n    [\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"component"')]),s._v(",\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"libraryName"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ix-ui"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"styleLibraryName"')]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"theme-default"')]),s._v("\n      }\n    ]\n  ]\n}\n")])]),s._v(" "),t("p",[s._v("接下来，如果你只希望引入部分组件，比如 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("Button")]),s._v(" 和 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("Select")]),s._v("，那么需要在 "),t("code",{pre:!0,attrs:{class:"code_inline"}},[s._v("main.js")]),s._v(" 中写入以下内容：")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"hljs language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button, Select } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ix-ui'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./App.vue'")]),s._v(";\n\nVue.component(Button.name, Button);\nVue.component(Select.name, Select);\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* 或写为\n * Vue.use(Button)\n * Vue.use(Select)\n */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("h")]),s._v(" =>")]),s._v(" h(App)\n});\n")])])])}]},e=t("VU/8")(null,r,!1,null,null,null);a.default=e.exports},ulH3:function(s,a,t){s.exports=t("14aQ")}});