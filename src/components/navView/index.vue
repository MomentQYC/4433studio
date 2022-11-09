<template>
  <nav class="navBar">
    <div class="logoBox">
      <img src="@/assets/4433white.png" alt="4433工作室logo" class="logo" />
    </div>
    <div class="navs">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#000"
        text-color="#fff"
        active-text-color="rgb(220,223,230)"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/" class="mengceng">首页</el-menu-item>
        <el-menu-item index="team">团队介绍</el-menu-item>
        <el-menu-item index="3">作品展示</el-menu-item>
        <el-menu-item index="join">加入我们</el-menu-item>
        <el-menu-item index="5">联系我们</el-menu-item>
      </el-menu>
      <button class="loginBtn">登录</button>
      <button class="regiestBtn">注册</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
.navBar {
  z-index: 9999;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  box-sizing: border-box;
  height: 100px;
  .logoBox {
    width: 250px;
    display: flex;
    align-items: center;
    .logo {
      width: 250px;
    }
  }

  .navs {
    display: flex;
    justify-content: right;
    align-items: center;
    .loginBtn {
      padding: 8px 30px;
      border-radius: 50px;
      color: #fff;
      border: 1px solid #fff;
      background: rgba($color: #000000, $alpha: 0.3);
      margin-right: 20px;
      margin-left: 30px;
      margin-top: 5px;
    }
    .regiestBtn {
      padding: 8px 30px;
      border-radius: 50px;
      color: #fff;
      border: 1px solid #fff;
      background: rgba($color: #000000, $alpha: 0.3);
      margin-top: 5px;
    }
  }
}
</style>

<style lang="scss">
.el-menu.el-menu--horizontal {
  border-bottom: 0 !important;
}
.el-menu-demo {
  // margin-right: 30px;
  // margin-top: 10px;
}
.el-menu-item {
  font-size: 17px;
}
</style>
