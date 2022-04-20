<template>
  <div class="goods-item" @click="itemClick">
<!--TODO：图片地址需要修改-->
    <img src="@/assets/img/home/recommend_bg.jpg" alt="">
    <div class="goods-info">
      <p>商品名称：{{goodsItem.title}}</p>
      <span class="price">价格：{{goodsItem.price}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        //需要编号iid，名称title，价格price
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      itemClick(index) {
        this.$router.push('/detail/' + this.goodsItem.iid)
      },
    },
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 80px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    height: 500px;
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    font-size: 24px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
    font-size: 24px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
