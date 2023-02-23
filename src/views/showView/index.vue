<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-09 20:41:58
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-02-23 16:23:41
 * @FilePath: \4433studio\src\views\showView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->

<template>
  <div>
    <div class="showTitle">SHOW ABOUT US</div>
    <section>
      <div class="item">
        <div class="a">年轻.</div>
        <div class="a">年轻.</div>
        <a href="#">点击查收我们的 年轻</a>
      </div>
      <div class="item">
        <div class="a">疯狂.</div>
        <div class="a">疯狂.</div>
        <a href="#">点击查收我们的 疯狂</a>
      </div>
      <div class="item">
        <div class="a">梦想.</div>
        <div class="a">梦想.</div>
        <a href="#">点击查收我们的 梦想</a>
      </div>
    </section>
  </div>
</template>
  
<script>
export default {};
</script>
  
<style lang="scss">
.showTitle {
  font-weight: 550;
  font-size: 30px;
  margin-top: 50px;
  margin-bottom: 60px;
  text-align: center;
}

section {
  width: 100%;
  height: 100px;
  display: flex;
  margin-top: 250px;
  justify-content: space-around;
  align-items: center;

  .item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      position: absolute;
      color: #fff;
      text-decoration: none;
      opacity: 0;
      transition: opacity 0.5s;
      font-size: 16px;
    }

    a:hover {
      text-decoration: none;
    }

    .a {
      color: #fff;
      font-style: italic;
      font-weight: bold;
      font-size: 9vw;
      top: 0;
      opacity: 1;
      transition: top 0.5s, opacity 0.5s;
    }

    .a:nth-child(1) {
      position: absolute;
      clip-path: polygon(0% 0%, 100% 0%, 100% 51%, 0% 51%);
    }

    .a:nth-child(2) {
      position: relative;
      clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
    }
  }
}

/* 触发景深效果 */
section:hover .item {
  filter: blur(10px);
  transform: scale(0.8);
  transition: filter 0.5s, transform 0.5s;
}

/* 对应的取消景深效果 */
section .item:hover {
  filter: blur(0px);
  transform: scale(1);
  transition: filter 0.5s, transform 0.5s;
}

/* 上半部分上移并变淡 */
section .item:hover .a:nth-child(1) {
  top: -40px;
  opacity: 0.5;
  transition: top 0.5s, opacity 0.5s;
}

/* 下半部分下移并变淡 */
section .item:hover .a:nth-child(2) {
  top: 40px;
  opacity: 0.5;
  transition: top 0.5s, opacity 0.5s;
}

/* 裂开后显示的文字 */
section .item:hover a {
  opacity: 1;
  transition: opacity 0.5s;
}</style>