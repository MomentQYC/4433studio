<template>
  <div class="joinBox">
    <div class="joinTitle">
      JOIN US
      <div class="inforTitle3">来和我们一起玩一种不被定义的开发</div>
    </div>

    <div class="contentBox">
      <img @dragstart.prevent src="@/assets/join.png" alt="" class="joinImg" />
    </div>
    <div class="joinInfo">
      <el-divider style="width: 20px !important">个人信息</el-divider>
      <el-form ref="formData" :model="formData" inline label-width="180px">
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
              * 只能上传jpg/png文件，且不超过500kb *
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item style="width: 100%; text-align: right; margin-top: 50px">
          <el-button type="primary" plain>立即提交</el-button>
          <el-button plain>重置</el-button>
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