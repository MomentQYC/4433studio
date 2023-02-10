/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 21:59:40
 * @LastEditors: Nico
 * @LastEditTime: 2023-02-10 16:57:10
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
// import Email from './views/joinView/js/smtp.js'
import '@/utils/adapter'
import '@/style/common.css'

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
// Vue.use(Email)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
