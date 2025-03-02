import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//测试接口函数
import {getCategory} from '@/apis/testAPI'
getCategory().then(res=>{
    console.log(res)
})
createApp(App).mount('#app')
