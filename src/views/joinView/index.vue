<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-09 20:41:58
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-11-10 15:26:07
 * @FilePath: \4433studio\src\views\joinView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <div class="joinBox">
    <div class="joinTitle">
      JOIN US
      <div class="inforTitle3">来和我们一起玩一种不被定义的开发</div>
    </div>
    <!-- 左侧图片 -->
    <div class="contentBox">
      <img @dragstart.prevent src="@/assets/join.png" alt="" class="joinImg" />
    </div>
    <!-- 表单 -->
    <div class="joinInfo">
      <el-divider>个人信息</el-divider>
      <el-form
        ref="formData"
        :model="formData"
        inline
        label-width="140px"
        label-position="left"
        class="elFrom"
      >
        <el-form-item label="名称：" prop="address" style="margin-top: 20px">
          <el-input
            v-model="formData.joinName"
            placeholder="请输入你的名称~"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="联系方式："
          prop="address"
          style="margin-top: 20px"
        >
          <el-input
            v-model="formData.joinName"
            placeholder="请输入QQ号~"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="擅长领域："
          prop="address"
          style="margin-top: 20px"
        >
          <el-input
            v-model="formData.joinName"
            placeholder="请输入擅长领域~"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="个人优秀作品："
          prop="address"
          style="margin-top: 20px"
        >
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload" style="color: #fff"></i>
            <div class="el-upload__text" style="color: #fff">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip" style="color: #fff">
              * 只能上传zip文件，且不超过500kb *
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item style="width: 100%; margin-left: 70px; margin-top: 10px">
          <el-button class="submit">立即提交</el-button>
          <el-button class="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      formData: {
        joinName: "",
      },
    };
  },
};
</script>
  
  <style lang="scss">
.joinBox {
  display: flex;
  flex-wrap: nowrap;
  .joinTitle {
    font-weight: 550;
    font-size: 30px;
    margin-left: 100px;
    margin-top: 50px;
    .inforTitle3 {
      margin-top: 10px;
      font-size: 16px;
    }
  }
  .contentBox {
    user-select: none;
    border: 2px solid #fff;
    margin-top: 140px;
    margin-left: -100px;
    width: 700px;
    height: 700px;
    .joinImg {
      width: 100%;
    }
  }
  .joinInfo {
    width: 600px;
    height: 820px;
    margin-top: 110px;
    margin-left: 130px;
    .elFrom {
      text-align: center;
    }
  }
  .submit {
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.1);
  }
  .reset {
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
<style>
.el-input__inner {
  background-color: rgb(0, 0, 0, 0.6);
  color: #fff;
}
.el-form-item__label {
  font-size: 16px;
  font-weight: 550;
  color: #fff;
}
.el-divider__text {
  position: absolute;
  background-color: #000;
  padding: 0 20px;
  font-weight: 550;
  color: #fff;
  font-size: 14px;
}
.el-upload-dragger {
  background: #000;
}
</style>