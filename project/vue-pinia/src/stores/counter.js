//导入一个方法definestore
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('counter', () => {
    //定义数据(state)
    const count = ref(0)

    //定义修改数据的方法（action:支持同步和异步）
    // function increment() {
    //     count.value++
    // }
    const increment = () => {
        count.value++
    }
    //以对象的方式teturn供组件使用
    return {
        count,
        increment
    }
})  