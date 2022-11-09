<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 22:02:00
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2022-11-09 22:28:46
 * @FilePath: \4433studio\src\views\homeView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <div class="homeBg">
    <div class="ContentBox">
      <h1 class="title">4433工作室</h1>
      <p class="content">
        谁说网页就应该平平无奇？看看00后会有怎样的奇思妙想🤨
      </p>
    </div>
    <div class="bgBox" @mousemove="mouseMove" @mouseleave="mouseLeave">
      <img src="@/assets/bg.jpg" alt="" class="bgimg" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * @description: 鼠标移动图片跟随晃动
     * @param {*} e
     * @return {*}
     */
    mouseMove(e) {
      let x = e.offsetX; //相对元素的X偏移量
      let y = e.offsetY; //相对元素的Y偏移量
      let img = document.querySelector(".bgBox");
      let x1 = img.offsetWidth; //元素的宽度
      let y1 = img.offsetHeight; //元素的高度
      document.querySelector(".bgBox").style.cssText +=
        "will-change: transform";
      // perspective：图片拉伸长度  deg：图片倾斜幅度
      document.querySelector(
        ".bgBox"
      ).style.cssText += `transform:perspective(1000px) rotateX(${
        (x1 / 2 - x) / 30
      }deg) rotateY(${(y1 / 2 - y) / 30}deg) scale3d(1.1,1.1,1.1)`;
    },
    /**
     * @description: 鼠标离开
     * @return {*}
     */
    mouseLeave() {
      document.querySelector(".bgBox").style.transform =
        "perspective(300px) rotateX(0deg) rotateY(0deg)";
    },
  },
};
</script>

<style lang="scss">
.homeBg {
  position: absolute;
  overflow: hidden;

  .ContentBox {
    margin-top: 320px;
    margin-left: 300px;

    .title {
      font-size: 55px;
      letter-spacing: 2px;
    }

    .content {
      margin-top: 20px;
      font-size: 25px;
      letter-spacing: 1px;
    }
  }

  .bgBox {
    user-select: none;
    text-align: center;
    width: 100%;
    height: 80%;
    position: fixed;
    right: 0px;
    bottom: 0;
    .bgimg {
      width: 250px;
      margin-left: 450px;
      margin-top: 280px;
      display: inline-block;
      filter: Alpha(opacity=50);
      opacity: 0.5;
      filter: none;
    }
  }
}
</style>