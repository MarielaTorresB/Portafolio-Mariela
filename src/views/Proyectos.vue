<template>
  <div class="proyectos">
    <h1>Proyectos</h1>
    <!-- <img src="https://memecreator.org/static/images/memes/5106228.jpg"> -->
    <AllProjects></AllProjects>
  </div>
</template>

<script>
import AllProjects from "@/components/AllProjects.vue";

export default {
  name:'proyectos',
  components:{
    AllProjects,
  }
}
</script>

<style scoped>

</style>