## 选项式api 和 组合式api
  - 代码量变少
  - 分散式维护转为集中式维护
  - 更好的数据响应式 proxy

## setup 语法糖(封装好)

  Vue SFC Playground
  vue--> js


## reactive ref 函数

ref 具有 .value属性
ref 函数内部实现依赖与reactive函数

## 计算属性函数 computed
  filter 函数

  不应该有副作用 例如 异步请求 修改DOM
  计算属性应该为只读，避免直接修改属性值
  交给 watch 处理

## watch 函数
  使用 监听一个或者多个数据变化，数变化时立即执行回调函数
  额外参数
    -  immediate 立即执行
       在监听器创建时立即触发一次回调函数，响应式数据发生变化时也会触发回调函数
    -  deep 深度监听
       watch 函数默认只监听数据的引用变化，不会监听数据内部属性的变化
             浅层监听，直接修改嵌套的对象属性，不会触发回调函数
       可以通过设置 deep 选项为 true 来监听数据内部属性的变化

       对象有多个属性，进行精确监听
       直接写两个回调函数
       
## 生命周期
setup-->onBeforeMount-->onMounted-->onBeforeUpdate-->onUpdated-->onBeforeUnmount-->onUnmounted
导入生命周期函数  执行生命周期 传入回调
可以执行多次，传入的回调在时机成熟时依次执行


## 父子通信

  -  子传父
  父组件给子组件绑定属性
  子组件内部通过props接受属性
  引入子组件-->绑定属性-->通过**defineProps**"编译器宏"接受子组件传递的数据
  编译器宏：编译器在编译阶段的标识，被编译器发现后，进行特定转换
  -  父传子
  父组件给子组件通过@(v-on)绑定事件
  子组件内部通过**defineEmits**"编译器宏"接受父组件传递的事件
  子组件通过$emit函数触发事件

  **子传父和父传子两个一起就报错？？？？**


## 模板引用
  通过ref标识获取真正的dom对象或者组件实例对象 

  **组件挂载完毕后才能使用**

  defineExpose()
  默认情况下setup语法糖**组件内部的属性和方法不开放**给父组件访问，可以通过defineExpose编译器宏**指定属性或者方法允许访问**


## provide 和 inject

  顶层组件向任意的底层组件传递数据和方法，实现跨层组件通信
  顶层 provide 提供数据 provide('key',顶层组件中的数据) key作为数据的标识
  底层 inject 获取数据  const msg = inject('key')

  业务：底层组件直接修改顶层组件数据
  单项数据流规则 谁的数据谁负责修改
