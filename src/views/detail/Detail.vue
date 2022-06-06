<template>
  <div id="detail">
      <DetailNavBar></DetailNavBar>
      <img class="img" src="../../assets/img/home/recommend_bg.jpg" alt="">
      <base-info :goods="goodsInfo"></base-info>
      <shop-info :shop="shopInfo"></shop-info>
      <detail-info :detail-info="detailInfo"></detail-info>
      <BottomBar @addCart = "addCart"></BottomBar>
  </div>
</template>

<script>
  import {getDetailData,Goods,Shop} from "@/network/detail";
  import axios from "@/network/axios";
  import App from "@/App";
  import NavBar from "@/components/common/navigationBar/NavBar";

  import BaseInfo from "@/views/detail/BaseInfo";
  import ShopInfo from "@/views/detail/ShopInfo";
  import DetailInfo from "@/views/detail/DetailInfo";
  import BottomBar from "@/views/detail/BottomBar";
  import DetailNavBar from "@/views/detail/DetailNavBar";
  import Scroll from "@/components/common/scroll/Scroll";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImage: "",
        goodsInfo:{title: 'test1', desc: 'good', price: '30'},
        shopInfo:{},
        detailInfo: "hello",
        currentIndex:0
      }
    },
    components: {
      NavBar,
      BaseInfo,
      ShopInfo,
      DetailInfo,
      BottomBar,
      DetailNavBar,
      Scroll
    },
    // TODO DONE：请求到数据时要请这里的注释恢复，将静态数据删除
    created() {
      this.iid = this.$route.params.iid
      this.getDetailData()
    },
    methods: {
      //TODO：获取页面信息，此处所有的请求为模拟请求，需要修改
      getDetailData() {
        getDetailData(this.iid).then(res => {
          console.log(res)
          //const data = res.result;
          //获取顶部图片
          this.topImage = res.image_addr
          //获取商品基本信息
          const goodsInfo = {
            title:res.name,
            desc:'',
            price:res.price
          }
          this.goodsInfo = new Goods(goodsInfo)
          console.log("goodsInfo: "+this.goodsInfo)
          //获取店铺信息,默认为空对象
          const shopInfo = {
          }
          this.shopInfo = new Shop(shopInfo)
          //商品详细信息
          this.detailInfo = res.description;
        })
      },

      addCart() {
        const product = {};
        product.image = this.topImage;
        product.title = this.goodsInfo.title;
        product.desc = this.goodsInfo.desc;
        product.price = this.goodsInfo.price;
        product.iid = this.iid;

        //将商品添加购物车里 vuex
        this.$store.dispatch('addCart',product).then(res => {
          console.log(res)
        });
      }
    },
  }
</script>

<style scoped>
.img {
  height: 150px;
  width: 150px;
}
</style>