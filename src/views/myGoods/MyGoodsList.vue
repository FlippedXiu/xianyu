<template>
  <div class="cart-goods-list">
    <cart-goods-list-item :product="item" v-for="(item,i) in goods" :key="i" @remove='remove(i)'></cart-goods-list-item>
  </div>
</template>

<script>
import CartGoodsListItem from './MyGoodsListItem'
export default {
  name: "CartGoodsList",
  components: {
    CartGoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    remove(index) {
      this.goods.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>