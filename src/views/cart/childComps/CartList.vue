<template>
	<div class="cart-list">
    <Scroll class="context" ref="scroll">
		  <CartListItem v-for="(item, index) in cartList" :key="index" :itemInfo="item"/>
    </Scroll>
	</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem.vue'
import { mapGetters } from 'vuex';

export default {
  name: "CartList",
  components:{
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 50px);
}
.context {
  height: 100%;
  overflow: hidden;
}
</style>