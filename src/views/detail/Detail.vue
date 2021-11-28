<template>
  <div id="detail">
    <DetailNavBar  ref="nav" class="detail-nav" @titleClick="titleClick" />
    <Scroll class="content" ref="scroll" :probeType="3"  @scroll="contentScroll" >
      <DetailSwiper :topImages="topImages" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detail-info="detailInfo" @detailGoodsImageLoad='detailGoodsImageLoad' />
      <DetailParamInfo ref="param" :param-info="paramInfo" />
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo"/>
      <GoodsList ref="recommend" :goods="recommends"/>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowBackTop" />
    <DetailBottomBar @addToCart="addToCart" />
    <!-- <Toast :message='mess' :isShow='show'/> -->
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import { getDatail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
import { itemListenerMixin, backTopMixin } from "common/mixin"
import { debounce } from 'common/utils'
import { mapActions } from 'vuex'

export default {
  name: "Detail",
  mixins:[itemListenerMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    // Toast,
    GoodsList
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    }
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid
    //根据iid请求详情数据
    getDatail(this.iid).then(res => {
      const data = res.result
      console.log(res)
      //获取顶部的图片的轮播数据
      this.topImages.push(...data.itemInfo.topImages)
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //获取商铺信息
      this.shop = new Shop(data.shopInfo)
      //获取商品的详情数据
      this.detailInfo = data.detailInfo
      //获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //获取评论的信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    }, err => {
      console.log(err);
    })
    //请求详情页面推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
    this.getThemeTopY = debounce( () => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    }, 100)
  },
  mounted() {
		// 	//请求数据列表后刷新
		// 	this.itemImgLister = ()=> {
		// 		this.$refs.scroll.refresh();
		// 	}
		// 	this.$bus.$on('itemImgLoad',this.itemImgLister);
	},
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImgLister)
  },
  methods:{
    ...mapActions(['addCart']),
    detailGoodsImageLoad(){
      this.newRefresh()
      this.getThemeTopY()
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300)
    },
    contentScroll(position){
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for(let i = 0; i < length -1; i++) {
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          // console.log(i);
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      //是否显示回到顶部
      this.listenShowBackTop(position)
    },
    addToCart(){
      // console.log("添加到购物车");
      // 获取商品在购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.iid = this.iid
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      // console.log(product);
      // 将商品添加到购物车
      // this.$store.commit("addCart",product)
      // this.$store.dispatch("addCart",product).then(res => {
      //   console.log(res);
      // })
      // 使用vuex的映射
      this.addCart(product).then(res => {
        this.$toast.show(res, 2000)
      })
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 58px);
  overflow: hidden;
}
</style>
