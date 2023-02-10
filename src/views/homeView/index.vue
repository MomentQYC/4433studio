<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-08 22:02:00
 * @LastEditors: Nico
 * @LastEditTime: 2023-02-10 18:50:36
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
        <p class="content">谁说网页就应该平平无奇？</p>
        <p class="content">看看00后会有怎样的奇思妙想🤨</p>
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
      let x = e.offsetX //相对元素的X偏移量
      let y = e.offsetY //相对元素的Y偏移量
      let img = document.querySelector('.bgBox')
      let x1 = img.offsetWidth //元素的宽度
      let y1 = img.offsetHeight //元素的高度
      document.querySelector('.bgBox').style.cssText += 'will-change: transform'
      // perspective：图片拉伸长度  deg：图片倾斜幅度
      document.querySelector('.bgBox').style.cssText += `transform:perspective(100px) rotateX(${(x1 / 2 - x) / 30}deg) rotateY(${
        (y1 / 2 - y) / 30
      }deg) scale3d(1.1,1.1,1.1)`
    },
    /**
     * @description: 鼠标离开
     * @return {*}
     */
    mouseLeave() {
      document.querySelector('.bgBox').style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg)'
    }
  }
}
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
    padding: 0 200px;
    .title {
      font-size: 55px;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }

    .content {
      margin-top: 10px;
      font-size: 25px;
      letter-spacing: 1px;
      font-size: 0.13rem;
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
