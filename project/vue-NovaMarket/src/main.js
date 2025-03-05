import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
//引入初始化样式文件
import '@/styles/common.scss'

//引入懒加载指令插件并注册
import  lazyPlugin  from '@/directives'


const pinia = createPinia()


// //测试接口函数
// import {getCategory} from '@/apis/testAPI'
// getCategory().then(res=>{
//     // console.log(res)
// })

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(lazyPlugin)
app.mount('#app')
//定义全局指令

