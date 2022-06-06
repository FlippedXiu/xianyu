<template>
  <div>
    <nav-bar class="myGoodsNav"><div slot="left" @click="back">返回</div><div slot="center">我发布的商品</div></nav-bar>
    <div class="goods">
      <my-goods-list :goods="goodsList" ></my-goods-list>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navigationBar/NavBar";
import MyGoodsList from "@/views/myGoods/MyGoodsList";
import {getMyGoodsData} from "@/network/myGoods";
import App from "@/App";
import axios from "@/network/axios";

export default {
  name: "myGoods",
  components: {
    NavBar,
    MyGoodsList
  },
  data() {
    return {
      sellID: App.globalData.uid,
      goodsList: [],
    }
  },

  created() {
    this.userID = this.$route.params.userID
    this.getMyGoodsData()
  },
  methods: {
    getMyGoodsData() {
      getMyGoodsData(this.sellID).then(res => {
        this.goodsList = res;
      })
    },
    back() {
      this.$router.replace('/sell');
    },
  }
}
</script>

<style scoped>

</style>