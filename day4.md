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