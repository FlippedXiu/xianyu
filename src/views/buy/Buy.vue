<template>
  <div id="buy">
    <nav-bar><div slot="left" @click="back">返回</div><div slot="center">购买记录</div> </nav-bar>
    <div class="body">
      <profile-buy v-if="getMessageFlag" :goods="goodsList"></profile-buy>
      <div v-else>
        <div>尚未购买商品</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navigationBar/NavBar";
import ProfileBuy from "@/views/buy/ProfileBuy";
import App from "@/App";
import {getBuyData} from "@/network/buy";
export default {
  name: "Buy",
  components: {
    NavBar,
    ProfileBuy,
  },
  data() {
    return {
      getMessageFlag:false,
      userID: App.globalData.uid,
      goodsList: []
    }
  },
  created(){
    this.getMessage()
  },
  methods: {
    getMessage() {
      getBuyData(this.userID).then(res => {
        //console.log(res)
        if (res !== null) {
          this.goodsList = res
          this.getMessageFlag = true
          console.log(this.getMessageFlag)
        }
      })
    },
    back() {
      this.$router.replace('/profile');
    },
  },
}
</script>

<style scoped>
.body {
  height: 20px;
}
</style>