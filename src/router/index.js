
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/homeView/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/team',
    name:'team',
    component: () => import('@/views/teamView/index.vue')
  },
  {
    path:'/join',
    name:'join',
    component: () => import('@/views/joinView/index.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
