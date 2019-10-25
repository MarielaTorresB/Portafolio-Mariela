<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4> Front-End Developer</h4>
    <router-link class="link" to="/about">
      <label>
        <input type="radio" class="nes-radio is-dark" name="answer-dark" checked/>
        <span class="link"> PRESS START </span>
      </label>
    </router-link>
    <footer>
      <p>©2019 MarielaTorresB</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 1rem 0;
  }

  footer{
    margin: 2rem 0 0 0;
    padding: 0;
  }

  p{
    margin:0;
    padding:0;
  }

  .link {
    animation-name: animar;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes animar {
    0% {
      color: white;
    }

    50% {
      color: black;
    }

    100% {
      color: white;
    }
  }

</style>
