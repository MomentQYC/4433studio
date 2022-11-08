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
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
}
</style>
