<script setup>
//生命周期函数的使用
//引入函数
import { onMounted } from 'vue'
//执行函数  传入回调
onMounted(() => {
    console.log('页面加载完成，onMounted执行')
//已经有的业务逻辑，不敢动
})
onMounted(() => {
    console.log('页面加载')
//自己补充的业务逻辑
})
</script>

<template>
    <div>

    </div>
</template>
