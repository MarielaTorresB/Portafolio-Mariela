<template>
  <div class="nes-container is-dark with-title is-centered">
    <p class="title">Habilidades</p>
    <div class="skills-container">
      <div class="skill">
        <p>Javascript <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>CSS <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>HTML <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>Vue <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>Bootstrap <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>Materialize <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>Git <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>Github <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>Figma <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>Marvel <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>Firebase <i class="nes-icon coin is-medium"></i></p>
      </div>
      <div class="skill">
        <p>MEVN <i class="nes-icon coin is-medium"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TechSkills',
}
</script>

<style scoped>

.nes-container.is-dark{
  background-color: black;
  
}

.nes-container.is-dark.with-title > .title{
  background-color: black;
}

.nes-container{
  padding: 0.5rem 0.5rem;
}

.skills-container{
  display:flex;
  flex-flow: column nowrap;
  margin:0;
  text-align: end;
}

.skill{
  /* border: 5px dotted pink; */
}
</style>