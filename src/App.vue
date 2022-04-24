<template>
  <div id="app" class="wrapper">
    <router-view/>
    <div v-if="notSellPage">
      <main-tab-bar></main-tab-bar>
    </div>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  },
  data() {
    return {
      notSellPage: true,
    }
  },
  watch: {
    $route(e) {
      this.notSellPage = e.path !== '/sell';
    }
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>

