// 把components中的所有组件都进行全局注册
//通过插件的方式
// import ImageView from '@/components/imageView/index.vue'
// import Sku from '@/components/NovamarketSku/index.vue'
import ImageView from './imageView/index.vue'
import Sku from './NovamarketSku/index.vue'

export const componentPlugin = {
    install(app){
        //app.component('组件名字'，组件配置对象)
        app.component('NovaMarketImageView',ImageView)
        app.component('NovaMarketSku',Sku)
    }
}