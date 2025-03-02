<script setup>
//这个配置项只做联想提示，不会影响代码的编译
</script>

<template>
  <div>
    <!-- 一级路由出口 -->
    <RouterView />
    <!-- <div class="test">
      test  scss
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.test {
  color: $sucColor;
}
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
