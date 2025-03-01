<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia';
//1.导入use命名的方法
import { useCounterStore } from './stores/counter';
//2.执行方法得到store实例对象
const counterStore = useCounterStore();
// console.log(counterStore)
//直接解构赋值
// const { count, doubleCount } = counterStore
// console.log(count, doubleCount);

//方法包裹
const { count, doubleCount } = storeToRefs(counterStore)
console.log(count, doubleCount);

//方法直接从原来的counterStore中解构
const {increment} = counterStore

//触发action
onMounted(() =>{
  counterStore.getList()
})
</script>

<template>
  <div>
    <button @click="increment">{{count}}</button>
    {{ doubleCount }}
    <ul>
      <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>