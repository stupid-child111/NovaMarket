// 相当于vue2 new Vue() 创建一个应用实例对象
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 1. 以App作为参数生产一个应用实例对象
// 2. 将实例对象挂载到id为app的元素上
//创建 + 挂载
createApp(App).mount('#app')
