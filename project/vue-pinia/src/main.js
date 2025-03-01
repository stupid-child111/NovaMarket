import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//1.导入createpinia
import { createPinia } from 'pinia'
//2.创建pinia实例
const pinia = createPinia()
//3.将pinia实例挂载到app上
createApp(App).use(pinia).mount('#app')
