## 编辑功能

  打开弹框-->回填数据-->更新数据
  (1)打开弹框:获取子组件实例  调用方法或者修改属性
     子组件定义方法
     组件中的属性和方法封闭通过**defineExpose**暴露出来

  (2)回填数据:调用详情接口 / 当前行的静态数据 
     父组件获取实参 子组件形参接收
     绑定到表单上 ，当前组件下的响应式数据
     模板区域进行双向绑定

  (3)更新数据 
     确认按钮绑定更新事件
     收集表单数据，调用接口-->关闭弹框-->通知父组件做列表更新
     通知父组件进行列更新：通过编译器宏defineEmits 

## pinia
  1.导入createpinia  2.创建pinia实例  3.将pinia实例挂载到app上

  1.导入一个方法definestore  2.定义数据(state)  3.定义修改数据的方法（action:支持同步和异步）  4.以对象的方式teturn供组件使用

  1.导入use命名的方法  2.执行方法得到store实例对象

  pinia中getters 直接使用computed函数进行模拟

## storeToRefs
  - 保持**数据(state + getter)**的响应式解构
    action不管
  解构后不用引用方法 counterStore.count
  直接解构赋值：const { count， doubleCount} = counterStore
  响应式丢失，视图不再更新
  方法包裹：cosnt { count， dlubleCount} = storeToRefs(cvonuterStore)
  保持数据响应式
  方法直接从原来的counterStore中解构赋值

别名路径联想提示
  **输入 @/ **，联想出src下所有的子目录和文件，统一文件路径访问不容易出错
  在根目录下新增jsconfig.json
  