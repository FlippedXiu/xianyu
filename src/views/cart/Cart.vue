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
import {getCartData} from "@/network/myGoods";
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "Cart",
  components: {
    CartBottom,
    NavBar,
    CartGoodsList,
  },

  data() {
    return {
      id: this.cartGoodsList.iid,
      goodsList: this.cartGoodsList,
    }
  },

  computed: {
    ...mapGetters(['cartGoodsList'])
  },
  methods: {
    pay() {
      //TODO DONE: URL需要修改
      axios({
        url: '/cart/',
        methods: "post",
        contentType: "application/json",
        data: {
          cartGoodsList: this.goodsList,
        },
        params: {
          id: this.id,
        },
      }).then(res => {
        console.log(res);
      })
    },
  }
}
</script>

<style scoped>

</style>