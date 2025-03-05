import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
//引入初始化样式文件
import '@/styles/common.scss'

import { useElementBounding, useIntersectionObserver } from '@vueuse/core'

const pinia = createPinia()


// //测试接口函数
// import {getCategory} from '@/apis/testAPI'
// getCategory().then(res=>{
//     // console.log(res)
// })

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
//定义全局指令
app.directive('img-lazy', {
    mounted(el,binding){
        //el:指令绑定的哪个元素 img
        //binding:  常用binding.value 指令等于号后面绑定的表达式的值  图片url
        console.log(el,binding.value)
        useIntersectionObserver(
            el,
            ([{isIntersecting}]) => {
                console.log(isIntersecting)
                if(isIntersecting){
                    //进入视口区域
                    el.src = binding.value
                }
            }
        )
    }
});
