<script setup>
import HomeCategory from './components/homeCategory.vue'
import HomeBanner from './components/homeBanner.vue'
import HomeNew from './components/homeNew.vue'
import HomeHot from './components/homeHot.vue'
import HomeProduct from './components/homeProduct.vue'
// import HomePanel from './components/homePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 测试面板组件 -->
   <!-- <HomePanel title="新鲜好物" sub-title="新鲜好物111">
    <div>111111111111111111111111</div>
   </HomePanel>
   <HomePanel title="人气推荐" sub-title="大大撒大苏打">
    <div>222222222222222222222</div>
  </HomePanel> -->
</template>