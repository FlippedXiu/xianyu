<template>
  <div id="profile">
    <profile-nav-bar></profile-nav-bar>
    <profile-avatar></profile-avatar>
    <el-button type="primary" @click="btnClick">查询购买记录</el-button>
    <el-button type="primary" @click="sellBtnClick">我是卖家</el-button>
  </div>
</template>

<script>
import ProfileNavBar from "@/views/profile/ProfileNavBar";
import ProfileAvatar from "@/views/profile/ProfileAvatar";
import App from "@/App";
export default {
  name: "Profile",
  components: {
    ProfileNavBar,
    ProfileAvatar,
  },
  methods: {
    btnClick() {
      this.$router.replace('/buy')
    },
    sellBtnClick() {
      this.$router.replace('/sell')
    }
  },
}
</script>

<style scoped>
#profile {
  padding-top: 44px;
}
</style>