<template>
  <div class="cart-goods-list">
    <cart-goods-list-item :product="item" v-for="(item,i) in goods" :key="i" @remove='remove(i)'></cart-goods-list-item>
  </div>
</template>

<script>
import CartGoodsListItem from './MyGoodsListItem'
import axios from "@/network/axios";
import App from "@/App";
export default {
  name: "CartGoodsList",
  components: {
    CartGoodsListItem,
  },
  data() {
    return {
      uid: App.globalData.uid
    }
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
      let tempiid = this.goods[index].iid;
      this.goods.splice(index, 1);
      axios.post('/item/delete', {
        iid: tempiid,
        uid: this.uid
      })
    }
  }
}
</script>

<style scoped>

</style>