<template>
  <div class="skills">
    <Avatar></Avatar>
    <p> x 1</p>
    <TechSkills></TechSkills>
    <SoftSkills></SoftSkills>
  </div>
</template>

<script>
import Avatar from "../components/Avatar";
import SoftSkills from "../components/SoftSkills"
import TechSkills from "../components/TechSkills"

export default {
  name: 'skills',
  components:{
    Avatar,
    SoftSkills,
    TechSkills,
  }
}
</script>

<style scoped>
.skills{
  display: flex;
  flex-flow: column;
  /* border: 5px dotted yellow; */
  justify-content:space-around;
}

.nes-container.is-dark{
  margin: 2rem 0;
}

Avatar{
  width: 80vh;
  height: 80vh;
}
</style>
