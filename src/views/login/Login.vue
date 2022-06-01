<template>
  <div>
    <div class="login">登录</div>
    <div>
      <el-input class="userName" placeholder="请输入用户名" v-model="user_input">
        <template slot="prepend">用户名</template>
      </el-input>
    </div>
    <div>
      <el-input class="password" placeholder="请输入密码" v-model="pass_input">
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
import axios from "axios";
import App from "@/App";
export default {
  name: "Login",
  data() {
    return {
      user_input: '',
      pass_input: '',
    }
  },
  methods: {
    //TODO DONE: 这里需要将用户名和密码发送给后端
    push() {
      axios({
        url:"http://localhost:8080",
        data: {
          userName:user_input,
          password:pass_input
        },
      });

      this.$router.replace('/home');
      //TODO: 如果登录成功，则修改为true，具体判断等待完善
      App.globalData.isLogin = true;
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