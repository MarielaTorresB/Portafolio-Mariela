<template>
  <div id="app">
    <div id="nav" class="nes-container is-rounded is-dark">
      <div class="logo-container" >
        <i class="snes-jp-logo" @click="toggleMenu()"></i>
      </div>
        <ul :class="{hidden: isHidden}" class="dropdown-content" >
          <li><router-link class="link" to="/">Inicio </router-link></li>
          <li><router-link class="link" to="/about">Sobre mí</router-link></li>
          <li><router-link class="link" to="/skills">Habilidades</router-link></li>
          <li><router-link class="link" to="/proyectos">Proyectos</router-link></li>
          <li><router-link class="link" to="/contacto">Contacto</router-link></li>
        </ul>
    </div>
    <router-view class="vistas" />
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
    background-color: black;
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
    /* height: 100vh; */
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

  .vistas {
    padding: 1rem;
  }

  /*Clase hidden: clase oculta*/
.hidden{
    display: none;
}

/*Estilo de la navbar*/
.navbar{
    padding: 1em;
    display:flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width:100%;
}

/*Contenedor del logo de hamburguesa*/
.logo-container{
    order:0;
    display: inline-block;
    cursor: pointer;
    position: absolute;
    left:0.5em;
    top:0.5em;
}

/*Estilo de los links del menú*/
.navbar.link {
    display:block;
    /* color:black; */
    text-decoration: none;
    position:relative;
    font-size: 17px;
    padding: 3em;
    
}

.dropdown-content{
    order:2;
    width: 80%;
    top:5rem;
    border:5px solid coral;
    /* margin-left: 2.5rem; */
    margin:0 auto;
    /* width:100%; */
    
}

ul li{
  margin:2rem 0;
  list-style-type: none;
}
/* .nes-container > :last-child{
  margin-left: 2.5rem;
} */


</style>



<script>
export default {
  name: "app",
  data(){
  return{
    isHidden:true,
  }
  },
  methods:{
    toggleMenu(){
      this.isHidden= !this.isHidden;
      return this.isHidden
    }
  }
}
</script>
