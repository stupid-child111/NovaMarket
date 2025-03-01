<script setup>
//这个配置项只做联想提示
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <el-button type="primary" disabled>Primary</el-button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
