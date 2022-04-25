<template>
  <div id="sell">
    <nav-bar class="sell-nav"><div slot="left" @click="back">返回</div><div slot="center">我是卖家</div></nav-bar>
    <div class="button">
      <div class="upload">
        <el-button type="primary" @click="upload">发布商品</el-button>
      </div>
      <div class="my-goods">
        <el-button type="primary" @click="myGoods">管理我的发布</el-button>
      </div>
    </div>
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
      this.$router.replace('/profile');
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
.button{
  margin-top: 50px;
  margin-left: 720px;
  align-items: center;
}

.upload {
  margin-bottom: 100px;
}

.my-goods{
  margin-left: -10px;
}
</style>