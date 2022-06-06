<template>
  <div>
    <div class="login">登录</div>
    <div>
      <el-input class="userName" placeholder="请输入用户名" v-model="user_input">
        <template slot="prepend">用户名</template>
      </el-input>
    </div>
    <div>
      <el-input class="password" placeholder="请输入密码" v-model="pass_input" show-password>
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <div class="button">
      <el-button  type="primary" @click="push">登录</el-button>
      <el-button  type="primary" @click="cancel">取消登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from "@/network/axios";
import App from "@/App";
import {postLogin} from "@/network/cart";

export default {
  name: "Login",
  data() {
    return {
      user_input: '',
      pass_input: '',
    }
  },
  methods: {
    push() {
      postLogin(this.user_input, this.pass_input).then(res => {
        if(res !== 0){
          App.globalData.uid = res;
          App.globalData.isLogin = true;
          this.$router.replace('/home');
        }else{
          this.user_input= '';
          this.pass_input= '';
          alert("登陆失败，请重新输入");
        }
      })
    },

    cancel() {
      this.$router.replace('/profile');
    }
  }
}
</script>

<style scoped>
.login{
  margin-top: 100px;
  margin-left: 720px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bolder;
}

.userName {
  width: 500px;
  margin-left: 500px;
  margin-bottom: 10px;
}

.password {
  width: 500px;
  margin-left: 500px;
  margin-bottom: 10px;
}

.button {
  display: flex;
  align-items: center;
  margin-left: 700px;
}

</style>