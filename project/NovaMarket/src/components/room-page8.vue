<script setup>
import { provide,ref } from 'vue';
import RoomMsgItem from './room-msg-item8.vue';
//传递数据
provide('key','这是静态数据')

//传递响应式数据
const count = ref(0);
setTimeout(() => {
    count.value++;
}, 2000);
provide('count-key',count)


//传递方法(谁的数据谁负责修改)
const setCount = () => {
    count.value++;
}
provide('set-count',setCount)

</script>

<template>
    <div>
        <h2>祖组件</h2>
        <RoomMsgItem />
    </div>
</template>

<style lang="scss" scoped>

</style>