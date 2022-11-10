<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-09 22:29:24
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-11-10 08:53:10
 * @FilePath: \4433studio\src\components\loginView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <!-- 登陆表单 -->
    <el-form
      ref="formData"
      :model="formData"
      inline
      label-width="60px"
      label-position="left"
      class="elFrom"
    >
      <el-form-item label="账号：" prop="address">
        <el-input
          v-model="formData.username"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="address">
        <el-input
          v-model="formData.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="width: 80%; text-align: right">
        <el-button type="primary" size="medium">登录</el-button>
        <el-button @click="cancel" size="medium">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    /**
     * @description: 关闭弹窗
     * @return {*}
     */
    cancel() {
      this.$emit("userLogin", false);
    },
  },
};
</script>

<style scope>
.elFrom {
  text-align: center;
}
.el-dialog {
  border-radius: 8px;
  background: rgb(53, 53, 53, 0.9);
  box-shadow: 0 0 10px #333;
}
.el-dialog::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: blur(5px);
}
.el-dialog__title {
  color: #fff;
}
.el-form-item__label {
  color: rgba(0, 0, 0, 0.6);
}
.el-button--primary {
  background: rgba(255, 255, 255, 0.6);
  border: 0;
}
.el-input__inner {
  background: rgba(255, 255, 255, 0.6);
}
</style>