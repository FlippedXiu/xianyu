<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="backHome">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div>商品详情</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navigationBar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    methods :{
      backHome() {
        this.$router.back()
      },
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #fff;
    color: #666666;
    box-shadow: 0px 1px #c0c0c0;
  }
  .center {
    display: flex;
  }
  .center > div {
    flex: 1;
  }
  .left {
    padding-top: 6px;
  }
  .active {
    color: var(--color-tint);
  }
</style>
