<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-09 20:41:58
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-03-08 09:08:07
 * @FilePath: \4433studio\src\views\joinView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <div class="joinBox">
    <div class="joinTitle">
      JOIN US
      <div class="inforTitle3">来和我们一起玩一种不被定义的开发</div>
    </div>
    <div class="content-warp">
      <!-- 左侧图片 -->
      <div class="contentBox">
        <!-- <img @dragstart.prevent src="@/assets/join.png" alt="" class="joinImg" /> -->
        <div id="myChart" class="echarts" />
      </div>
      <!-- 表单 -->
      <div class="joinInfo">
        <el-form
          :rules="rules"
          ref="formData"
          :model="formData"
          inline
          label-width="140px"
          label-position="top"
          class="elFrom"
        >
          <el-form-item
            label="姓名："
            prop="joinUserForName"
            style="margin-top: 20px"
          >
            <el-input
              v-model="formData.joinUserForName"
              placeholder="请输入你的名称~"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="联系方式："
            prop="joinUserForQQ"
            style="margin-top: 20px"
          >
            <el-input
              v-model="formData.joinUserForQQ"
              placeholder="请输入你的QQ~"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="擅长领域："
            prop="joinUserForSkill"
            style="margin-top: 20px"
          >
            <el-input
              v-model="formData.joinUserForSkill"
              placeholder="请输入擅长领域~"
            ></el-input>
          </el-form-item>
          <!-- action="http://chaichaisocute.top:8081/v1/file/upload" -->
          <!-- action="https://jsonplaceholder.typicode.com/posts/" -->
          <el-form-item
            label="个人优秀作品截图集上传"
            prop="address"
            style="margin-top: 20px"
          >
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
              ref="conDocUpload"
              class="upload-demo"
              drag
              name="files"
              :data="{ is_private: 1 }"
              :before-upload="uploadBefore"
              :on-success="uploadSuccess"
              :on-change="onChange"
              :multiple="false"
            >
              <i class="el-icon-upload" style="color: #fff"></i>
              <div class="el-upload__text" style="color: #fff">
                将文件拖到此处，或<em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip" style="color: #fff">
                * 只能上传zip文件，且不超过20MB *
              </div>
              <div class="el-upload__tip" slot="tip" style="color: #fff">
                *
                个人作品上传仅用作考核，本工作室不会以任何形式保存、公开、使用上传的个人作品，并将定期清空存储库
                *
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item
            style="
              position: relative;
              width: 100%;
              margin-left: 100px;
              margin-top: 10px;
            "
          >
            <el-button
              id="Bn"
              class="submit"
              @mouseover.native="notRun && run($event)"
              @click.native="readyToUp('formData')"
              style="position: absolute; left: -100px; top: 0px"
              >{{ isRun ? "很急，欸~" : "立即提交" }}</el-button
            >
            <el-button class="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
  mounted() {
    this.getEcharts();
  },
  data() {
    return {
      isTime:false,
      currentdate:'',
      notRun: true,
      flag: 1,
      isRun: false,
      haveFile: false,
      formData: {
        joinUserForName: "",
        joinUserForQQ: "",
        joinUserForSkill: "",
      },
      rules: {
        joinUserForName: [
          { required: true, message: "请输入名称", trigger: "blur" },
        ],
        joinUserForQQ: [
          { required: true, message: "请输入QQ", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度一般在 6 到 10 位，请检查",
            trigger: "blur",
          },
        ],
        joinUserForSkill: [
          { required: true, message: "请输入特长领域", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    onChange(file, fileList) {
      // const self = this
      // const isLt2M = file.size / 1024 / 1024 < self.formatSize
      // this.isSizeThan20 = file.size / 1024 / 1024 >= 20
      // const docSuffix = file.name.substr(file.name.lastIndexOf('.'))
      // if (!self.accept.includes(docSuffix)) {
      //   // this.$message.error('请上传正确的文件')
      //   self.fileList = []
      //   return false
      // }
      // if (!isLt2M) {
      //   // this.$message.error('上传文件大小不能超过' + self.size)
      //   self.fileList = []
      //   return false
      // }
      // self.fileList = fileList
    },
    getPublicIP() {
      const slef = this
      return new Promise((resolve, reject) => {
        const URL = "https://api.ipify.org/?format=json";
        try {
          var httpRequest = new XMLHttpRequest();
          httpRequest.open("GET", URL, true);
          httpRequest.send();
          httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
              var data = httpRequest.responseText;
              const userIp = JSON.parse(data);
              const currentdate = slef.getNowFormatDate()
              // console.log(userIp);
              // if (!localStorage.userIp) {
              //   localStorage.setItem("userIp", userIp);
              //   localStorage.setItem('uploadTime',currentdate)
              // } else {
              //   const ipInfo = localStorage.getItem('userIp')
              //   if(ipInfo === userIp) {
              //     slef.compareDate(currentdate,'2000-11-19')
              //     console.log(slef.isTime);
              //   }
              // }
            }
          };
        } catch (error) {
          reject(err);
        }
      });
    },
    getNowFormatDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + "-" + month + "-" + strDate;
      return currentdate;
    },

    // 比较日期大小，可以直接进行比较
    compareDate(date1, date2) {
      var date1 = new Date(date1);
      var date2 = new Date(date2);
      // console.log(date1.getTime() - date2.getTime());
      // if (date1.getTime() - date2.getTime()) {
      //   this.isTime = true
      // } else {
      //   this.isTime = false
      // }
    },
    readyToUp(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.haveFile) {
            alert("submit!");
          } else {
            this.$message.error("请上传你的个人作品 poi~");
          }
        } else {
          this.$message.error("请检查表单填写情况~ poi~");
          return false;
        }
      });
    },
    /**
     * @description:文件上传成功
     * @param {*} response
     * @param {*} file
     * @return {*}
     */
    uploadSuccess(response, file) {
      // console.log(response);
      if (response.success) {
        this.$message.success("上传成功");
        this.haveFile = true;
      } else {
        this.$refs.conDocUpload.clearFiles();
        this.$message.error(response.message || "上传失败，请重新上传");
      }
    },
    /**
     * @description: 文件上传前
     * @param {*} file
     * @return {*}
     */
    uploadBefore(file) {
      if (!file.name.includes(".zip")) {
        this.$message.error("请上传正确的文件");
        return false;
      }
      this.getPublicIP();
    },
    run(e) {
      this.isRun = true;
      var Bn = document.getElementById("Bn");
      var aWidth =
        document.body.clientWidth || document.documentElement.clientWidth;
      var aHeight =
        document.body.clientHeight || document.documentElement.clientHeight;
      var sJs1 = Math.floor(Math.random() * aHeight);
      var sJs2 = Math.floor(Math.random() * aWidth);
      if (this.flag === 10) {
        this.$message.success("开个玩笑 ο(=•ω＜=)ρ⌒☆ 不逗你啦~");
        this.isRun = false;
        this.notRun = false;
      } else {
        Bn.style.top = -sJs1 / 2 + "px";
        Bn.style.left = -sJs2 / 2 + "px";
        this.flag++;
      }
    },
    /**
     * @description: 渲染图表
     * @return {*}
     */
    getEcharts() {
      const myChart = this.$echarts.init(document.getElementById("myChart"));
      var keywords = {
        改变世界: 221990,
        任重道远: 10288,
        心之所愿: 11620,
        无所不成: 27447,
        放手去做: 12311,
        无畏过错: 11206,
        不鸣则已: 14885,
        一鸣惊人: 32294,
        "00后": 18574,
        不被定义的开发: 38929,
        加入我们: 11969,
        "网页就该平平无奇？": 37517,
        我们是如此年轻: 12053,
        "吃了吗您？": 57299,
        "chaichai socute": 15418,
        "just do it": 22905,
        "拒绝996！": 5146,
        百梦蠢狗: 49487,
        天天抖手: 33837,
        精神抖擞: 4500,
        很抱歉打扰你: 5744,
        但你要知道: 4840,
        美好的一天: 232,
        从提肛开始: 3706,
        我超酷的: 4812,
        嗨嗨嗨: 16578,
        "为斯卡蒂献上心脏！": 24347,
        我很想你: 43420,
        年轻且有病: 25222,
        geo: 16904,
        parallelAxis: 4029,
        parallel: 5319,
        max: 3393,
        BB: 43066,
        heatmap: 3110,
        我们是: 20285,
        animationDuration: 3425,
        animationDelay: 2431,
        splitNumber: 5175,
        大爷来玩啊: 12738,
        "4433工作室": 7133,
        axisTick: 8831,
        "加班？给钱！": 17516,
        pointer: 590,
        "你真不来？": 23426,
        柴柴: 38497,
        slider: 7236,
        灰灰: 66514,
        鲨鲨: 28516,
        smooth: 1295,
        渣男: 12815,
        saveAsImage: 2616,
        polar: 6279,
        我是布洛特亨德尔: 9419,
        show: 20620,
        text: 2592,
        icon: 2782,
        dimension: 478,
        inRange: 1060,
        提肛了吗: 89459,
        angleAxis: 5469,
        dataView: 2754,
        timeline: 10104,
        魔法少女: 5732,
        target: 1433,
        狂少: 5361,
        inside: 8913,
        xAxisIndex: 3843,
        orient: 4205,
        nameGap: 4896,
        hoverAnimation: 2307,
        legendHoverLink: 3553,
        老年痴呆: 3292,
        opacity: 3097,
        屁屁: 6475,
        轩轩: 2238,
        lines: 6403,
        墨卿: 2608,
        现在不嗨: 7477,
        width: 4338,
        categories: 1000,
        叫我女王大人: 3825,
        barGap: 1094,
        barWidth: 1521,
        coordinateSystem: 3622,
        z: 4014,
        polarIndex: 1456,
        shadowOffsetX: 3046,
        shadowColor: 3771,
        shadowOffsetY: 2475,
      };
      var data = [];
      for (var name in keywords) {
        data.push({
          name: name,
          value: Math.sqrt(keywords[name]),
        });
      }
      // var maskImage = new Image();
      var option = {
        backgroundColor: "#000",
        series: [
          {
            name: "joinUs",
            type: "wordCloud",
            //size: ['9%', '99%'],
            sizeRange: [11, 80],
            //textRotation: [0, 45, 90, -45],
            rotationRange: [-45, 90],
            //shape: 'circle',
            // maskImage: maskImage,
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 6,
            },
            textStyle: {
              color: function () {
                return "#fff";
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            data: data,
          },
        ],
      };
      // maskImage.onload = function() {
      myChart.setOption(option);
      // };
    },
  },
};
</script>

<style lang="scss">
.joinBox {
  .joinTitle {
    font-weight: 550;
    font-size: 30px;
    margin-left: 100px;
    margin-top: 30px;
    width: 100%;

    .inforTitle3 {
      margin-top: 10px;
      font-size: 16px;
    }
  }

  .content-warp {
    display: flex;
    padding: 80px 100px 0 100px;
    justify-content: space-between;
  }

  .contentBox {
    user-select: none;
    border: 2px solid #fff;
    width: 3rem;
    height: 3rem;

    .joinImg {
      width: 100%;
    }

    .echarts {
      width: 100%;
      height: 100%;
    }
  }

  .joinInfo {
    width: 700px;

    .elFrom {
      text-align: left;
      font-size: 14px;
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
