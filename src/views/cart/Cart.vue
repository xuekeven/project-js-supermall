 <template>
	<div id="cart">
		<NavBar class="cart-nav">
      <template #center>
        <span id="center">购物车({{cartlen}})</span>
      </template>
      <template #right>
        <span id="right" @click="chooseDel">{{text}}</span>
      </template>
    </NavBar>
		<CartList v-if="cartlen > 0"/>
    <div v-else id="else"><span>还没有选购商品哦，快去看看吧~</span></div>
		<CartBottomBar :word="word" @del="decideDel" />
    <WarningBox :showWarning="showDel">
      <template #message>
        <div class="message">确定要删除这些商品吗？</div>
      </template> 
      <template #choice>
        <div class="choice">
          <button @click="del">确定删除</button>
          <button @click="giveup">我再想想</button>
        </div>
      </template>  
    </WarningBox>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import WarningBox from 'components/common/warningBox/WarningBox'

import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'Cart',
  data() {
    return {
      toDel: false,
      showDel: false
    }
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    WarningBox
  },
  computed: {
    // 用法1：使用原标识符
    // ...mapGetters(['cartList', 'cartLength'])
    // 用法2：自定义标识符来使用
    ...mapGetters({
      cart: 'cartList',
      cartlen: 'cartLength'
    }),
    text() {
      return this.toDel ? "删除中..." : "开始删除"
    },
    word() {
      return this.toDel ? "删除" : "去结算" 
    }
  },
  methods: {
    ...mapMutations(['deleteCart']),
    chooseDel() {
      this.toDel = !this.toDel;
    },
    decideDel() {
      this.showDel = true;
    },
    del() {
      const length = this.cartlen;
      for (let i = length - 1; i > -1; i--) {
        if (this.cart[i].checked) this.deleteCart(i)
      }
      this.showDel = false;
      this.toDel = false;
    },
    giveup() {
      this.showDel = false;
      this.toDel = false;
    }
  }
}
</script>

<style scoped>
#cart {
  height: 100vh;
  position: relative;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
}
#center {
  position: absolute; 
  left: 50%; 
  transform: translate(-50%, 0)
}
#right {
  font-size: 14px;
}
#else {
  width: 100%;
  height: calc(100% - 44px - 49px - 50px);
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
.message {
  line-height: 400%;
}
.choice {
  display: flex;
  justify-content: space-around;
}
.warning-choice button {
  min-width: 60px;
  min-height: 30px;
  border-radius: 10px
}
</style>