/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 21:59:40
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-02-23 16:24:30
 * @FilePath: \4433studio\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
 */

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
    path: '/team',
    name: 'team',
    component: () => import('@/views/teamView/index.vue')
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('@/views/joinView/index.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: () => import('@/views/showView/index.vue')
  },
  /* {
    path: '/login',
    name: 'login',
    component: () => import('@/views/loginView/index.vue')
  }, */
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contactView/index.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
