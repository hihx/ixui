// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import '../packages/theme-default/src/index.less'
import demoBlock from './components/demo-block.vue'
import ixui from '../packages/index'

Vue.component('demo-block', demoBlock)
Vue.use(ixui)
Vue.config.productionTip = false
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
