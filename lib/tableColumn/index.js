!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ixUI",[],t):"object"==typeof exports?exports.ixUI=t():e.ixUI=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="4Cj6")}({"4Cj6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"ix-table-column",props:{prop:{type:String,default:""},label:{type:String,default:""},width:{type:[Number,String],default:null},fixed:Boolean,type:{type:String,default:""},sortable:Boolean,formatter:null,filter:Boolean}},o=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("header"),this._v(" "),this._t("default",null,{row:{}})],2)};o._withStripped=!0;var i={render:o,staticRenderFns:[]},l=i;var u=n("VU/8")(r,l,!1,null,null,null);u.options.__file="packages/tableColumn/TableColumn.vue";var s=u.exports;s.install=function(e){e.component(s.name,s)};t.default=s},"VU/8":function(e,t){e.exports=function(e,t,n,r,o,i){var l,u=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(l=e,u=e.default);var a,f="function"==typeof u?u.options:u;if(t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o),i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=a):r&&(a=r),a){var d=f.functional,p=d?f.render:f.beforeCreate;d?(f._injectStyles=a,f.render=function(e,t){return a.call(t),p(e,t)}):f.beforeCreate=p?[].concat(p,a):[a]}return{esModule:l,exports:u,options:f}}}}).default});
//# sourceMappingURL=index.js.map