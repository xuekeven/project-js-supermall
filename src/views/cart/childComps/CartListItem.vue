<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :isChecked='itemInfo.checked' 
                  @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{itemInfo.price}}</div>
        <div class="item-count right">
          <button class="countButton" @click="dec(itemInfo)" :disabled="itemInfo.count <= 1">-</button>
          x{{itemInfo.count}}
          <button class="countButton" @click="add(itemInfo)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapMutations } from 'vuex'

export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    // 使用vuex的映射
    ...mapMutations(['addCounter','decCounter']),
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked;
    },
    dec(itemInfo) {
      // 使用vuex的映射，this.decCounter(itemInfo)相当于this.$store.commit('decCounter', itemInfo)
      this.$store.commit('decCounter', itemInfo)
      this.decCounter(itemInfo)
    },
    add(itemInfo) {
      // 使用vuex的映射，this.addCounter(itemInfo)相当于this.$store.commit('addCounter', itemInfo)
      this.addCounter(itemInfo)
    }
  }
}
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 8px;
  left: 5px;
  right: 5px;
  height: 3vh;
}
.info-bottom .item-price {
  color: orangered;
}
.info-bottom .countButton {
  width: 3vw;
  text-align:center;
}
</style>