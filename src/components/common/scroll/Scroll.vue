<template>
  <!-- 绑定ref可以准确拿取元素 -->
  <div class="wrapper" ref="wrapper">
    <!-- Better-Scroll使用时只能用于一个元素，所有还需要再包装一个元素 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  components:{
    BScroll
  },
  // 从父组件获得数据，以确保需要并开启功能
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 1.创建BScroll对象。使用ref可以准确拿取元素
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      // 从父组件获得数据，以确保需要并开启功能
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
        // console.log(this.scroll)
      })
    }

    // 3.监听上拉加载更多事件
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    // 回顶部
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // 刷新
    refresh() {
      // console.log("------")
      this.scroll && this.scroll.refresh()
    },
    // 完成上拉
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    // 获取离开时位置以便复原
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>
