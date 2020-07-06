Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false

import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
