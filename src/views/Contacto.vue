<template>
  <div class="contacto">
      <div class="dato"><a href="https://github.com/MarielaTorresB" target="_blank"><i class="nes-icon github is-medium"></i>Mariela Torres</a></div>
      <div class="dato"><i class="nes-icon gmail is-medium"></i><p> marielatorres<br>@protonmail.com</p></div>
      <div class="dato"><a href="www.linkedin.com/in/marielatorresb" target="_blank"><i class="nes-icon linkedin is-medium"></i>Mariela Torres</a></div>
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
  font-size: 0.7rem;
  margin: 0.5rem;
  padding: 0.5rem;
}

.dato {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem;
}

.dato a {
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

</style>

