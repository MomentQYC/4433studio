<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 21:59:40
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-05-10 15:21:28
 * @FilePath: \4433studio\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <div id="app">
    <!-- 移动端 -->
    <div v-if="media && media.length && (media[0] === 'Android' || media[0] === 'iPhone')">
      <!-- 警告组件 -->
      <warningView />
    </div>

    <!-- PC端 -->
    <div v-else>
      <!-- 导航栏 -->
      <keep-alive>
        <navView />
      </keep-alive>
      <!-- 路由内容 -->
      <router-view />
      <footerView />
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
import footerView from "@/components/footerView/index.vue";

export default {
  components: { navView, warningView, footerView },
  data() {
    /*获取设备类型*/
    const media = navigator.userAgent.match(
      /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|SymbianOS|Windows CE|IEMobile|Windows/i
    );
    return {
      media,
      getIp: "",
    };
  },
  /*控制台欢迎语*/
  created() {
    welcome.console();
  },
};
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
