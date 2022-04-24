<template>
  <div>
    <nav-bar class="sell-nav"><div slot="center">我是卖家</div></nav-bar>
    <div class="upload" @click="upload">发布商品</div>
    <div class="my-goods" @click="myGoods">管理我的发布</div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navigationBar/NavBar";

export default {
  name: "Sell",
  components: {
    NavBar,
  },
  data() {
    return {

    }
  },
  methods: {
    back() {
      this.$router.replace('/home');
    },
    upload() {
      this.$router.replace('/upload');
    },
    myGoods() {
      this.$router.replace('/myGoods')
    },
  }
}
</script>

<style scoped>

</style>