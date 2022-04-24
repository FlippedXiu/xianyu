<template>
  <div class="shop-info">
    <div class="shop-top">
      <img src="../../assets/img/profile/vip.svg">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="sells-count">好</div>
        <div class="sells-text">平台评价</div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr>
            <td>描述相符: 5.0       高</td>
            <td>描述相符: 5.0       高</td>
            <td>质量满意: 5.0       高</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
    <div class="shop-right">

    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  line-height: 45px;
  display: flex;
  align-items: center;
}

.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
  margin-left: 600px;
}

.shop-top .title {
  margin-left: 10px;
  vertical-align: center;
}

.shop-middle {
  margin-top: 15px;
  display: flex;
}


.shop-middle-left {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  align-items: center;
  margin-left: 500px;
}

.sells-count {
  font-size: 18px;
  font-weight: bolder;
}

.sells-text {
  margin-top: 6px;
  font-size: 16px;
  font-weight: bold;
}

.shop-middle-right {
  font-size: 20px;
  color: #333;

}

.shop-middle-right table {
  width: 200px;
  margin-left: 100px;
}

.shop-middle-right table  tr {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.shop-middle-right table td {
  padding: 3px 0;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>