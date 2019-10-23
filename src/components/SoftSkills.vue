<template>
  <div class="nes-container is-dark with-title is-centered">
    <p class="title">Soft Skills</p>
    <div class="badge-container">
      <a href="#" class="nes-badge">
        <span class="is-dark">Metodología Agile</span>
      </a>
      <a href="#" class="nes-badge">
        <span class="is-primary">Autoaprendizaje</span>
      </a>
      <a href="#" class="nes-badge">
        <span class="is-success">Trabajo en equipo</span>
      </a>
      <a href="#" class="nes-badge">
        <span class="is-warning">Adaptabilidad</span>
      </a>
      <a href="#" class="nes-badge">
        <span class="is-error">Solución de problemas</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
span{
    border: 5px dotted yellow;
    display:block;
    margin: 0 1rem;
}

 .nes-badge{
    display: inline;
} 

.nes-badge span.is-primary:first-child, .nes-badge span.is-error:first-child, .nes-badge span.is-dark:first-child, .nes-badge span.is-success:first-child, .nes-badge span.is-warning:first-child {
  width:initial;
}

.badge-container{
    background-color: bisque;
    display: flex;
    flex-flow: row wrap;
}

.nes-container{
    padding: 0.5rem 0.1rem;
}

</style>