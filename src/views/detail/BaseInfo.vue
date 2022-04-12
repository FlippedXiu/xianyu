<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="price">{{goods.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  margin-top: 10px;
}

.info-price .price {
  font-size: 24px;
  color: var(--color-tint);
}

</style>