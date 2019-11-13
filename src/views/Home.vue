<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/rompc.png">
    <HelloWorld msg="Mariela Torres"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
img{
  width: 50vw;
}
</style>