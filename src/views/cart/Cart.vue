<template>
	<div id="cart">
		<NavBar class="cart-nav">
			<template #center>购物车({{length}})</template>
		</NavBar>
		<CartList v-if="length > 0"/>
    <div id="else" v-else><span>还没有选购商品哦，快去看看吧~</span></div>
		<CartBottomBar/>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // 用法1：使用原标识符
    // ...mapGetters(['cartLength','cartList'])
    // 用法2：自定义标识符来使用
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    })
  }
}
</script>

<style scoped>
#cart {
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}
#else {
  height: calc(100% - 44px - 49px - 8vh);
  width: 100%;
  text-align:center;
}
#else ::after {
  display: inline-block;
  height: 100%;
  width: 0;
  content: ' ';
  vertical-align: middle
}
#else span {
  vertical-align: middle
}
</style>