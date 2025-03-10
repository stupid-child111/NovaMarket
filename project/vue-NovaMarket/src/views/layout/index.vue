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
         <!-- 添加独一无二的key，破坏复用机制。强制销毁重建 -->
        <!-- <RouterView  :key="$route.fullPath"/> -->
         <RouterView />
        <!-- 底部 -->
        <LayoutFooter />
</template>

<style lang="scss" scoped>

</style>
