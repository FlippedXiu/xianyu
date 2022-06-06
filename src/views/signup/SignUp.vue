<template>
  <div>
    <div class="login"><h1>注册</h1></div>
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
    <div>
      <el-input class="password" placeholder="请再次输入密码" v-model="pass_confirm" show-password>
        <template slot="prepend">密码</template>
      </el-input>
    </div>
    <div>
      <el-input class="password" placeholder="请输入电话号码" v-model="phone">
        <template slot="prepend">电话号码</template>
      </el-input>
    </div>
    <div>
      <el-input class="password" placeholder="请输入邮箱" v-model="email">
        <template slot="prepend">邮箱</template>
      </el-input>
    </div>
    <div>
      <el-input class="password" placeholder="请输入居住地址" v-model="address">
        <template slot="prepend">地址</template>
      </el-input>
    </div>
    <div class="button">
      <el-button  type="primary" @click="signup">注册</el-button>
      <el-button  type="primary" @click="cancel">取消注册</el-button>
    </div>
  </div>
</template>

<script>
import axios from "@/network/axios";
import App from "@/App";

export default {
  name: "SignUp",
  data() {
    return {
      user_input: '',
      pass_input: '',
      pass_confirm:'',
      phone:'',
      email:'',
      address:''
    }
  },
  methods:{
    signup(){
      if(this.pass_input !== this.pass_confirm){
        alert("两次密码不一致，请重新输入！")
      }else if(this.email.indexOf('@') < 0){
        alert("邮箱格式有误，请重新输入")
      } else{
        axios.post('/user/signUp', {
          username: this.user_input,
          password: this.pass_input,
          phone:this.phone,
          email:this.email,
          address:this.address
        }).then (res=>{
          console.log(res)
          if(res){
            this.$router.replace('/login');
            alert("注册成功，请输入账号密码");
          }else{
            alert("注册失败，请重试");
          }
        })
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