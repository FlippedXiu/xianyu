<template>
  <div class="buy-goods-list">
    <profile-buy-item :product="item" v-for="(item,i) in buyGoodsList" :key="i"></profile-buy-item>
  </div>
</template>

<script>
import ProfileBuyItem from "@/views/buy/ProfileBuyItem";
import {getBuyData} from "@/network/buy";

export default {
  name: "ProfileBuy",
  components: {
    ProfileBuyItem,
  },
  data() {
    return {
      getMessageFlag:false,
      userID: null,
      buyGoodsList: [{title: "test1", desc: "good", price: "30$"}],
    }
  },
  //TODO DONE: 请求数据时恢复
    created(){
      if(getMessageFlag){
        this.userID = this.$route.params.userID
        this.getMessage()
      }
    },
  methods: {
    getMessage() {
      getBuyData(this.userID).then(res => {
        this.buyGoodsList = res
      })
    }
  },
}
</script>

<style scoped>

</style>