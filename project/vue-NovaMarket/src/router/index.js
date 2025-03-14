//createRouter:创建router实例对象
//createWebHistory:创建history模式的路由
import { createRouter,createWebHistory } from "vue-router";

import Login from "@/views/login/index.vue"
import Layout from "@/views/layout/index.vue"
import Home from "@/views/home/index.vue"
import Category from "@/views/category/index.vue"

import SubCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/detail/index.vue'

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    //配置path和component对应关系的位置 
    routes:[
        {
            path:"/",
            component:Layout,
            children:[
                {
                    //默认子路由，路由置空，默认页的组件也会渲染
                    //path:" ",错误写法
                    path:"",
                    component: Home
                },
                {
                    //动态路由传参
                    //动态路由传参
                    path:"category/:id",
                    component: Category
                },
                {
                    path:"category/sub/:id",
                    component: SubCategory
                },
                {
                    path: 'detail/:id',
                    component: Detail
                },
            ]

        },
        {
            path:"/login",
            component:Login
        },
    ],
    //路由滚动行为定制
    scrollBehavior(){
        return { top: 0}
    }
})

export default router