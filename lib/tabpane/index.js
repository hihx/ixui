!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ixUI",[],t):"object"==typeof exports?exports.ixUI=t():e.ixUI=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="qlQd")}({"VU/8":function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var d,l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=d):r&&(d=r),d){var c=l.functional,f=c?l.render:l.beforeCreate;c?(l._injectStyles=d,l.render=function(e,t){return d.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:a,options:l}}},qlQd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"ix-tabpane",props:{icon:String,disabled:Boolean,label:String,name:String},data:function(){return{}}},o=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"ix-tabpane",class:{disabled:this.disabled,selected:this.$parent.thisValue==this.name}},[this._t("default")],2)};o._withStripped=!0;var i={render:o,staticRenderFns:[]},s=i;var a=n("VU/8")(r,s,!1,null,null,null);a.options.__file="packages/tabpane/TabPane.vue";var u=a.exports;u.install=function(e){e.component(u.name,u)};t.default=u}}).default});
//# sourceMappingURL=index.js.map