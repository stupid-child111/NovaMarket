<script setup>
import LayoutNav from './components/layoutNav.vue';
import LayoutHeader from './components/layoutHeader.vue';
import LayoutFooter from './components/layoutFooter.vue';
</script>

<template>
        <!-- 顶部语义化 -->
         <LayoutNav />
        <!-- 头部导航 -->
        <LayoutHeader />
        <!-- 二级路由出口 -->
        <RouterView />
        <!-- 底部 -->
        <LayoutFooter />
</template>

<style lang="scss" scoped>

</style>
