<!--
 * @Author: fengyuanyao fengyuanyao@fanyu.com
 * @Date: 2022-11-09 09:09:27
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2022-11-09 14:09:38
 * @FilePath: \4433studio\4433studio\src\views\teamView\index.vue
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->

<template>
  <div class="bB">
    <div class="teamTitle">OUR TEAM</div>
    <div class="cardBox">
      <cardView
        name="柴柴"
        selfContent="（前端组组长）vue二次元个人博客模板作者，热爱花里胡哨的前端开发"
        imgUrl="https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/chaichai.jpg"
      ></cardView>
      <cardView
        name="旧颜"
        selfContent="(后端组组长)励志成为一个十八线后端程序员！"
        imgUrl="https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/jy.png"
      ></cardView>
      <cardView
        name="张三同学"
        selfContent="我的城科微信小程序作者，吴亦凡十年牢粉"
        imgUrl="https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/zs.jpg"
      ></cardView>
      <cardView
        name="鲨鲨"
        selfContent="无所谓，我会出手"
        imgUrl="https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/ss.jpg"
      ></cardView>
      <cardView
        name="渣男"
        selfContent="我真的想让这个世界变得更好，但是他们不给我源代码……"
        imgUrl="https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/zn.png"
      ></cardView>
      <cardView
        name="轩轩"
        selfContent="代码乱得只有自己能看懂，公司不可替代的重要人才"
        imgUrl="https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/yz.jpg"
      ></cardView>
    </div>
  </div>
</template>

<script>
import cardView from "@/components/cardView/index.vue";
export default {
  components: { cardView },
};
</script>

<style>
.bB{
    overflow: hidden;
}
.teamTitle{
    font-weight: 550;
    font-size: 30px;
    margin-left: 100px;
    margin-top: 50px;
}
.cardBox {
  width: 60vw;
  /* height: 80vh; */
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
</style>