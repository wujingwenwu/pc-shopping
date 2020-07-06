Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
