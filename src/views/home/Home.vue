<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">跳蚤市场</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <search></search>
      <home-recommend :recommends="recommends"/>
      <tab-control class="tab-control"
                   :titles="['title1', 'title2', 'title3']"
                   @tabClick="tabClick(index)"/>
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
  import axios from "@/network/axios";
  import App from "@/App";

  export default {
    name: "Home",
    data() {
      return {
        //result: null,
        recommends: null,//列表数据包括图片photo，文字name以及链接link
        //列表数据
        goods: {
          'title1': [],
          'title2': [],
          'title3': [],
        },
        index:1,
        currentType: 'title1',
        isShowBackTop: false,
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
    // Todo DONE: 测试时删除，请求到数据时要恢复
    created: function () {
      // 1.请求多个数据
      //this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('title1')
      this.getHomeGoods('title2')
      this.getHomeGoods('title3')
    },
    computed: {
      showGoods() {
        //TODO 改成从后端拿数据
        return this.goods[this.currentType];
      }
    },
    methods: {
      loadMore() {
        this.getHomeGoods(this.currentType)
      },

      tabClick(index) {
        // const flag = localStorage.getItem('index') === index;
        const i = localStorage.getItem('index')
        // if(localStorage.getItem('index') != index-1+''){
          switch (i) {
            case '0':
              this.currentType = 'title1'
              this.index = 1
              break
            case '1':
              this.currentType = 'title2'
              this.index = 2
              break
            case '2':
              this.currentType = 'title3'
              this.index = 3
              break
          }
      },

      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 2000
      },

      //创建home实例对象是就要请求后端数据，请求到的数据要根据实际情况拿
      getHomeMultidata() {
        // getHomeData1().then(res => {
        //   this.recommends = res.data.recommend.list;
        // })
      },
      getHomeGoods(t) {
        //TODO 请求主页商品信息
        axios.get('/item/getByType', {
          params: {
            type: t
          }
        }).then(function (response) {
          console.log("getHomeGoods:"+response);
          this.goods[t] = response;
        })
      },
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