<template>
  <div id="cart">
    <nav-bar><div slot="center">购物车</div> </nav-bar>
    <CartGoodsList></CartGoodsList>
  </div>
</template>

<script>
import NavBar from "@/components/common/navigationBar/NavBar";
import CartGoodsList from "@/views/cart/CartGoodsList";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartGoodsList,
  },
}
</script>

<style scoped>

</style>