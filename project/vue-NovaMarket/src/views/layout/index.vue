<script setup>
import LayoutNav from './components/layoutNav.vue';
import LayoutHeader from './components/layoutHeader.vue';
import LayoutFooter from './components/layoutFooter.vue';
import LayoutFixed from './components/layoutFixed.vue';

//触发获取导航列表的action

import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>

<template>
        <!-- 顶部语义化 -->
         <LayoutFixed />
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
