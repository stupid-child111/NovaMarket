<script>
export default {
  
}
</script>
<script setup>
const message = 'Hello Vue 3.0'
const logmessage = () => {
  console.log(message)
}
</script>
<template>
  <div>
    <h1>{{message}}</h1>
    <button @click="logmessage">Log Message</button>
  </div>
</template>

<style scoped>

</style>