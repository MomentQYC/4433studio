<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 22:02:00
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-02-23 16:24:11
 * @FilePath: \4433studio\src\views\homeView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <div class="homeBg">
    <transition name="showwarp" appear>
      <div class="ContentBox">
        <h1 class="title">4433工作室</h1>
        <p class="content1">
          <span>谁说</span>网页<span>就应该平平无奇？</span>
        </p>
        <p class="content1">
          看看<span>00后</span>会有怎样的<span>奇思妙想</span>🤨
        </p>
      </div>
    </transition>
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
      ).style.cssText += `transform:perspective(100px) rotateX(${
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
  background: #000;
  overflow: hidden;
  width: 100%;
  padding: 0 100px;
  box-sizing: border-box;

  .ContentBox {
    width: 100%;
    margin-top: 1.28rem;
    padding: 50px 200px;

    .title {
      position: relative;
      font-size: 55px;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }

    .content1 {
      margin-top: 10px;
      font-size: 25px;
      letter-spacing: 1px;
      font-size: 0.13rem;
      color: rgb(163, 163, 163);
      text-transform: uppercase;
      cursor: pointer;
    }

    .content1 span {
      /* 动画过渡 */
      transition: 0.5s;
    }

    .content1:hover span:nth-child(1) {
      margin-right: 10px;
    }

    .content1:hover span:nth-child(1)::after {
      content: "";
    }

    .content1:hover span:nth-child(2) {
      margin-left: 40px;
    }

    .content1:hover span {
      color: #fff;
      /* 文字阴影 */
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff,
        0 0 120px #fff, 0 0 160px #fff;
    }
  }

  .bgBox {
    width: 380px;
    height: 380px;
    position: fixed;
    top: 50%;
    right: 300px;
    transform: translateY(-50%);

    .bgimg {
      display: inline-block;
      filter: Alpha(opacity=50);
      opacity: 0.5;
      filter: none;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
}

.showwarp-enter-active {
  animation: show 1s;
}

.showwarp-leave-active {
  animation: show 1s reverse;
}

@keyframes show {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
}
</style>
