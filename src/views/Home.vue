<template>
  <div class="home">
    <img class="color" alt="Vue logo" src="../assets/Chameleon.png">
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

@keyframes psycho {
  100%{
    filter:hue-rotate(360deg);
  }
}

.color{
  animation: psycho 3s linear infinite;
}
</style>