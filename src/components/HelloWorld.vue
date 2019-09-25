<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> Front- End Developer</h2>
    <router-link class="link" to="/about">
      <label>
        <input type="radio" class="nes-radio is-dark" name="answer-dark" checked/>
        <span class="link"> PRESS START </span>
      </label>
    </router-link>
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
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
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
