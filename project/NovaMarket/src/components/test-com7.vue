<script setup>
import { ref } from 'vue';
const name = ref('demo');
const changeName = () => {
    name.value = 'new demo';
}

defineExpose({
    name,
    changeName
})
</script>

<template>
    <div>
        <div>我是test组件</div>
    </div>
</template>
