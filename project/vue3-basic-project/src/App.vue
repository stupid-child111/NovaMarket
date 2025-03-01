<script setup>
import { onMounted, ref } from 'vue'
import Edit from './components/Edit.vue'
import axios from 'axios'
// TODO: 列表渲染
//思路：声明响应式数据list-->调用接口获取数据-->后端赋值list-->绑定到table组件上
const list = ref([]);
const getList = async () => {
  //接口调用
  const res = await axios.get('/list')
  //交给list
  list.value = res.data;
}
onMounted(() => {
  getList();
})
// TODO: 删除功能
//思路：点击删除按钮-->获取当前行的id-->通过id调用删除接口-->更新最新的列表
const onDel = async(id) =>{
  // console.log(id);
  await axios.delete(`/del/${id}`)
  getList()
}

// TODO: 编辑功能
//思路：点击编辑按钮-->弹出编辑框-->编辑框中显示当前行的数据-->修改数据-->调用编辑接口-->更新最新的列表
//思路：打开弹框-->回填数据-->更新数据
//1.打开弹框(获取子组件实例————>调用方法或者修改属性)
//(1)生成ref对象
//(2)绑定到子组件
const editRef = ref(0)


const onEdit = (row) =>{
  //事件发生的时候拿到子组件实例对象，调用open方法
  editRef.value.open(row)
}

//2.回调数据(显示出详情)  两种方法(调用详情数据 / 当前行的静态数据)
</script>

<template>
  <div class="app">
    <!-- 绑定到表单组件 -->
    <el-table :data="list">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name" width="150"></el-table-column>
      <el-table-column label="籍贯" prop="place"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button type="primary" @click="onEdit(row)" link>编辑</el-button>
          <el-button type="danger" @click="onDel(row.id)" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <Edit ref="editRef" @onUpdate="getList"/>
</template>

<style scoped>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>
