<template>
  <div class="contacto">
    <div class="dato"><a href="https://github.com/MarielaTorresB" target="_blank"><i class="nes-icon github is-medium"></i>Mariela Torres</a></div>
    <div class="dato"><i class="nes-icon gmail is-medium"></i><div><p> marielatorres<br>@protonmail.com</p></div></div>
    <div class="dato"><a href="https://www.linkedin.com/in/marielatorresb/" target="_blank"><i class="nes-icon linkedin is-medium"></i>Mariela Torres</a></div>
    <div class="dato"><a class="cv" download="CV Mariela Torres" href="https://drive.google.com/uc?export=download&id=1NIHHQFQ_De5K5h3209khDnt7ozi9nsHP">Descargar CV</a></div>
  </div>
</template>

<script>
export default {
  name: 'contacto',
}
</script>

<style scoped>
.contacto {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 0px dotted blue;
}

.dato {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem;
  border: 0px dotted yellow;
  width:80%;
}

.dato a {
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.dato div {
  /* background-color: blueviolet; */
  padding-top: 1rem;
}

a.cv{
  justify-content: center;
}

@media screen and (min-width:500px) {
  .dato{
    width:50%;
  }
}

@media screen and (min-width:700px) {
  .dato{
    width:33%;
  }
}
</style>

