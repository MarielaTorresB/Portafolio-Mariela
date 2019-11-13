<template>
  <div class="nes-container is-dark with-title is-centered soft-skills">
    <p class="title">Soft Skills</p>
    <div class="badge-container">
      <div class="badge red">
        <p class="red">Metodología Agile</p>
      </div>
      <div class="badge pink">
        <p class="pink">Autoaprendizaje</p>
      </div>
      <div class="badge orange">
        <p class="orange">Trabajo en equipo</p>
      </div>
      <div class="badge yellow">
        <p class="yellow">Adaptabilidad</p>
      </div>
      <div class="badge green">
        <p class="green">Solución de problemas</p>
      </div>
      <div class="badge blue">
        <p class="blue">Autogestión</p>
      </div>
      <div class="badge coral">
        <p class="coral">Trabajo en equipo</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items:center;
  margin: 0;
}

.nes-container {
  padding: 0.5rem 1rem;
}

.badge{
  padding: 0.5rem 1rem;
  margin:0.3rem;
  text-align: center;
  text-justify: 
}

.badge p{
  margin:0;
}

.nes-container.is-dark{
  background-color: black;
  
}

.nes-container.is-dark.with-title > .title{
  background-color: black;
}

.red{
  background-color:#e21a20; 
}

.blue{
  background-color: #209cee ;
}

.yellow{
  background-color: #f7d51d;
}

.green{
  background-color: #92cc41 ;
}

.coral{
  background-color: #e76e55;
}

.pink{
  background-color: #f199b1;
}

.orange{
  background-color: #fd8014;
}

@media screen and (min-width:900px) {
  .soft-skills {
    width: 50%;
    justify-self: flex-end;
  }
}

</style>