!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ixUI",[],e):"object"==typeof exports?exports.ixUI=e():t.ixUI=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="Izoj")}({Izoj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("bhbH"),i=n("tfCW"),o=n("tovX"),s={name:"ix-calendar",components:{datePane:a.a,IxButton:o.default},model:{prop:"value",event:"change"},props:{value:{type:[Date,String,Number],default:null},weekLabel:Array,today:{type:[Date],default:function(){return new Date}},format:{type:String,default:"yyyy-MM-dd"},range:{type:Array,default:null}},data:function(){return{thisValue:null,showDate:null}},mounted:function(){this.loadValue(this.value)},watch:{value:function(t,e){this.loadValue(t)},showDate:function(t){var e=this;this.$nextTick(function(){Object(i.a)([e.$refs.dp])})}},computed:{label:function(){return this.showDate&&this.showDate.format("yyyy年MM月")||this.thisValue&&this.thisValue.format("yyyy年MM月")}},methods:{loadValue:function(t){this.thisValue=t?new Date(t):null,this.showDate=this.thisValue},selectDate:function(t){this.thisValue=t,this.showDate=t},to:function(t){var e=void 0;switch(t){case"L_M":(e=new Date(this.$refs.dp.thisShow)).setMonth(e.getMonth()-1),this.showDate=e;break;case 0:this.thisValue=this.today,this.showDate=this.today;break;case"R_M":(e=new Date(this.$refs.dp.thisShow)).setMonth(e.getMonth()+1),this.showDate=e}}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ix-calendar"},[n("div",{staticClass:"ix-calendar_bar flex"},[n("label",{staticClass:"f1",domProps:{textContent:t._s(t.label)}}),t._v(" "),n("ix-button",{attrs:{size:"small",group:"0"},on:{click:function(e){return t.to("L_M")}}},[t._v("上一月")]),n("ix-button",{attrs:{size:"small",group:"0"},on:{click:function(e){return t.to(0)}}},[t._v("今天")]),n("ix-button",{attrs:{size:"small",group:"0"},on:{click:function(e){return t.to("R_M")}}},[t._v("下一月")])],1),t._v(" "),n("datePane",t._b({ref:"dp",attrs:{showDate:t.showDate},on:{"update:showDate":function(e){t.showDate=e},"update:show-date":function(e){t.showDate=e},select:t.selectDate},model:{value:t.thisValue,callback:function(e){t.thisValue=e},expression:"thisValue"}},"datePane",t.$props,!1))],1)};r._withStripped=!0;var l={render:r,staticRenderFns:[]},u=l;var c=n("VU/8")(s,u,!1,null,null,null);c.options.__file="packages/calendar/Calendar.vue";var h=c.exports;h.install=function(){Vue.component("Calendar",h)};e.default=h},"VU/8":function(t,e){t.exports=function(t,e,n,a,i,o){var s,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(s=t,r=t.default);var u,c="function"==typeof r?r.options:r;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):a&&(u=a),u){var h=c.functional,d=h?c.render:c.beforeCreate;h?(c._injectStyles=u,c.render=function(t,e){return u.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:s,exports:r,options:c}}},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},bhbH:function(t,e,n){"use strict";var a=n("Zrlr"),i=n.n(a),o={name:"ix-datepane",model:{prop:"value",event:"change"},props:{value:{type:Date,default:null},today:{type:Date,default:function(){return new Date}},format:{type:String,default:"yyyy-MM-dd"},weekLabel:{type:Array,default:function(){return["日","一","二","三","四","五","六"]}},showDate:{type:Date,default:null}},data:function(){return{rows:null,thisValue:this.value,thisShow:null}},mounted:function(){this.getDateRowFromYM(this.thisValue||this.showDate||this.today||new Date)},watch:{value:function(t){this.thisValue=t,t&&this.changeDate(t)},showDate:function(t){t&&this.changeDate(t)}},computed:{is_selected:function(){var t=this;return function(e,n,a){return!e.gary&&(-1===e.is_selected?t.thisValue&&t.thisValue.toDateString()==e.date.toDateString():1===e.is_selected)}}},methods:{selectDate:function(t){t.gary&&this.$emit("update:showDate",t.date),this.$emit("change",t.date),this.$emit("select",t.date)},changeDate:function(t){this.thisShow&&this.thisShow.getFullYear()==t.getFullYear()&&this.thisShow.getMonth()==t.getMonth()||this.getDateRowFromYM(t)},getDateRowFromYM:function(t){var e=this;this.thisShow=t;var n=new Date(t.getFullYear(),t.getMonth()+1,0),a=n.getFullYear(),o=n.getMonth()+1,s=n.getDate(),r=new Date(a,o-1,0),l=r.getDay(),u=new Date(a,o-1,0).getDate(),c=new Date(a,o+1,0),h=this.today.format(this.format),d=void 0,f=[],p=0,g=null,_=function(t,n,a){d=n.format(e.format),g=new Date(d),0!=f.length&&7!=f[f.length-1].length||f.push([]),f[f.length-1].push(new function t(e,n,a,o,s){i()(this,t),this.i=e,this.value=n,this.date=a,this.gary=o,this.is_today=s,this.in_range=!1,this.no_click=!1,this.is_selected=-1}(t,d,g,a,h==d))};for(p=l;p>=0;p--)r.setDate(u-p),_(u-p,r,!0);for(p=1;p<=s;p++)n.setDate(p),_(p,n,!1);for(p=0;p<42-s-l-1;p++)c.setDate(p+1),_(p+1,c,!0);this.rows=f}}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"ix-datepane"},[n("thead",[n("tr",t._l(t.weekLabel,function(e,a){return n("th",{key:a,domProps:{textContent:t._s(e)}})}),0)]),t._v(" "),n("tbody",t._l(t.rows,function(e,a){return n("tr",{key:a},t._l(e,function(e,a){return n("td",{class:{gary:e.gary,today:e.is_today,this:t.is_selected(e),noclick:e.no_click,range:e.in_range}},[n("div",{staticClass:"ix-datepane_day",on:{click:function(n){return t.selectDate(e)}}},[t._v(t._s(e.i))])])}),0)}),0)])};s._withStripped=!0;var r={render:s,staticRenderFns:[]},l=r;var u=n("VU/8")(o,l,!1,null,null,null);u.options.__file="packages/datepicker/module/datePane.vue";e.a=u.exports},tfCW:function(t,e,n){"use strict";e.a=(t=>{this.range&&t.forEach(t=>{t.rows.forEach(t=>{t.forEach(t=>{t.no_click=!(t.date.getTime()>=new Date(this.range[0]).getTime()&&t.date.getTime()<=new Date(this.range[1]).getTime())})})})});e.b=((t,e,n="rows")=>{if(!e)return;const a=t=>{t.is_selected=e.some(e=>new Date(e).toDateString()==t.date.toDateString())?1:0,t.no_click=!(!this.range||t.date.getTime()>=new Date(this.range[0]).getTime()&&t.date.getTime()<=new Date(this.range[1]).getTime())};t.forEach(t=>{t[n].forEach(t=>{Array.isArray(t)?t.forEach(t=>{a(t)}):a(t)})})})},tovX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"ix-button",props:{icon:String,disabled:Boolean,type:{type:String,default:"default"},size:String,plain:Boolean,round:Boolean,circle:Boolean,group:String,loading:Boolean,nativeType:{type:String,default:"button"}}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"ix-button",class:[t.size?"ix-"+t.size:null,t.type?"ix-"+t.type:null,t.plain?"ix-plain":null,t.round?"ix-round":null,t.circle?"ix-circle":null,t.group?"ix-group ix-group-"+t.group:null],attrs:{disabled:t.disabled,type:t.nativeType},on:{click:function(e){return t.$emit("click",e)}}},[t.icon||t.loading?n("i",{staticClass:"ix-icon",class:t.loading?"ix-icon-loading":t.icon}):t._e(),t._v(" "),t._t("default")],2)};i._withStripped=!0;var o={render:i,staticRenderFns:[]},s=o;var r=n("VU/8")(a,s,!1,null,null,null);r.options.__file="packages/button/Button.vue";var l=r.exports;l.install=function(t){t.component(l.name,l)};e.default=l}}).default});
//# sourceMappingURL=index.js.map