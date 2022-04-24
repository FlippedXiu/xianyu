<template>
  <div id="login">
    <el-input placeholder="请输入用户名" v-model="user_input">
      <template slot="prepend">用户名</template>
    </el-input>
    <el-input placeholder="请输入密码" v-model="pass_input">
      <template slot="prepend">密码</template>
    </el-input>
  </div>
</template>

<script>
import App from "@/App";

export default {
  name: "Login",
  data() {
    return {
      user_input: '',
      pass_input: '',
    }
  },
}
</script>

<style scoped>

</style>