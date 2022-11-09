<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 21:59:40
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2022-11-09 22:29:04
 * @FilePath: \4433studio\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <div id="app">
    <navView></navView>
    <router-view></router-view>
  </div>
</template>
<script>
import navView from "@/components/navView/index.vue";
export default {
  components: { navView },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  overflow: hidden;

  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
}
</style>
