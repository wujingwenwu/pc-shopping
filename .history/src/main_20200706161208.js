import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueRouter from 'vue-router';
import Routers from './router.js';       // 路由列表
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS




Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')