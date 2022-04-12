<template>
  <div class="detail-info">
    <div class="detail-desc">{{detailInfo}}</div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: String,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.detail-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.detail-desc {
  padding: 0 15px;
}
</style>