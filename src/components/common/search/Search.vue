<template>
  <div class="search">
    <input type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  watch: {
    message: function (now, old) {
      if (now !== old) {
        this.$emit("searchThink", this.message);
      }
    },
  },
};
</script>

<style scoped>
.search {
  position: relative;
  height: 44px;
}
input {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 30px;
}
</style>