<script setup>
import { inject } from 'vue';
const roomMsg = inject('key');

const count = inject('count-key');
const setCount = inject('set-count');
</script>

<template>
    <div>
        <div>来自顶层组件的数据--{{ roomMsg }}</div>
        <div>来自顶层组件的响应式数据--{{ count }}</div>
        <button @click="setCount">点击增加</button>
    </div>
</template>

<style lang="scss" scoped>

</style>