<template>
  <Swiper>
    <SwiperItem v-for="(item, id) in banners" :key="id" >
      <a :href="item.link"><img :src="item.image" alt="" @load="imageLoad()" ></a>
    </SwiperItem >
  </Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'

export default {
  components: {
    Swiper, 
    SwiperItem 
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad(){
      if(!this.isLoad) {
        this.$emit("swiperImageLoad")
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>
