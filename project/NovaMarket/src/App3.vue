<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

const list = ref([1, 2, 3, 4, 5,6,7,8])
const getList = computed ( () => {
    return list.value.filter(item => item > 2)
})
setTimeout(() => {
    list.value.push(100)
}, 3000);
</script>

<template>
    <div>
        <h1>{{list}}</h1>
        <h1>{{getList}}</h1>
    </div>
</template>

