/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 21:59:40
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2023-02-23 17:23:20
 * @FilePath: \4433studio\src\main.js
 * @Description:
 *
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved.
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
import axios from 'axios'
// import Email from './views/joinView/js/smtp.js'
import '@/utils/adapter'
import '@/style/common.css'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

Vue.use(ElementUI)
// Vue.use(Email)

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  render: (h) => h(App)
}).$mount('#app')
