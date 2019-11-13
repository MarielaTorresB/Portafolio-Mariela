<template>
  <div class="skills">
    <div class="avatar">
      <Avatar></Avatar>
      <p> x 1</p>
    </div>
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
  flex-flow: column nowrap;
  /* border: 5px dotted yellow; */
  justify-content:space-around;
}

.nes-container.is-dark{
  margin: 2rem 0;
}

.avatar{
  order:0;
  border: 0px dotted red;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
  /* width: 50%;
  height: 50%; */
}


.tech-skills{
  order:2;
}

.soft-skills{
  order:3;
}

/* Avatar{
  width: 80vh;
  height: 80vh;
} */


@media screen and (min-width:900px) {
.skills{
  flex-flow: row wrap;
  justify-content: space-around;
  /* align-items: center; */
}

.soft-skills {
  align-self: flex-end;
  order:1;
}


}

</style>
