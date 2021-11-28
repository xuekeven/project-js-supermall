<template>
  <div class="warning" v-show="showWarning">
    <div class="warning-backdrop"></div>
    <div class="warning-body">
      <div class="warning-message"><slot name="message"></slot></div>
      <div class="warning-choice"><slot name="choice"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    "showWarning": {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.warning {
  display: block;
  width: 100%;
  height: 100%;
}
.warning-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0; 
  right: 0;
  bottom: 0;
  left: 0; 
}
.warning-body {
  position: fixed;
  top: 40%;
  right: 20%;
  bottom: 40%;
  left: 20%;
  background-color: #fff;
  text-align: center;
}
.warning-message, .warning-choice {
  height: 50%;
  width: 100%;
  position: relative;
}
</style>