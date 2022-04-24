<template>
  <div class="detail-bottom-bar">
    <el-button class="cart" @click="addCart">加入购物车</el-button>
    <el-button class="buy" @click="buy">购买</el-button>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      alert("加入购物车成功")
      this.$emit('addCart')
    },
    buy() {
      alert("亲，请先加入购物车后在购物车界面购买哦")
    }
  }
}
</script>

<style scoped>
</style>
