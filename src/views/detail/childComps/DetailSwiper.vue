<template>
  <Swiper class="deail-swiper">
    <SwiperItem v-for="(item, index) in topImages" :key="index">
      <a :href="item"><img :src="item" alt=""></a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.deail-swiper{
  height: 300px;
}
</style>