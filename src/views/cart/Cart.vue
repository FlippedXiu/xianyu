<template>
  <div id="cart">
    <nav-bar><div slot="center">购物车</div> </nav-bar>
    <CartGoodsList></CartGoodsList>
    <cart-bottom @pay="pay"></cart-bottom>
  </div>
</template>

<script>
import NavBar from "@/components/common/navigationBar/NavBar";
import CartGoodsList from "@/views/cart/CartGoodsList";
import CartBottom from "@/views/cart/CartBottom";
import axios from "@/network/axios";
import {mapGetters} from "vuex";
import App from "@/App";
import {mapState} from "vuex";

export default {
  name: "Cart",
  components: {
    CartBottom,
    NavBar,
    CartGoodsList,
  },

  data() {
    return {
      uid: App.globalData.uid,
      goods:[],
    }
  },

  computed: {
    ...mapGetters(['cartGoodsList']),
  },
  methods: {
    pay() {
      //TODO DONE: URL需要修改
      this.goods.push(...this.cartGoodsList)
      axios.post('/sale/buy', {
        goods: this.goods,
        uid: this.uid,
      })
      this.goods.splice(0,this.goods.length)
    },

  }
}
</script>

<style scoped>

</style>