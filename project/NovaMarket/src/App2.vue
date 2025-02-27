<script setup>
// //导入函数
// import { reactive } from 'vue'

// //执行函数 传入一个对象类型的参数 变量接收
// const obj = reactive({
//     name: '张三',
//     age: 18,
//     address: '北京市'

// })
// const setAge = () => {
//     obj.age++
// }
//导入ref函数
import { ref } from 'vue'
//执行函数 传入参数(支持简单类型或者复杂对象类型) 变量接收
const count = ref(0)
console.log(count)
const setCount = () => {
    //脚本区域修改ref产生的响应式对象数据 必须通过.value属性
    count.value++
}
</script>

<template>
    <div>
        <h1>{{count}}</h1>
        <button @click="setCount">修改值</button>
    </div>
</template>


