<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-09 20:41:58
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-05-13 09:19:01
 * @FilePath: \4433studio\src\views\teamView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
-->

<template>
  <div class="bB">
    <div class="teamTitle">TEAM OF US</div>
    <div class="teamBuff">(展示顺序不分先后)</div>
    <!-- 卡片 -->
    <div class="cardBox">
      <cardView
        v-for="(user, index) in teams"
        :key="index"
        :name="user.name"
        :tags="user.tags"
        :selfContent="user.selfContent"
        :imgUrl="user.imgUrl"
      ></cardView>
    </div>
  </div>
</template>

<script>
import cardView from "@/components/cardView/index.vue";
export default {
  components: { cardView },
  data: () => {
    return {
      teams: [
        {
          name: "柴柴",
          tags: ["前端负责人", "前端工程师", "工作室负责人"],
          selfContent:
            "vue二次元个人博客模板作者，热爱花里胡哨的开发，涉猎广泛，励志做一名优秀的、花里胡哨的程序员",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/chaichai.jpg",
        },
        {
          name: "张三同学",
          tags: ["前端副负责人", "前端工程师", "工作室副负责人"],
          selfContent:
            "爱搞事的闲散青年，兴趣广泛，善于行动，热爱生活，立志成为一名18线全栈攻城狮，我的城科微信小程序作者。",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/zs.jpg",
        },
        {
          name: "土豆",
          tags: ["后端负责人", "后端工程师"],
          selfContent: "给你最完美的数据就是return True",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/td.jpg",
        },
        {
          name: "旧颜",
          tags: ["后端副负责人", "后端工程师"],
          selfContent: "立志成为一个十八线后端程序员！",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/jy.png",
        },
        {
          name: "百梦",
          tags: ["首席架构师", "BOT开发工程师"],
          selfContent: "我是蠢狗",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/bm.jpg",
        },
        {
          name: "屁屁",
          tags: ["UI设计师", "产品经理"],
          selfContent: "我也是蠢狗",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/pp.jpg",
        },
        {
          name: "子兮",
          tags: ["运维工程师", "工作室WAF", "BOT开发工程师"],
          selfContent: "Goodbye World",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/zixi.JPG",
        },
        {
          name: "七七",
          tags: ["运维工程师", "天之都开发组"],
          selfContent:
            "我总是会试图提前预测一切的事情。我的人生是一条只能向前推进的窄路，我的头顶有开刃的刀，身后是吃人的鬼，眼前是驱不开的雾，脚下是开裂的冰",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/qiqi.jpg",
        },
        {
          name: "渡渡",
          tags: ["首席UI设计师"],
          selfContent: "在梭哈了！！！",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/dd.jpg",
        },
        {
          name: "小小柴",
          tags: ["美工", "图形设计师"],
          selfContent: "暂无数据",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/xxc.jpg",
        },
        {
          name: "绾柔",
          tags: ["UI设计师", "工作室吉祥物", "天之都开发组", "工作室讲师"],
          selfContent: "巴拉巴拉巴拉",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/wanrou.jpg",
        },
        {
          name: "十四",
          tags: ["工作室管家"],
          selfContent: "工作室管家（185，八块腹肌，美男子）",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/xt.jpg",
        },
        {
          name: "小柴",
          tags: ["运营", "客服"],
          selfContent: "要让世间受苦受穷的人不再贫困",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/qingting.jpg",
        },
        {
          name: "狂少",
          tags: ["BOT工程师", "大数据工程师", "人工智能工程师"],
          selfContent:
            "大数据分析师，主攻大数据与人工智能方向，现已加入写PPT混吃等死行列",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/ks.jpg",
        },
        {
          name: "莫熊",
          tags: ["后端工程师", "天之都开发组"],
          selfContent: "看不到未来其实是看到了未来。",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/moxiong.jpg",
        },
        {
          name: "大狗老师",
          tags: ["前端工程师", "chai-UI开发组"],
          selfContent: "这个人没什么想说的.jpg",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/DG.png",
        },
        {
          name: "离",
          tags: ["前端工程师", "chai-UI开发组"],
          selfContent: "（资深）摸鱼前端工程师，好好干 狠狠摸！",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/li.jpg",
        },
        {
          name: "开摆",
          tags: ["前端工程师", "chai-UI开发组"],
          selfContent: "处于摆烂和学习的量子叠加态",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/bai.jpg",
        },
        {
          name: "斯普努尔",
          tags: ["前端工程师"],
          selfContent: "春恨秋悲皆自惹，bugbug快走开",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/qpne.jpg",
        },
        {
          name: "墨卿",
          tags: ["前端工程师"],
          selfContent: "每次npm run 就像开奖,见红直接开摆",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/mm.jpg",
        },
        {
          name: "小七",
          tags: ["前端工程师"],
          selfContent: "是个前端，开发练习两年半只会v2，v3学习中",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/xq.jpg",
        },
        {
          name: "SAO2233",
          tags: ["前端工程师"],
          selfContent: "react，vue",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/SAO2233.jpg",
        },
        {
          name: "旺仔",
          tags: ["前端工程师"],
          selfContent: "摸鱼型选手",
          imgUrl:
            "http://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/wz.jpg",
        },
        {
          name: "鲨鲨",
          tags: ["后端工程师"],
          selfContent: "无所谓，我会出手",
          imgUrl:
            "https://4433studio.oss-cn-hangzhou.aliyuncs.com/headPortrait/ss.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.bB {
  overflow: hidden;
  margin-bottom: 100px;
}
.teamTitle {
  font-weight: 550;
  font-size: 30px;
  margin-top: 50px;
  text-align: center;
}
.cardBox {
  width: 70vw;
  /* height: 80vh; */
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
}
.teamBuff {
  font-size: 14px;
  margin-bottom: 60px;
  text-align: center;
}
</style>
