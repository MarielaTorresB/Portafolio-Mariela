<template>
  <div id="app">
    <div id="nav" class="nes-container is-rounded is-dark">
      <router-link class="link" to="/">Inicio </router-link>|
      <router-link class="link" to="/about">Sobre mí</router-link>|
      <router-link class="link" to="/skills">Habilidades</router-link>|
      <router-link class="link" to="/proyectos">Proyectos</router-link>|
      <router-link class="link" to="/contacto">Contacto</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
    text-align: center;
    color: white;
  }

  * {
    background-color: black;
  }

  #nav {
    padding: 30px;
    margin: 2%;
  }

  #nav a {
    font-weight: bold;
    color: #c4bac3;
  }

  #nav a.router-link-exact-active {
    color: #423383;
  }

  /* Esto es para poner el fondo negro en las vistas  */
  #app {
    background-color: black;
    height: 100vh;
  }

  .is-dark {
    background-color: black;
  }



  html,
  body,
  pre,
  code,
  kbd,
  samp {
    font-family: "Press Start 2P";
  }

  body {
    background-color: black;
  }

  .container {
    background-color: black;
  }

  .link:hover {
    text-decoration: none;

  }

</style>
