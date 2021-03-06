import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Publics from '../views/public/Publics'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      redirect: '/'
    },
  {
    path: '/',
    name: Publics,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
    ]
  },
 
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, form, next) => {
  document.title = to.meta.title
  next()
})

export default router
