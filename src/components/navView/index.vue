<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 22:36:45
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-05-10 16:56:14
 * @FilePath: \4433studio\src\components\navView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <nav class="navBar">
    <!-- logo -->
    <div class="logoBox">
      <img src="@/assets/gzs.jpg" alt="4433工作室logo" class="logo" />
      <div class="logoText" @click="$router.push('/')">4433Studio</div>
    </div>
    <!-- 导航 -->
    <div class="navs">
      <el-menu
        ref="menu"
        @select="keep"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#000"
        text-color="#fff"
        active-text-color="rgb(220,223,230)"
        router
      >
        <el-menu-item index="/" class="mengceng">首页</el-menu-item>
        <el-menu-item index="/team">团队介绍</el-menu-item>
        <el-menu-item index="/show">关于我们</el-menu-item>
        <el-menu-item index="/join">加入我们</el-menu-item>
        <el-menu-item index="/contact">联系我们</el-menu-item>
        <!-- <el-menu-item index="/login">登录/注册</el-menu-item> -->
      </el-menu>
      <!-- <el-button class="loginBtn" @click="userLogin(true)">登录</el-button> -->
      <!-- <el-button class="regiestBtn" @click="userRegiest(true)">注册</el-button> -->
    </div>
    <!-- 登陆注册弹窗 -->
    <!-- <el-dialog title="登录" :visible.sync="dialogFormVisibleL" width="500px">
      <loginView ref="loginView" @userLogin="userLogin" />
    </el-dialog>
    <el-dialog title="注册" :visible.sync="dialogFormVisibleR" width="500px">
      <regiestView ref="regiestView" @userRegiest="userRegiest" />
    </el-dialog> -->
  </nav>
</template>

<script>
// import loginView from '@/components/loginView/index.vue'
// import regiestView from '@/components/regiestView/index.vue'
export default {
  // components: { loginView, regiestView },
  data() {
    return {
      activeIndex: "/",
      dialogFormVisibleL: false,
      dialogFormVisibleR: false,
    };
  },
  created() {
    if (sessionStorage.getItem("navkeep")) {
      this.activeIndex = sessionStorage.getItem("navkeep");
    }
  },
  methods: {
    /**
     * @description: keep navItem alive
     * @return {*}
     */
    keep() {
      sessionStorage.setItem("navkeep", this.$refs.menu.activeIndex);
    },
    /**
     * @description: 用户登录弹窗显示隐藏
     * @param {*} type
     * @return {*}
     */
    userLogin(type) {
      if (type) {
        this.dialogFormVisibleL = true;
      } else {
        this.dialogFormVisibleL = false;
      }
    },
    /**
     * @description: 用户注册弹窗显示隐藏
     * @param {*} type
     * @return {*}
     */
    userRegiest(type) {
      if (type) {
        this.dialogFormVisibleR = true;
      } else {
        this.dialogFormVisibleR = false;
      }
    },
  },
};
</script>

<style lang="scss">
.navBar {
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  box-sizing: border-box;
  height: 100px;
  .logoBox {
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;

    .logoText {
      font-size: 24px;
      white-space: nowrap;
      letter-spacing: 2px;
      font-weight: 600;
      cursor: pointer;
      margin-left: 20px;
    }
    .img-box {
      overflow: hidden;
    }
    .logo {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .navs {
    display: flex;
    justify-content: right;
    align-items: center;
    .loginBtn {
      padding: 8px 30px;
      color: #fff;
      background: rgba($color: #000000, $alpha: 0.3);
      margin-right: 20px;
      margin-left: 30px;
      margin-top: 5px;
    }
    .regiestBtn {
      padding: 8px 30px;
      color: #fff;
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
