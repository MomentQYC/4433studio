<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-02-23 15:45:08
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-03-08 09:09:13
 * @FilePath: \4433studio\src\views\loginView\index.vue
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div>
    <div class="bgBox">
      <div class="container">
        <div class="form-box">
          <!-- 注册 -->
          <div class="register-box hidden">
            <h1>register</h1>
            <el-form
              size="mini"
              :model="registerForm"
              :rules="rules"
              ref="registerForm"
              label-width="130px"
              class="demo-dynamic"
            >
              <el-form-item label="用户名称" prop="name">
                <el-input
                  v-model="registerForm.name"
                  placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
              <el-form-item label="邮箱账号" prop="email">
                <el-input
                  v-model="registerForm.email"
                  placeholder="请输入邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item label="输入密码" prop="password">
                <el-input
                  type="password"
                  v-model="registerForm.password"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkpassword">
                <el-input
                  type="password"
                  v-model="registerForm.checkpassword"
                  placeholder="请确认密码"
                ></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="phone">
                <el-input
                  v-model="registerForm.phone"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="code">
                <el-input
                  v-model="registerForm.code"
                  placeholder="请输入验证码"
                >
                  <template slot="append">
                    <div v-if="timeoutShow">{{ timeout }}秒</div>
                    <template v-else>
                      <el-button
                        size="mini"
                        :loading="getCodeLoading"
                        @click="getCode"
                        >获取验证码</el-button
                      >
                    </template>
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('registerForm')"
                  >立即注册</el-button
                >
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!-- 登录 -->
          <div class="login-box">
            <h1>login</h1>
            <el-form
              size="mini"
              :model="loginForm"
              :rules="rules"
              ref="registerForm"
              label-width="130px"
              class="demo-dynamic"
            >
              <el-form-item label="邮箱账号" prop="email">
                <el-input
                  v-model="loginForm.email"
                  placeholder="请输入邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item label="输入密码" prop="password">
                <el-input
                  type="password"
                  v-model="loginForm.password"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')"
                  >立即登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="con-box left">
          <h2>register</h2>
          <img class="imageBox" src="@/assets/1 (1).jpg" alt="" />
          <p>欢迎注册4433</p>
          <button id="login" @click="goLogin">去登录</button>
        </div>
        <div class="con-box right">
          <h2>欢迎登陆4433</h2>
          <img class="imageBox" src="@/assets/1 (2).jpg" alt="" />
          <p>没有账号？</p>
          <button id="register" @click="goRegister">去注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendMsgR } from "@/api/sendMsg";
import { registerR } from "@/api/register";
export default {
  data() {
    var checkEmail = (rule, value, cb) => {
      //验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (regEmail.test(value)) {
        //合法的邮箱
        return cb();
      }
      //邮箱不合法
      cb(new Error("请输入合法的邮箱！"));
    };
    // 两次密码相同校验
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    // 不能输入汉字校验
    var checkData = (rule, value, callback) => {
      if (value) {
        if (/[\u4E00-\u9FA5]/g.test(value)) {
          callback(new Error("密码不能输入汉字!"));
        } else {
          callback();
        }
      }
      callback();
    };
    return {
      getCodeLoading: false, // 倒计时loading
      timeoutShow: "",
      timeout: "", // 时间
      registerForm: {
        name: "",
        email: "",
        password: "",
        checkpassword: "",
        phone: "",
        code: "",
      },
      loginForm: {
        email: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },
          { validator: checkEmail, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: checkData, trigger: "blur" },
          {
            min: 8,
            max: 20,
            message: "长度在3到8个字符",
            trigger: "blur",
          },
          {
            required: true,
            pattern:
              /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,20}$/,
            message: "包含大小写字母、数字和特殊字符的三种",
            trigger: "blur",
          },
        ],
        checkpassword: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" },
        ],
        phone: [
          {
            required: true,
            pattern:
              /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
            message: "请输入正确的电话",
            trigger: "blur",
          },
        ],
        code: [
          { required: true, message: "输入验证码", trigger: "blur" },
          {
            min: 4,
            max: 4,
            message: "请检查验证码,长度为4位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    /**
     * @description: 提交表单
     * @param {*} formName
     * @return {*}
     */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName === "loginForm") {
            const submitForm = {
              password: this.loginForm.password,
              email: this.loginForm.email,
            };
            this.$message.error('还在开发中哦- -')
          } else {
            const submitForm = {
              name: this.registerForm.name,
              phone: this.registerForm.phone,
              password: this.registerForm.password,
              email: this.registerForm.email,
              code: this.registerForm.code,
            };
            registerR(submitForm).then((res) => {
              if (res.success) {
                this.$message.success("注册成功！");
                this.goLogin();
              } else {
                this.$message.error(res.msg);
              }
            });
          }
        } else {
          this.$message.error("请检查表单信息！");
          return false;
        }
      });
    },
    /**
     * @description: 获取验证码
     * @return {*}
     */
    getCode() {
      let data = {};
      data = {
        sms_type: "register", //验证码类型
        phone: this.registerForm.phone,
      };
      if (data.phone === "") {
        this.$message.error("请输入手机号!");
        return;
      }
      this.getCodeLoading = true;
      sendMsgR(data).then((res) => {
        console.log(res);
        if (res.success) {
          this.$message.success(res.msg);
          this.getCodeLoading = false;
          const timeout = 60;
          this.timeoutShow = true;
          this.timeout = timeout;
          this.timer = setInterval(() => {
            if (this.timeout > 0 && this.timeout <= timeout) {
              this.timeout--;
            } else {
              this.timeoutShow = false;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        } else {
          this.getCodeLoading = false;
          this.$message.error(res.msg);
        }
      });
    },
    goRegister() {
      let form_box = document.getElementsByClassName("form-box")[0];
      let register_box = document.getElementsByClassName("register-box")[0];
      let login_box = document.getElementsByClassName("login-box")[0];
      form_box.style.transform = "translateX(80%)";
      login_box.classList.add("hidden");
      register_box.classList.remove("hidden");
    },
    goLogin() {
      console.log(111);
      let form_box = document.getElementsByClassName("form-box")[0];
      let register_box = document.getElementsByClassName("register-box")[0];
      let login_box = document.getElementsByClassName("login-box")[0];
      form_box.style.transform = "translateX(0%)";
      register_box.classList.add("hidden");
      login_box.classList.remove("hidden");
    },
  },
};
</script>

<style lang="scss">
.bgBox {
  font-size: 17px;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: rgba(255, 255, 255);
  backdrop-filter: blur(5px);
  width: 1050px;
  height: 615px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-box {
  position: absolute;
  top: -10%;
  left: 5%;
  background-color: #1d1d1d;
  width: 520px;
  height: 750px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.5s ease-in-out;
}

.register-box,
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.hidden {
  display: none;
  transition: 0.5s;
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.el-input__inner {
  background-color: transparent;
  //   width: 70%;
  color: #fff;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 0;
  text-indent: 10px;
  //   margin: 8px 0;
  margin-bottom: 9px;
  font-size: 14px;
  letter-spacing: 2px;
}

.el-input__inner::placeholder {
  color: #fff;
}

.el-input__inner:focus {
  color: #a262ad;
  outline: none;
  border-bottom: 1px solid #a262ad80;
  transition: 0.5s;
}

.el-input__inner:focus::placeholder {
  opacity: 0;
}

.form-box .el-input-group__append {
  //   width: 70%;
  //   margin-top: 35px;
  background-color: #f6f6f6;
  outline: none;
  border-radius: 8px;
  padding: 13px;
  color: #a262ad;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
}

.form-box .el-input-group__append:hover {
  background-color: #a262ad;
  color: #f6f6f6;
  transition: background-color 0.5s ease;
}

.con-box {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.con-box.left {
  left: -2%;
}

.con-box.right {
  right: -2%;
}

.con-box h2 {
  color: #000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.con-box p {
  font-size: 12px;
  letter-spacing: 2px;
  color: #8e9aaf;
  text-align: center;
}

.con-box span {
  color: #d3b7d8;
}

.con-box img {
  width: 250px;
  height: 350px;
  opacity: 0.9;
  margin: 40px 0;
}

.con-box button {
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

.con-box button:hover {
  background-color: #d3b7d8;
  color: #fff;
}
</style>