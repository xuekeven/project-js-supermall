<template>
  <Scroll id="cate-right"  ref="scroll">
    <div id="aaa" v-if="subcategories.list">
        <div class="item" v-for="(item, index) in subcategories.list" :key="index">
          <a :href="item.link">
            <img class="item-img" :src="item.image" alt="">
            <div class="item-text">{{item.title}}</div>
          </a>
        </div>
    </div>
  </Scroll> 
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import { itemListenerMixin, backTopMixin } from 'common/mixin';

export default {
  mixins:[itemListenerMixin, backTopMixin],
  components: {
    Scroll,
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
#cate-right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 75vw;
  overflow: hidden;
}
#aaa::before {
  display: block;
  height: 3vh;
  width: 75vw;
  content: '';
}
.item {
  display: inline-block;
  text-align: center;
  width: 25vw;
  height: 18vh;
  overflow: hidden;
  margin-bottom: 0;
}
.item-img {
  width: 80%;
}
.item-text {
  display: inline-block;
  margin-top: 1vh;
}
</style>