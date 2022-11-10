<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-09 20:41:58
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2022-11-11 00:23:11
 * @FilePath: \4433studio\src\views\contactView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->

<template>
  <div>
    <!-- 标题 -->
    <div class="contactTitle">CONTACT ME</div>

    <!-- tabs -->
    <el-tabs
      tab-position="left"
      type="card"
      style="height: 710px; margin-left: 30px"
      class="bbxx"
    >
      <el-tab-pane label="柴柴">
        <div class="contactContent">
          <p style="font-size: 40px; font-weight: 550; letter-spacing: 3px">
            柴柴
          </p>
          <div class="tags">
            <div class="tag">前端工程师</div>
            <div class="tag">前端负责人</div>
            <div class="tag">工作室负责人</div>
          </div>
          <p>主攻方向：前端</p>
          <p>特长定位：界面开发、样式开发、动画开发、项目对接</p>
          <p>主要职责：负责工作室运转、项目对接、框架搭建等统筹工作</p>
          <p>
            个人博客：<a
              href="http://chaichaisocute.top/"
              style="color: #fff; text-decoration: none"
              >chaichaisocute.top</a
            >
          </p>
          <p>
            github：<a
              href="https://github.com/bbxx123?tab=repositories"
              style="color: #fff; text-decoration: none"
              >柴柴</a
            >
          </p>
          <p>业务、商务合作联系：2787922490（QQ）</p>
          <img
            src="https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/chaichai2.jpg"
            alt=""
            style="
              filter: Alpha(opacity=50);
              opacity: 0.5;
              width: 200px;
              margin-left: 800px;
            "
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="旧颜">
        <div class="contactContent">
          <p style="font-size: 40px; font-weight: 550; letter-spacing: 3px">
            旧颜
          </p>
          <div class="tags">
            <div class="tag">后端工程师</div>
            <div class="tag">后端负责人</div>
          </div>
          <p>主攻方向：后端</p>
          <p>特长定位：后端开发</p>
          <p>主要职责：负责后端整体工作统筹</p>
          <p>
            个人博客：<a
              href="https://www.scoder.cc/#/"
              style="color: #fff; text-decoration: none"
              >www.scoder.cc</a
            >
          </p>
          <p>
            github：<a
              href="https://github.com/zjw20010709"
              style="color: #fff; text-decoration: none"
              >旧颜</a
            >
          </p>
          <p>业务、商务合作联系：2373072352（QQ）</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="百梦">
        <div class="contactContent">
          <p style="font-size: 40px; font-weight: 550; letter-spacing: 3px">
            百梦
          </p>
          <p>2787922490（QQ）：业务、商务合作联系</p>
        </div></el-tab-pane
      >
      <el-tab-pane label="鲨鲨">
        <div class="contactContent">
          <p style="font-size: 40px; font-weight: 550; letter-spacing: 3px">
            鲨鲨
          </p>
          <p>2787922490（QQ）：业务、商务合作联系</p>
        </div></el-tab-pane
      >
      <el-tab-pane label="屁屁">
        <div class="contactContent">
          <p style="font-size: 40px; font-weight: 550; letter-spacing: 3px">
            屁屁
          </p>
          <p>2787922490（QQ）：业务、商务合作联系</p>
        </div></el-tab-pane
      >
      <el-tab-pane label="张三">
        <div class="contactContent">
          <p style="font-size: 40px; font-weight: 550; letter-spacing: 3px">
            张三
          </p>
          <p>2787922490（QQ）：业务、商务合作联系</p>
        </div></el-tab-pane
      >
      <el-tab-pane label="野猪">
        <div class="contactContent">
          <p style="font-size: 40px; font-weight: 550; letter-spacing: 3px">
            野猪
          </p>
          <p></p></div
      ></el-tab-pane>
      <el-tab-pane label="渣男">
        <div class="contactContent">
          <p style="font-size: 40px; font-weight: 550; letter-spacing: 3px">
            渣男
          </p>
          <p>2787922490（QQ）：业务、商务合作联系</p>
        </div></el-tab-pane
      >
    </el-tabs>
  </div>
</template>
  
  <script>
export default {};
</script>
  

  <style lang="scss">
.contactContent {
  margin-top: 50px;
  margin-left: 100px;
  p {
    margin-bottom: 3px;
    font-size: 18px;
  }
}
.tags {
  margin: 0 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  .tag {
    font-size: 14px;
    font-weight: normal;
    padding: 5px 10px;
    background-image: linear-gradient(to right, #71b7fe, #1c81ff);
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 10px;
  }
}
</style>
  <style>
.contactTitle {
  font-weight: 550;
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: 0;
}
.el-tabs__item {
  height: 80px;
}
#tab-0 {
  background: url(https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/chaichai.jpg);
  background-size: cover;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0);
  font-size: 22px;
  font-weight: 550;
  filter: Alpha(opacity=50);
  opacity: 0.5;
  filter: none;
}
#tab-1 {
  background: url(https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/jy.png);
  background-size: cover;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0);
  font-size: 22px;
  font-weight: 550;
  filter: Alpha(opacity=50);
  opacity: 0.5;
  filter: none;
}
#tab-2 {
  background: url(https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/bm.jpg);
  background-size: cover;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0);
  font-size: 22px;
  font-weight: 550;
  filter: Alpha(opacity=50);
  opacity: 0.5;
  filter: none;
}
#tab-3 {
  background: url(https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/ss.jpg);
  background-size: cover;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0);
  font-size: 22px;
  font-weight: 550;
  filter: Alpha(opacity=50);
  opacity: 0.5;
  filter: none;
}
#tab-4 {
  background: url(https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/pp.jpg);
  background-size: cover;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0);
  font-size: 22px;
  font-weight: 550;
  filter: Alpha(opacity=50);
  opacity: 0.5;
  filter: none;
}
#tab-5 {
  background: url(https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/zs.jpg);
  background-size: cover;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0);
  font-size: 22px;
  font-weight: 550;
  filter: Alpha(opacity=50);
  opacity: 0.5;
  filter: none;
}
#tab-6 {
  background: url(https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/yz.jpg);
  background-size: cover;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0);
  font-size: 22px;
  font-weight: 550;
  filter: Alpha(opacity=50);
  opacity: 0.5;
  filter: none;
}
#tab-7 {
  background: url(https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/zn.png);
  background-size: cover;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0);
  font-size: 22px;
  font-weight: 550;
  filter: Alpha(opacity=50);
  opacity: 0.5;
  filter: none;
}
/* 选中样式 */
.el-tabs__item.is-active {
  font-size: 22px;
  font-weight: 550;
  filter: Alpha(opacity=50);
  opacity: 1 !important;
  filter: none;
}
</style>