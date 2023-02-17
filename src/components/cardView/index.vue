<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-09 20:41:58
 * @LastEditors: Nico
 * @LastEditTime: 2023-02-17 15:32:12
 * @FilePath: \4433studio\src\components\cardView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->
<template>
  <div class="card-item">
    <div class="card-warp">
      <div class="content">
        <div class="cover">
          <img :src="imgUrl" alt="" />
        </div>
      </div>
      <div class="mask">
        <div class="description">
          <div class="name">
            {{ name }}
            <div class="line"></div>
          </div>
          <div class="tags">
            <div v-for="(tag, index) in tags" :key="index" class="tag">
              {{ tag }}
            </div>
          </div>
          <div class="bio">
            {{ selfContent }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      required: true
    },
    name: {
      required: true
    },
    selfContent: {
      require: true
    },
    tags: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  width: 100%;
  height: 320px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  @media screen and (min-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    width: 50%;
  }
  @media screen and (min-width: 900px) {
    width: 33.33%;
  }
  @media screen and (min-width: 1300px) {
    width: 25%;
  }
  .card-warp {
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-color: #ccc;
    // filter: grayscale(1);
    position: relative;
    box-sizing: border-box;
    border-radius: 5px;

    &:hover {
      filter: unset;
      cursor: pointer;
      .mask {
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
      }
    }
    .content {
      height: 100%;
      .cover {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .mask {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0;
      transition: height 0.3s;
      backdrop-filter: blur(20px);
      background: rgba(39, 139, 255, 0.7);
      .name {
        font-size: 24px;
        font-weight: 600;
        padding: 15px;
        .line {
          width: 40px;
          height: 6px;
          background-image: linear-gradient(to right, #71b7fe, #1c81ff);
          margin-top: -6px;
        }
      }
      .tags {
        margin: 0 14px;
        display: flex;
        flex-wrap: wrap;
        .tag {
          font-size: 14px;
          font-weight: normal;
          padding: 5px 10px;
          background-image: linear-gradient(to right, #71b7fe, #1c81ff);
          border-radius: 5px;
          margin-top: 10px;
          margin-right: 5px;
        }
      }
      .bio {
        word-wrap: break-word;
        line-height: 1.5;
        padding: 15px;
        font-size: 16px;
        text-align: justify;
        text-align-last: left;
      }
    }
  }
}
</style>
