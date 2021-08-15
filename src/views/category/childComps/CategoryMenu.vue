<template>
  <Scroll id="cate-left">
    <div id="cate-menu">
      <div class="menu-item" v-for="(item, index) in categories" :key="index"
          @click="itemClick(index)" :class="{active: index===currentIndex}">
        {{item.title}}
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  components: {
    Scroll
  },
  props: {
    categories: Array
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('selectItem', index)
    }
  }
}
</script>

<style scoped>
#cate-left {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 25vw;
  overflow: hidden;
  background-color: #f6f6f6;
}
#cate-menu {
  text-align: center;
}
.menu-item {
  height: 7vh;
  line-height: 7vh;
}
.menu-item.active {
  background-color: #fff;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
}
</style>