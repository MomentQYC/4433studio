<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-05-10 15:11:31
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-05-10 15:17:39
 * @FilePath: \4433studio\src\components\footerView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="footer-box">Copyright &copy; {{ new Date().getFullYear() }} cqucc4433</div>
</template>

<script>
export default {};
</script>

<style>
.footer-box {
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 80px;
  background: #000;
  text-align: center;
  font-size: 18px;
  bottom: 0;
  font-weight: 550;
  line-height: 80px;
}
</style>
