<script setup>
//defineProps接受数据不需要引入，可直接调用
//script中使用 new一个对象接收
// const props = defineProps({
//     message: String,
//     count: Number
// })

const emit = defineEmits(['get-son-message'])

const sendMessage = () => {
    emit('get-son-message', '子组件消息')
}
</script>

<template>
    <div class="son-com">
        <h3>这是子组件</h3>
        <!-- <h4>父组件传入的值--{{ message }}---{{ count }}</h4> -->
        <button @click = "sendMessage">发送父组件</button>
    </div>
</template>

<style scoped>

</style>
