<template>
  <div class="search">
    <el-input v-model="input" placeholder="请点击搜索按钮进入搜索界面" :disabled="true"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      input: '',
    }
  },
  methods: {
    search() {
      this.$router.replace('/search')
    },
  }
}
</script>

<style scoped>
.search {
  display: flex;
  height: 40px;
}
</style>