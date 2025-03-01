<script setup>
//setup语法糖下局部组件不需要注册直接可以使用
import { ref } from 'vue';
import sonCom from './components/son-com.vue';

const count = ref(0);

const getMessage = (msg) => {
    console.log(msg);
}
</script>

<template>
    <div>
        <h2>父组件App</h2>
        <!-- 绑定属性 -->
        <!-- <son-com :count = count message = "father message"/> -->
        <son-com @get-son-message = "getMessage"/>
    </div>
</template>

