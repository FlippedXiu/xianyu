<template>
  <div class="search">
    <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="search(input)">搜索</el-button>
    <GoodsList :goods="showGoods"/>
  </div>
</template>

<script>
import axios from "@/network/axios";
import GoodsList from "@/components/content/goods/GoodsList";
import {getHomeGoods, getSearchGoods} from "@/network/home";

export default {
  name: "search",
  data() {
    return {
      input: '',
      goods: {
        'result': [],
      },
      cur: 'result',
    }
  },
  methods: {
    search(input) {
      getSearchGoods(input).then(res => {
        //console.log(res)
        this.goods[this.cur].push(...res)
        console.log(this.goods)
        //this.$refs.scroll.finishPullUp()
      })
    },
    back() {
      this.$router.replace('/myGoods');
    },
  },
  computed: {
    showGoods() {
      //TODO
      return this.goods[this.cur]
    },
  },
  components: {
    GoodsList,
    axios,
  },
}
</script>

<style scoped>

</style>