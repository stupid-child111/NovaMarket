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