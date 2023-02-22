<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 21:59:40
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-02-10 10:15:50
 * @FilePath: \4433studio\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <div id="app">
    <!-- PC端 -->
    <div v-if="media[0] == 'Windows'">
      <!-- 导航栏 -->
      <navView />
      <!-- 路由内容 -->
      <router-view />
    </div>

    <!-- 移动端 -->
    <div v-else>
      <!-- 警告组件 -->
      <warningView />
    </div>
  </div>
</template>
<script>
/*导航栏*/
import navView from "@/components/navView/index.vue";
/*警告组件*/
import warningView from "@/components/user-warningView/index.vue";
/*控制台欢迎语*/
import welcome from "@/utils/welcome_console";

export default {
  components: { navView, warningView },
  data() {
    /*获取设备类型*/
    const media = navigator.userAgent.match(
      /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|SymbianOS|Windows CE|IEMobile|Windows/i
    );
    return { media };
  },
};
/*控制台欢迎语*/
welcome.console();
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  background: #000;
  color: #fff;
}
</style>
