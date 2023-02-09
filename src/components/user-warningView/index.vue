<template>
  <div class="mobile">
    <div class="mobileTitle">😵移动端暂不支持</div>
    <div class="mobileContent">
      请使用电脑访问
      <p>
        <a href="http://chaichaisocute.top" class="mobileHref"
          >http://chaichaisocute.top</a
        >
      </p>
    </div>
  </div>
</template>

<script></script>

<style>
.mobile {
  width: 100%;
  height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mobileTitle {
  font-size: 25px;
  padding: 5px;
  border-radius: 25px;
  border-width: 3px;
  border-style: solid;
}
.mobileContent {
  display: flex;
  font-size: 20px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mobileHref {
  color: #57eae8;
  text-decoration: none;
}
</style>
