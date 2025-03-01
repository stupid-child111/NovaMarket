<script setup>
import { onMounted, ref } from 'vue';
import TestCom from './components/test-com7.vue';
//1.调用ref函数创建一个ref对象
const h1Ref = ref(null);

const comRef = ref(null);

//(1)组件进行挂载完毕之后才能获取(操作)dom元素
onMounted(() => {
    console.log(h1Ref.value);
    //获取组件实例对象
    console.log(comRef.value);
});
</script>

<template>
    <div>
        <!-- 通过ref标识绑定ref对象 -->
        <h1 ref = "h1Ref">我是dom标签1 </h1>
        <TestCom ref="comRef"/>
    </div>
</template>
