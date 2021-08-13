<template>
	<div class="cart">
		<NavBar class="cart-nav">
			<template #center>购物车({{length}})</template>
		</NavBar>
		<CartList/>
		<CartBottomBar/>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { mapGetters } from 'vuex';
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // 用法1：
    // ...mapGetters(['cartLength','cartList'])
    // 用法2：
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}
</style>