<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 22:36:45
 * @LastEditors: Nico
 * @LastEditTime: 2023-02-10 18:23:25
 * @FilePath: \4433studio\src\components\navView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <nav class="navBar">
    <!-- logo -->
    <div class="logoBox">
      <img src="@/assets/4433white.png" alt="4433工作室logo" class="logo" />
    </div>
    <!-- 导航 -->
    <div class="navs">
      <el-menu
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
        <el-menu-item index="/3">作品展示</el-menu-item>
        <el-menu-item index="/join">加入我们</el-menu-item>
        <el-menu-item index="/contact">联系我们</el-menu-item>
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
import loginView from '@/components/loginView/index.vue'
import regiestView from '@/components/regiestView/index.vue'
export default {
  components: { loginView, regiestView },
  data() {
    return {
      activeIndex: '1',
      dialogFormVisibleL: false,
      dialogFormVisibleR: false
    }
  },
  created() {
    this.activeIndex = this.$route.path
    console.log(this.$route)
  },
  methods: {
    /**
     * @description: 用户登录弹窗显示隐藏
     * @param {*} type
     * @return {*}
     */
    userLogin(type) {
      if (type) {
        this.dialogFormVisibleL = true
      } else {
        this.dialogFormVisibleL = false
      }
    },
    /**
     * @description: 用户注册弹窗显示隐藏
     * @param {*} type
     * @return {*}
     */
    userRegiest(type) {
      if (type) {
        this.dialogFormVisibleR = true
      } else {
        this.dialogFormVisibleR = false
      }
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
