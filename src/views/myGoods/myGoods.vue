<template>
  <div>
    <nav-bar class="myGoodsNav"><div slot="center">我发布的商品</div></nav-bar>
    <div class="goods">
      <my-goods-list :goods="goodsList"></my-goods-list>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navigationBar/NavBar";
import MyGoodsList from "@/views/myGoods/MyGoodsList";
import {getMyGoodsData} from "@/network/myGoods";

export default {
  name: "myGoods",
  components: {
    NavBar,
    MyGoodsList
  },
  data() {
    return {
      userID: null,
      goodsList: [{title: 'test1', price: '30'}, {title: 'test2', price: '30'}],
    }
  },
  //Todo: 测试时删除，请求到数据时要恢复
  // created() {
  //   this.userID = this.$route.params.userID
  //   this.getMyGoodsData()
  // },
  methods: {
    getMyGoodsData() {
      getMyGoodsData(this.userID).then(res => {
        this.goodsList = res;
      })
    },
  }
}
</script>

<style scoped>

</style>