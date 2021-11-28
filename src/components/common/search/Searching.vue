<template>
  <div class="searching">
    <ul class="searchingCompare">
      <li v-for="(item, index) in searchingCompare" :key="index"
        @click="searchChoice(item)">{{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['searchingCompare'],
  data() {
    return {
    }
  },
  methods: {
    searchChoice(mess) {
      this.$emit('searchChoice', mess)
    }
  }
}
</script>

<style scoped>
.searching {
  background-color: whitesmoke;
}
li {
  border-bottom: solid 1px gray;
  padding: 10px 5px;
}
</style>

