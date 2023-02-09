/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 21:59:40
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-02-09 16:13:44
 * @FilePath: \4433studio\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
// import Email from './views/joinView/js/smtp.js'



Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
// Vue.use(Email)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
