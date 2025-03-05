项目额外目录
api API  --接口文件夹
composables  --组合函数文件夹
directives  --全局指令文件夹(hooks)
styles  --全局样式文件夹
utils  --工具函数文件夹

别名路径联想提示
  **输入 @/ **，联想出src下所有的子目录和文件，统一文件路径访问不容易出错
  在根目录下新增jsconfig.json
  {
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": ["./src/*"]
        }
    }
}

**jsconfig.json只做联想提示,只是让vscode有提示**

**vite.config.js进行了实际的路径转化将@转化为src**

ElmentPlus  负责通用型组件  Dialog模态框
手写  业务型定制化组件  商品热榜组件

引入组件库       安装-->配置按需引入-->测试组件(看官方文档)

**—D**只在开发环境依赖
(开发环境，生产环境)

## 为何需要主题定制
主题颜色冲突，通过定制颜色与项目保持一致

scss变量替换方案  安装scss(npm i sass -D)-->准备定制样式文件(styles/element/index.css)-->对ElementPlus样式进行覆盖(通知Element采用scss语言-->导入定制scss文件覆盖)

## axios基础配置
安装axios
创建基础实例(统一接口配置)减少各个接口重复定义配置，进行共享

uitls下基础封装(不挑项目都是如此)基地址，超时时间配置，请求和响应拦截器
apis 创建实例进行网络请求
-  如果项目不同业务模块需要接口基地址不同？
  axios.create()方法可以执行多次

## 路由设置
设置首页和登录页的路由(一级路由)
路由设置原则：找**内容整体切换**的

每一层路由都需要有路由出口

设计分类页和默认Home页路由(二级路由)
路由设置原则：如果是在**一级路由的内部切换**，则为二级路由


**mian.js没有引入router**
App.vue:2 
 [Vue warn]: Failed to resolve component: RouterView
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. 
  at <App>

  path: ""（空字符串）


**二级子路由问题**
path: "",
component: Home
行为：

当访问根路径 / 时，自动匹配该子路由

正确写法，符合 Vue Router 的默认子路由规范

Home 组件会渲染在 Layout 的 <router-view> 中

2. path: " "（空格）

path: " ",
component: Home
行为：

路由路径被显式设置为空格字符，需访问 / （带空格的 URL）才能匹配

实际无法通过正常访问触发（浏览器会自动去除 URL 中的首尾空格）

导致默认子路由失效，根路径 / 下不会渲染 Home 组件

## 静态资源和样式资源
  图片资源
  样式资源：通常指项目初始化的时候进行样式重置，开源的normalize.css或者手写

  资源操作
  图片资源-images文件夹放在爱上assets目录下
  样式资源-common.scss放在styles目录下

  main.js引入初始化静态资源文件
  error lens 实时提供错误警告信息的插件

  ## scss文件自动导入
  - 在项目中一些**组件共享的色值会以scss变量的方式统一放到一个名为var.scss**的文件中
  正常组件中使用，需要先导入scss文件，再使用内部变量，比较繁琐，**自动导入可以免去手动导入，直接使用内部变量**

  - 新增var.scss文件，存入色值变量
  - 通过vite.config.js配置自动导入文件(@use "@/styles/var.scss" as *;)

  common.scss报错
    Deprecation Warning [global-builtin]: Global built-in functions are deprecated and will be    removed in Dart Sass 3.0.0.
    Use color.adjust instead.

    此警告表明全局内置函数已经被弃用，在 Dart Sass 3.0.0 版本中会被移除。这里特别指出应该使用 color.adjust 函数来替代当前使用的函数。
    // 原代码
       color: darken(#6C5CE7, 10%);
    // 替换后
       color: color.adjust(#6C5CE7, $lightness: -10%);
    color.adjust 这类颜色相关的函数被封装在 **sass:color 模块中。开头导入**@use 'sass:color';



## layout静态模板搭建
    nav   header  二级路由出口区域  footer
    偏移移除main中引入的css样式
    使用common.scss不适配

## layout 字体图标的引入

客户服务 关注我们 空白 字体小图标未引入
引入阿里字体图标库 本项目采用 **font-class** 引用
1.拷贝按项目下生成的fontclass代码
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
2.挑选对应图标并获取类名，应用于页面
<i class="iconfont icon-user"></i>

## 一级导航渲染
  使用后端接口渲染以及路由导航
  使用接口文档封装接口函数  -->发送请求获取数据列表  -->  v-for渲染列表

## 吸顶导航交互实现
  - 浏览器上下滚动过程中，如果距离顶部的滚动距离大于78px，吸顶导航显示，小于78px隐藏
  准备吸顶导航组件 -->获取滚动距离 -->以滚动距离为判断条件控制组件盒

  show类名存在显示导航，不存在则不显示
  npm i @vueuse/core插件获取滚动距离**y**

## layout-Pinia优化重复请求
## layout-Pinia优化重复请求
## layout-Pinia优化重复请求
**加深记忆**
  首页两个导航列表完全一致，但是需要两次网络请求(layoutFixed 和 layoutHeader)
  pinia集中状态管理，再把数据给组件使用

## Home-整体结构搭建和分类实现
## homeBanner 轮播图功能实现
  - 准备模板 -->熟悉elementPlus相关组件 -->获取数据接口 -->渲染组件

  ncaught SyntaxError: The requested module '/src/utils/http.js' does not provide an export named 'httpInstance' (at home.js:1:10)
**导出（export）与导入（import）方式**不匹配导致

## home面板组件封装
  - 复用问题
  - 业务维护问题
   新鲜好物和人气推荐模块 结构非常相似，内容不同 通过组件封装实现复用结构的效果
   思路：把可复用的结构只写一次，把可能发生变化的部分抽象成组件参数(props/插槽)
   纯文本抽象成props
   主体内容为复杂模板抽象成插槽
   1.搭建纯静态内容，不管可变部分
   2.抽象可变部分为组件参数
     非模板 抽象为 props  模板  抽象为 插槽

## home页面新鲜好物实现
准备模板(homePanel组件)-->定制Props-->定制插槽内容(接口 + 渲染模版)

## 图片懒加载实现
场景：首页过长，用户不需要一进入就访问到页面靠下的图片，通过懒加载优化手段做到只有进入视口区域才发送图片请求
v-img-lazy熟悉指令语法-->判断视图是否进入(vueuse)-->测试图片监控是否有效-->
图片进入视口，发送图片资源请求(img.src = url)-->测试图片资源是否发出

## 懒加载指令优化
- 1.插件转移
懒加载指令写在入口文件中
  入口文件通常只做初始化，不该有太多逻辑代码，同通过插件的方法把懒加载指令封装为插件，main.js入口文件只需要

  **命名导出和默认导出的区别**使用自定义img-lazy指令时出现错误

- 2.重复监听
useIntersectionObserver 对于元素监听一直存在，除非手动停止监听，存在**内存浪费**
监听的内容第一次完成加载之后就停止监听
useIntersectionObserver 上存在 stop 方法 解构出来进行调用


## product 产品列表实现

熟悉并准备静态模板 --> 封装接口 --> 获取模板渲染数据 --> 图片懒加载

## 封装GoodsItem组件
-  多个业务模块使用到相同的商品展示模块，无需重复定义，封装起来，方便复用

对象的默认值  使用工厂函数进行返回
defineProps({
    goods:{
        type: Object,
        default:() => {}
    }
})
注意命名和使用时候的一致

## 一级分类开发-整体认识和路由配置

 //动态路由传参
  path:"category/:id",
 <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>

 ## 一级分类-面包屑导航渲染
  让用户知道现在处于网站的哪个地方

  准备组件模板 -->封装接口函数 -->调用接口获取数据(使用路由参数) -->渲染模板

  位置query 对应axios 为params


## 一级分类-banner轮播图实现

改造接口 --> 迁移首页轮播图逻辑
export function getBannerAPI(params = {}){
    const { distributionSite = '1' } = params
    return httpInstance({
        url:'/home/banner',
        params:{
            distributionSite
        }
    })
}

绝对定位溢出，修改

## 激活状态显示和分类列表渲染
激活状态显示指的是在用户界面中，突出显示当前处于活动或者被选中状态的元素。

RouterLink组件支持默认激活样式显示的类名，只需要给**active-class属性设置对应的类名(.active)**
active-class="active"
 
分类列表渲染是指将数据中的分类信息以一定的格式和布局呈现在用户界面上。
准备分类模板 --> v-for 遍历已有数据