<script setup>
// TODO: 编辑
import { ref } from 'vue'
import axios from 'axios'
// 弹框开关
const dialogVisible = ref(false)

//数据绑定到表单上，准备当前组件下的响应式数据
const form = ref({
  name: '',
  place: ''
})
//拿到实例，一般不直接修改属性而是通过调用方法(灵活通)
const open = (row) =>{
  // console.log(row)
  form.value.name = row.name
  form.value.place = row.place
  form.value.id = row.id

  //写完后，模板区域进行双向绑定
  //第二步回填数据完成
  dialogVisible.value = true
}
//组件和方法默认是封闭的，通过defineExpose暴露出去
defineExpose({
  open
})

//3. 更新数据
const emit = defineEmits(['onUpdate'])

const onUpdate = async() =>{
  //(1)收集表单数据 调用接口
  await axios.patch(`/edit/${form.value.id}`, {
  name: form.value.name,
  place: form.value.place,
  id: form.value.id
})
  //(2)关闭弹框
  dialogVisible.value = false
  //(3)通知父组件更新列表(子传父) 
  //调用编译器宏defineEmits
  emit('onUpdate')
  
}
</script>

<template>
  <el-dialog v-model="dialogVisible" title="编辑" width="400px">
    <el-form label-width="50px">
      <el-form-item label="姓名">
        <el-input placeholder="请输入姓名" v-model="form.name"/>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input placeholder="请输入籍贯" v-model="form.place"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onUpdate">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.el-input {
  width: 290px;
}
</style>
