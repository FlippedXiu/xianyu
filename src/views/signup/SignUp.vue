<template>
  <div>
    <div class="login"><h1>注册</h1></div>
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
    <div>
      <el-input class="password" placeholder="请再次输入密码" v-model="pass_confirm">
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <div class="button">
      <el-button  type="primary" @click="signup">注册</el-button>
      <el-button  type="primary" @click="cancel">取消注册</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import App from "@/App";

export default {
  name: "SignUp",
  data() {
    return {
      user_input: '',
      pass_input: '',
      pass_confirm:''
    }
  },
  methods:{
    signup(){
      if(this.pass_input !== this.pass_confirm){
        alert("两次密码不一致，请重新输入！")
      }else{
        axios.post('/user/signUp', {
          userInput: this.user_input,
          passInput: this.pass_input,
        }).then (res=>{
          //console.log(res)
          if(res){
            this.$router.replace('/login');
          }
        })
        // App.globalData.isLogin = true;
      }
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