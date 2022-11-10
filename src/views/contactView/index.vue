<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-09 20:41:58
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-11-10 16:49:48
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
      <el-tab-pane label="柴柴">柴柴：</el-tab-pane>
      <el-tab-pane label="旧颜">旧颜：</el-tab-pane>
      <el-tab-pane label="百梦">百梦：</el-tab-pane>
      <el-tab-pane label="鲨鲨">鲨鲨：</el-tab-pane>
      <el-tab-pane label="屁屁">屁屁</el-tab-pane>
      <el-tab-pane label="张三">张三</el-tab-pane>
      <el-tab-pane label="渣男">渣男</el-tab-pane>
      <el-tab-pane label="野猪">野猪</el-tab-pane>
    </el-tabs>
  </div>
</template>
  
  <script>
export default {};
</script>
  
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