<script setup>
//1.导入use命名的方法
import { useCounterStore } from './stores/counter';
//2.执行方法得到store实例对象
const counterStore = useCounterStore();
console.log(counterStore)
</script>

<template>
  <div>
    <button @click="counterStore.increment">{{counterStore.count}}</button>
  </div>
</template>

<style scoped>

</style>