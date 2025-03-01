<script setup>
import { onMounted } from 'vue'
//1.导入use命名的方法
import { useCounterStore } from './stores/counter';
//2.执行方法得到store实例对象
const counterStore = useCounterStore();
console.log(counterStore)

onMounted(() =>{
  counterStore.getList()
})
</script>

<template>
  <div>
    <button @click="counterStore.increment">{{counterStore.count}}</button>
    {{ counterStore.doubleCount }}
    <ul>
      <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>