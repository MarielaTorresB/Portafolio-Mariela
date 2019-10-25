<template>
  <div class="project-container">
    <div class="card nes-container is-rounded">
      <img class="card-img-top"
        src="https://user-image.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png">
      <div class="card-body">
        <h5 class="card-title">MaskedPass</h5>
        <p class="card-text">MaskedPass es una aplicación web que permite cifrar y descifrar tus contraseñas por medio de cifrado césar. Construida con JS, HTML y CSS...</p>
        <a href="https://github.com/MarielaTorresB/MEX-008-Cipher" target="_blank" class="nes-btn is-primary">Ver en Github</a>
        <a href="https://marielatorresb.github.io/MEX-008-Cipher/src/"  target="_blank" class="nes-btn is-success">Demo</a>
      </div>
    </div>
    <div class="card nes-container is-rounded">
      <img class="card-img-top"
        src="https://user-image.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png">
      <div class="card-body">
        <h5 class="card-title">Proyecto Pokémon</h5>
        <p class="card-text">Una página web que permite visualizar la data de los 151 Pokémon de la región de Kanto; filtrarla, ordenarla y ver el porcentaje de pokemon de cada tipo que hay en la región</p>
        <a href="https://marielatorresb.github.io/MEX-Data-Lovers-008/"  target="_blank" class="nes-btn is-primary">Ver en Github</a>
        <a href="https://marielatorresb.github.io/MEX-Data-Lovers-008/src/"  target="_blank" class="nes-btn is-success">Demo</a>
      </div>
    </div>
    <div class="card nes-container is-rounded">
      <img class="card-img-top"
        src="https://user-image.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png">
      <div class="card-body">
        <h5 class="card-title">Sacbé</h5>
        <p class="card-text">Sacbé es una Red Social para el ciclista que busca mantenerse conectado, crear vínculos con otros ciclistas, mantenerse informado de eventos, rodadas, bloqueos, inundaciones, baches, etc. Es una SPA creada con JS, CSS, HTML y Firebase.</p>
        <a href="https://github.com/MarielaTorresB/MEX008-social-network"  target="_blank" class="nes-btn is-primary">Ver en Github</a>
        <a href="https://marielatorresb.github.io/MEX008-social-network/src/"  target="_blank" class="nes-btn is-success">Demo</a>
      </div>
    </div>
    <!-- <div class="card nes-container is-rounded">
      <img class="card-img-top"
        src="https://user-image.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png">
      <div class="card-body">
        <h5 class="card-title">Combdi</h5>
        <p class="card-text">Combdi es una web app diseñada para agilizar la toma de comanda en la antojería vegana "PanD'Monium". En esta ocasión realizamos el stack completo: MEVN (MongoDB, Express, Vue y Node) </p>
        <a href="https://github.com/MarielaTorresB/burger-queen-vue"  target="_blank" class="nes-btn is-primary">Ver en Github</a>
        <a href=""  target="_blank" class="nes-btn is-success">Demo</a>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'AllProjects',
}
</script>

<style scoped>
.project-container{
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: 1rem;
}

.nes-container.is-rounded{
  margin-top: 1rem;
}

</style>