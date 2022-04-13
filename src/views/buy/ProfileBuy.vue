<template>
  <div class="buy-goods-list">
    <profile-buy-item :product="item" v-for="(item,i) in buyGoodsList" :key="i"></profile-buy-item>
  </div>
</template>

<script>
import ProfileBuyItem from "@/views/buy/ProfileBuyItem";
import axios from "axios"
export default {
  name: "ProfileBuy",
  components: {
    ProfileBuyItem,
    axios,
  },
  data() {
    return {
      buyGoodsList: [],
    }
  },
  created() {
    this.getMessage()
  },
  methods: {
    getMessage() {
      //TODO：URL需要修改
      axios.get("/buy").then(res => {
        this.buyGoodsList = res;
      })
    }
  }
}
</script>

<style scoped>

</style>