<!-- <script setup>
import { ref,watch } from 'vue'
const count = ref(0)
const setCount = () => {
    count.value++
}
//watch监听单个数据源
//watch ref不需要.value 自动处理
watch(count, (newValue,oldValue) => {
    console.log('count值发生变化',oldValue,newValue)
})
</script>

<template>
    <div>
        <button @click="setCount">{{ count }}</button>
    </div>
</template> -->


<!-- <script setup>
//监听多个数据变化
import { ref,watch } from 'vue'
const count = ref(0)

const changeCount = () => {
    count.value++
}

const name = ref('张三')
const changeName = () => {
    name.value = '李四' 
}
//监听多个数据变化
watch(
    [count,name],
    ([newCount,newName],[oldCount,oldName]) => {
        console.log('count或者name的值发生变化',oldCount,newCount,oldName,newName)

})
</script> 

<template>
    <div>
        <button @click="changeCount">修改值{{ count }}</button>
        <button @click="changeName">修改名字{{ name }}</button>
    </div>
</template>
 -->


 <!-- <script setup>
 import { ref,watch } from 'vue'
const count = ref(0)
const setCount = () => {
    count.value++
}
//watch immediate:true立即执行
watch(count,() =>{
    console.log('count值发生变化')
},{
    immediate:true
})
 </script>

 <template>
    <div>
        <button @click="setCount">{{ count }}</button>
    </div>
 </template>
  -->

  <!-- <script setup>
  import { ref,watch } from 'vue'
 const state = ref({count:0})
 const changeState = () => {
     state.value.count++
 }
 //watch 深度监听
 watch(state,() =>{
     console.log('count值发生变化')
 },{
    deep:true
 })
  </script>
 
  <template>
     <div>
        <h1>{{ state.count }}</h1>
         <button @click="changeState">修改值</button>
     </div>
  </template>
   -->

   <script setup>
   import { ref,watch } from 'vue'
  const state = ref({count:0,name:'张三'})
  const changeState = () => {
      state.value.count++
  }
  const changeName = () => {
      state.value.name = '李四'
  }
  //watch 深度监听具体属性
  watch(
    () => state.value.name ,
    () => console.log('name值发生变化'),
  {
     deep:true
  })
   </script>
  
   <template>
      <div>
         <h1>{{ state.count }}</h1>
            <h1>{{ state.name }}</h1>
          <button @click="changeState">修改值</button>
          <button @click="changeName">修改名字</button>
      </div>
   </template>