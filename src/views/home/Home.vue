<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </NavBar>
    <TabControl :titles="['流行', '新款', '精选']" @tabClick='tabClick'
                ref="tabControl1" class="tab-control" v-show="isTabFixed"/>
    <!-- 绑定ref可以准确拿取组件 -->
    <Scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true"
            @scroll="contentScroll" @pullingUp="loadMore()">
      <HomeSwiper :banners='banners' @swiperImageLoad="swiperImageLoad()"/>
      <RecommendView :recommends='recommends'/>
      <FeatureView/>
      <TabControl :titles="['流行', '新款', '精选']" @tabClick='tabClick' ref="tabControl2"/>
      <GoodsList :goods='goods[currentType].list'/>
    </Scroll>
    <!-- 可以监听元素，也可以监听组件 -->
    <BackTop @click.native="backTop()" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';
// import BackTop from 'components/content/backTop/BackTop';

import { getHomeMultidata, getHomeGoods } from 'network/home';
import { itemListenerMixin, backTopMixin } from 'common/mixin';

export default {
  name: 'Home',
  components: { 
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    // BackTop
  },
  mixins:[itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list:[]},
        'new': {page: 0,list:[]},
        'sell': {page: 0,list:[]}
      },
      currentType: 'pop',
      // isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    }
  },
  destroyed() {
    console.log('Home destroyed')
  },
  // 组件活跃生命函数
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  // 离开组件
  deactivated() {
    // 1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    // 2.取消全局事件的监听
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  // 组件创建完成
  created() {
    //获取数据
    this.getHomeMultidata();
    //获取数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  // 组件加载完成
  mounted() {
  },
  methods: {
    // 事件监听相关
    // debounce(func, delay) {
    //   let timer = null
    //   return function(...args) {
    //     if(timer) clearTimeout(timer)
    //     timer = setTimeout( () => {
    //       func.apply(this, args)
    //     }, delay)
    //   }
    // },
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 回顶部
    // backClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 1000)
    // },
    // 收集位置信息
    contentScroll(position) {
      // 判断BackTop是否显示
      // this.isShowBackTop = (-position.y) > 1000
      //  决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
      this.listenShowBackTop(position)
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      // this.$refs.scroll.scroll.refresh();
    },
    //获取tab-control的offsetTop
    swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        // console.log(this.$refs.tabControl2.$el.offsetTop)
      },
    // 网络获取数据相关
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* 在使用浏览器原生滚动时，为了让导航不随滚动，需要固定定位，脱离正常文档流。
  需设置z-inde，否则被轮播图覆盖，又需#home设置padding-top，否则影响轮播图显示 */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; */
}
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 1;
} */
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
}
/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
</style>