<template>
  <div class="skills">
    <Avatar></Avatar>
    <SoftSkills></SoftSkills>
    <TechSkills></TechSkills>
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
  flex-flow: column wrap;
  border: 5px dotted yellow;
  /* height: 100vh; */
  justify-content:space-around;
  align-content: space-around;
}

/* aside{
  width: 40vw;
  height: 50vh;
  order: 0;
} */

.nes-container.is-dark{
  background-color: black;
  
}

.nes-container.is-dark.with-title > .title{
  background-color: black;
}

aside p{
  text-align:start;
   /* border:5px solid blue; */
  display: flex;
  justify-content: space-between;
}

.nes-badge{
  margin: 1em;
}

a span {
  display:block;
}



table{
  border: 5px solid black;
}

table p {
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img{
  /* float: left; */
  border: 5px solid green;
  order:0;
}

.hard-skills{
  order:1;
  width: 45vw;
}

</style>
