<template>
  <div class="homeBg">
    <div class="ContentBox">
      <h1 class="title">4433工作室</h1>
      <p class="content">谁说网页就是平平无奇？看看00后会有怎样的奇思妙想🤨</p>
    </div>
    <div>
      <img src="@/assets/bg.jpg" alt="" class="bgimg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.homeBg {
  position: absolute;
  overflow: hidden;
  .ContentBox {
    margin-top: 320px;
    margin-left: 300px;
    .title {
      font-size: 50px;
      letter-spacing: 2px;
    }
    .content {
      margin-top: 10px;
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
  .bgimg {
    position: fixed;
    right: 300px;
    top: 400px;
    width: 300px;
    display: inline-block;
    filter: Alpha(opacity=50);
    opacity: 0.5;
    filter: none;
  }
}
</style>