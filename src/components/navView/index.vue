<template>
  <nav class="navBar">
    <div class="logoBox">
      <img src="@/assets/4433white.png" alt="4433工作室logo" class="logo" />
    </div>

    <div>
      <el-button round size="mini" class="loginBtn">登录</el-button>
      <el-button round size="mini" class="regiestBtn">注册</el-button>
    </div>

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#000"
      text-color="#fff"
      active-text-color="rgb(220,223,230)"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">团队介绍</el-menu-item>
      <el-menu-item index="3">作品展示</el-menu-item>
      <el-menu-item index="4">加入我们</el-menu-item>
      <el-menu-item index="5">联系我们</el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.navBar {
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  justify-content: space-between;
  .logoBox {
    width: 250px;
    position: absolute;
    .logo {
      width: 250px;
      margin-left: 30px;
      margin-top: 10px;
    }
  }
  .loginBtn {
    position: relative;
    left: 310px;
    top: 35px;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.3);
  }
  .regiestBtn {
    position: relative;
    left: 320px;
    top: 35px;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.3);
  }
}
</style>

<style lang="scss">
.el-menu.el-menu--horizontal {
  border-bottom: 0 !important;
}
.el-menu-demo {
  margin-right: 30px;
  margin-top: 10px;
}
</style>