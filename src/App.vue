<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  created() {
    if (sessionStorage.sessionCartList) {
      this.$store.commit('getSessionStorage')
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/base.css";
@import "~@/assets/css/buttons.css";
</style>