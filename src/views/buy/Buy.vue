<template>
  <div id="buy">
    <nav-bar><div slot="center">购买记录</div> </nav-bar>
    <profile-buy></profile-buy>
  </div>
</template>

<script>
import NavBar from "@/components/common/navigationBar/NavBar";
import ProfileBuy from "@/views/buy/ProfileBuy";
export default {
  name: "Buy",
  components: {
    NavBar,
    ProfileBuy,
  }
}
</script>

<style scoped>

</style>