<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-02-23 15:45:08
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-02-23 16:23:55
 * @FilePath: \4433studio\src\views\loginView\index.vue
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="bgBox">
        <div class="container">
        <div class="form-box">
            <!-- 注册 -->
            <div class="register-box hidden">
                <h1>register</h1>
                <input type="text" placeholder="用户名">
                <input type="email" placeholder="邮箱">
                <input type="password" placeholder="密码">
                <input type="password" placeholder="确认密码">
                <button>注册</button>
            </div>
            <!-- 登录 -->
            <div class="login-box">
                <h1>login</h1>
                <input type="text" placeholder="用户名">
                <input type="password" placeholder="密码">
                <button>登录</button>
            </div>
        </div>
        <div class="con-box left">
            <h2>login</h2>
            <img class="imageBox" src="@/assets/1 (1).jpg" alt="">
            <p>已有账号</p>
            <button id="login" @click="goLogin">去登录</button>
        </div>
        <div class="con-box right">
            <h2>register</h2>
            <img class="imageBox" src="@/assets/1 (2).jpg" alt="">
            <p>没有账号？</p>
            <button id="register" @click="goRegister">去注册</button>
        </div>
    </div>
    </div>
   
</template>

<script>
export default {
methods: {
    goRegister() {
        let form_box = document.getElementsByClassName('form-box')[0];
        let register_box = document.getElementsByClassName('register-box')[0];
        let login_box = document.getElementsByClassName('login-box')[0];
        form_box.style.transform = 'translateX(80%)';
        login_box.classList.add('hidden');
        register_box.classList.remove('hidden');
    },
    goLogin() {
        let form_box = document.getElementsByClassName('form-box')[0];
        let register_box = document.getElementsByClassName('register-box')[0];
        let login_box = document.getElementsByClassName('login-box')[0];
        form_box.style.transform = 'translateX(0%)';
            register_box.classList.add('hidden');
            login_box.classList.remove('hidden');
    }
}
}
</script>

<style lang="scss">
.bgBox{
    font-size: 17px;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    background-color: rgba(255,255,255);
    backdrop-filter: blur(5px);
    width: 1050px;
    height: 615px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
    position: relative;
}
.form-box{
    position: absolute;
    top: -10%;
    left: 5%;
    background-color: #1d1d1d;
    width: 520px;
    height: 750px;
    border-radius: 5px;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    transition: 0.5s ease-in-out;
}
.register-box,.login-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.hidden{
    display: none;
    transition: 0.5s;
}
h1{
    text-align: center;
    margin-bottom: 25px;
    text-transform: uppercase;
    letter-spacing: 5px;
}
input{
    background-color: transparent;
    width: 70%;
    color: #fff;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.4);
    padding: 10px 0;
    text-indent: 10px;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 2px;
}
input::placeholder{
    color: #fff;
}
input:focus{
    color: #a262ad;
    outline: none;
    border-bottom: 1px solid #a262ad80;
    transition: 0.5s;
}
input:focus::placeholder{
    opacity: 0;
}
.form-box button{
    width: 70%;
    margin-top: 35px;
    background-color: #f6f6f6;
    outline: none;
    border-radius: 8px;
    padding: 13px;
    color: #a262ad;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
}
.form-box button:hover{
    background-color: #a262ad;
    color: #f6f6f6;
    transition: background-color 0.5s ease;
}
.con-box{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.con-box.left{
    left: -2%;
}
.con-box.right{
    right: -2%;
}
.con-box h2{
    color: #000;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 4px;
    text-transform: uppercase;
}
.con-box p{
    font-size: 12px;
    letter-spacing: 2px;
    color: #8e9aaf;
    text-align: center;
}
.con-box span{
    color: #d3b7d8;
}
.con-box img{
    width: 250px;
    height: 350px;
    opacity: 0.9;
    margin: 40px 0;
}
.con-box button{
    margin-top: 3%;
    background-color: #fff;
    color: #a262ad;
    border: 1px solid #d3b7d8;
    padding: 6px 10px;
    border-radius: 5px;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;
}
.con-box button:hover{
    background-color: #d3b7d8;
    color: #fff;
}
</style>