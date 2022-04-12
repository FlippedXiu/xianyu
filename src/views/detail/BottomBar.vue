<template>
  <div class="detail-bottom-bar">
    <el-button class="cart" @click="addCart">加入购物车</el-button>
    <el-button class="buy">购买</el-button>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
</style>
