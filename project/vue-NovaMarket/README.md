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