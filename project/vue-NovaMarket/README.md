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


    使用common.scss不适配
