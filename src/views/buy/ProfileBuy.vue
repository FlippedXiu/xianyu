<template>
  <div class="buy-goods-list">
    <profile-buy-item :product="item" v-for="(item,i) in goods" :key="i"></profile-buy-item>
  </div>

</template>

<script>
import ProfileBuyItem from "@/views/buy/ProfileBuyItem";

export default {
  name: "ProfileBuy",
  components: {
    ProfileBuyItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },

}
</script>

<style scoped>

</style>