import Vue from 'vue'

import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router';
import App from 'components/app.vue';    // 路由挂载
import Routers from './router.js';       // 路由列表
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
 

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$utils = utils;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
