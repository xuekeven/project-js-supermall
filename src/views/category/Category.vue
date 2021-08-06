<template>
  <div class="wrapper">
    <ul class="content">
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
      <li>liebiao</li>
    </ul>
  </div>
</template>

<script>

import BScroll from 'better-scroll';

export default {
  data() {
    return {
      scroll : null,
    }
  },
  // 组件完成后调用
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType: 3,
      pullUpLoad: true
    });

    this.scroll.on('scroll', (position) => {
      console.log(position)
    });

    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
    });

  }
}

</script>

<style scoped>

.wrapper {
  height: 150px;
  background-color: red;

  overflow: hidden;
  /*overflow-y: scroll;*/
}

</style>