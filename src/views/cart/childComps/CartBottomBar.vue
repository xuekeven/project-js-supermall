<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton class="check-botton" 
                  :isChecked="isSeclectAll"
                  @click.native="checkClick()"/><span>全选</span>
    </div>
    <div class="total-price">
      合计: {{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick()">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'

export default {
  name: "BottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList','cartLength']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
				return item.checked
      }).reduce((preValue, item) => {
        return preValue+ item.price * item.count
      },0).toFixed(2)
    },
    checkLength() {
			return this.cartList.filter(item => item.checked).length ;
		},
    isSeclectAll() {
      if (this.cartList.length === 0) return false
      // 1.
      // return !(this.cartList.filter(item => !item.checked).length)
      // 2.
      // return !this.cartList.find(item => !item.checked)
      // 3.
      for (let item of this.cartList) {
        if (!item.checked) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    checkClick() {
      if (this.isSeclectAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(this.cartList.length === 0) {
        this.$toast.show('还没有选购商品哦')
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 8vh;
  background-color: #eee;
  position: relative;
  line-height: 8vh;
  display: flex;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-botton {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.total-price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 90px;
  background: red;
  text-align: center;
  color: #eee;
}
</style>
