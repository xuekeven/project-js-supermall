<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: '我是弹窗'
    }
  },
  methods: {
    show(message, duration = 1500) {
      this.isShow = true;
      this.message = message;
      setTimeout(()=> {
        this.isShow = false
        this.message = '我是弹窗'
      },duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgba(0,0,0,.8);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%,-50%);
  color:#fff;
  z-index: 99;
}
</style>