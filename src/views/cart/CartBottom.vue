<template>
  <div class="cart-bottom-bar">
    <div class="total-check">
      <!--      <img src="~assets/img/cart/tick.svg" alt="">-->
      <check-button :is-check="isSelectAll" @click.native="selectAllClick"></check-button>
      <span>全选</span>
    </div>
    <div class="delete-selected">
      <el-button class="warning" @click="deleteSelected">删除选中商品</el-button>
    </div>
    <div class="total-price">
      <span>合计：￥{{totalPrice}}</span>
    </div>
    <div class="calc" @click="pay">
      支付({{calcCount}})
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "CartBottom",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartGoods.filter(item => {
        return item.isCheck === true
      }).reduce((prev,item) => {
        console.log(item.price)
        console.log(item.count)
        return prev + item.price * item.count
      },0).toFixed(2)
    },
    calcCount() {
      return this.$store.state.cartGoods.filter(item => {
        return item.isCheck === true
      }).length
    },
    isSelectAll() {
      if(this.$store.state.cartGoods.length === 0) {
        return false;
      }
      return !(this.$store.state.cartGoods.filter(item => !item.isCheck).length)
    }
  },
  methods: {
    selectAllClick() {
      if(this.isSelectAll) {
        this.$store.state.cartGoods.forEach(item => item.isCheck = false)
      }else {
        this.$store.state.cartGoods.forEach(item => item.isCheck = true)
      }
    },
    pay() {
      alert("支付成功，可进入个人中心查询购买记录")
      this.$emit('pay')
    },
    deleteSelected(){
      //删除购物车选中商品
      this.$store.dispatch('deleteSelected').then(res => {
        console.log(res)
      });
    }
  }
}
</script>

<style scoped>
.cart-bottom-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 49px;
  background: #eeeeee;
  display: flex;
  line-height: 40px;
  text-align: center;
}
.total-check {
  width: 25%;
  display: flex;
  justify-content: center;
}
.total-price {
  width: 50%;
}
.calc {
  width: 25%;
  background-color: #ff5028;
  color:#fff;
}
</style>