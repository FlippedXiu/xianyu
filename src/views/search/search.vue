<template>
  <div class="search">
    <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
    <GoodsList :goods="showGoods"/>
  </div>
</template>

<script>
import axios from "axios";
import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "search",
  data() {
    return {
      input: '',
      goods: [],
    }
  },
  methods: {
    search() {
      //TODO: url需要根据后端进行修改
      axios.post('http://localhost:9090/item/search', {
        input: this.input,
      }).then(res => {
        this.goods = res;
      })
    }
  },
  computed: {
    showGoods() {
      //TODO
      return this.goods
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