<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">跳蚤市场</div></nav-bar>
    <search></search>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-recommend :recommends="recommends"/>
<!--    TODO: 这里需要根据标题修改title-->
      <tab-control class="tab-control"
                   :titles="['title1', 'title2', 'title3']"
                   @tabClick="tabClick"/>
      <GoodsList :goods="showGoods"/>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navigationBar/NavBar";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";

  import {getHomeData1, getHomeGoods} from "@/network/home";

  import search from "@/views/home/search";
  import HomeRecommend from "@/views/home/HomeRecommend";

  export default {
    name: "Home",
    data() {
      return {
        //result: null,
        recommends: null,//列表数据包括图片photo，文字name以及链接link
        //列表数据
        goods: {
          //TODO：此处的，名称需要和TabBarControl中的title对应
          'title1': {page: 0, list: [{title: "test1", price: "30$"}]},
          'title2': {page: 0, list: []},
          'title3': {page: 0, list: []},
        },
        currentType: 'title1',
        isShowBackTop: false
      }
    },
    components: {
      NavBar,
      search,
      HomeRecommend,
      TabControl,
      GoodsList,
      Scroll,
    },
    // created: function () {
    //   // 1.请求多个数据
    //   this.getHomeMultidata()
    //
    //   // 2.请求商品数据
    //   this.getHomeGoods('title1')
    //   this.getHomeGoods('title2')
    //   this.getHomeGoods('title3')
    // },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      loadMore() {
        this.getHomeGoods(this.currentType)
      },

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'title1'
            break
          case 1:
            this.currentType = 'title2'
            break
          case 2:
            this.currentType = 'title3'
            break
        }
      },

      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },

      //创建home实例对象是就要请求后端数据
      getHomeMultidata() {
        getHomeData1().then(res => {
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }

</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>