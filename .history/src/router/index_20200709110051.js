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
    component: Publics,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/whole',
        name: 'Whole',
        component: () => import('../views/whole/Whole'),
        meta: {
          title: '所有商品'
        }
      },
      {
        path: '/whole',
        name: 'Whole',
        component: () => import('../views/Details/details'),
        meta: {
          title: '所有商品'
        }
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register'),
    meta: {
          title: '注册'
        }
  },
  {
    path: '/sigon',
    name: 'Sigon',
    component: () => import('../views/sigon/Sigon'),
    meta: {
          title: '登录'
        }
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
