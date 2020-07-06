Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';    // 路由挂载
import Routers from './router.js';       // 路由列表
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS


Vue.use(iView);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
