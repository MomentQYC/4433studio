<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2022-11-09 08:40:53
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-11-09 15:37:31
 * @FilePath: \4433studio\4433studio\src\App.vue
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
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
