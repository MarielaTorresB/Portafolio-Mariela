<template>
  <div class="nes-container is-dark with-title is-centered">
    <p class="title">Soft Skills</p>
    <div class="badge-container">
      <div class="each-badge">      
        <a href="#" class="nes-badge">
        <span class="is-dark">Metodología Agile</span>
        </a>
      </div>
     <div style="clear: both"></div>
      <div class="each-badge"> 
      <a href="#" class="nes-badge">
        <span class="is-primary">Autoaprendizaje</span>
      </a>
      </div>
      <div style="clear: both"></div>
      <div class="each-badge">
      <a href="#" class="nes-badge">
        <span class="is-success">Trabajo en equipo</span>
      </a>
      </div>
      <div style="clear: both"></div>
      <div class="each-badge">
      <a href="#" class="nes-badge">
        <span class="is-warning">Adaptabilidad</span>
      </a>
      </div>
      <div style="clear: both"></div>
      <div class="each-badge">
      <a href="#" class="nes-badge">
        <span class="is-error">Solución de problemas</span>
      </a>
      <
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<style scoped>
span {
  border: 5px dotted yellow;
  display: block;
}

.nes-badge {
  border: 5px solid green;
  margin:0 5 rem;
}

/*Haciendo que el badge se adapte al texto*/
.nes-badge span.is-primary:first-child,
.nes-badge span.is-error:first-child,
.nes-badge span.is-dark:first-child,
.nes-badge span.is-success:first-child,
.nes-badge span.is-warning:first-child {
  width: initial;
}

.badge-container {
  background-color: bisque;
  display: flex;
  flex-flow: row wrap;
  border:   thick solid #000;
  overflow: auto;
}

.nes-container {
  padding: 0.5rem 0.1rem;
  width: 100%;
  height: 100%;
}

.each-badge{
  margin: 0 1rem;
}

</style>