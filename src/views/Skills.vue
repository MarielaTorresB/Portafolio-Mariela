<template>
  <div class="skills">
    
      <img
      src="https://lh3.googleusercontent.com/sJw9YT9nujWrb7Ef9BBO468Lddc4wMWWDFRoFP6BJvAJBghh0Z5Z5TPMOdfA3YCqO-X213S87FpAb1xLkRSy-DhQLsJPWUTKXEJHbnYG3qSON6vlDgOm-FPRLtlpoSs8zdHN4cpECGtP0XNh-tnvuOIFYvRkJw9213iTEeMK5HBcVjfGY7OBmUbDtu06VSBKrn9rIUcy2V8rK-zPY13-zCYqtCun9EoBxxG32KFhXggikMQNunuSyj9UdkO6InHNC22n53lKZtwSWCJY6zUiu-XRdd4tPPI80ReDJ_KtCfM-n0htA7KJEvu9z2WE9SWvYGvcLED7RYwJoVRfuQkoYPzAGEnU7LyVUk4E64iKEkZ9SzIL3aDK3b8YcVkxcYiPhgSSUUuYFKNlI1n9p5ulkCFQIMO8BGWGDi_cwywFQFS7sylDr934eC5iTgznkwYw466H4txQuOM9VaxzKKY7KAmTjp6dVC1wXwJ1FQjz8YDWVW1zTfGYktA6EP8EZup9y2RYsUpoYQHuxShp2QgU7QsPN4jBBhFEewjps9q52t5kcKWn5xi1Iq86eqs6tHhBECmawUY8t3lHBfkoUZkyyvLLDuL6z3jEhVPfKfnIHIImYR7878yyCCrQZLn8zE5_yOSU6hDncoo_zgSEuURCus1XaXzIkQXGsqtn9iEE95cI-d8VoZqN8TuaMvJb-WzFO-4DxNKtaimx97mHyztDXc9zkjUs3ibns1zD3WCSAH_fWh4v=s96-no"
      width=30% height=30%>

    

  <aside class="nes-container is-dark with-title is-centered softskills">
      <p class="title">Soft Skills</p>
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
    </aside>


    <div class="hard-skills nes-container is-dark with-title is-centered">
      <p class="title">Habilidades</p>
      <table class="nes-table is-dark is-centered">
        <tr>
          <td>
            <p>Javascript <i class="nes-icon coin is-medium"></i></p>
          </td>
          <td>
            <p>CSS <i class="nes-icon coin is-medium"></i></p>
          </td>
        </tr>
        <tr>
          <td>
            <p>HTML <i class="nes-icon coin is-medium"></i></p>
          </td>
          <td>
            <p>Vue <i class="nes-icon coin is-medium"></i></p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Bootstrap <i class="nes-icon coin is-medium"></i></p>
          </td>
          <td>
            <p>Materialize <i class="nes-icon coin is-medium"></i></p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Git <i class="nes-icon coin is-medium"></i></p>
          </td>
          <td>
            <p>Github <i class="nes-icon coin is-medium"></i></p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Figma <i class="nes-icon coin is-medium"></i></p>
          </td>
          <td>
            <p>Marvel <i class="nes-icon coin is-medium"></i></p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Firebase <i class="nes-icon coin is-medium"></i></p>
          </td>
          <td>
            <p> MEVN <i class="nes-icon coin is-medium"></i></p>
          </td>
        </tr>
      </table>
    </div>


  </div>
</template>

<style scoped>
.skills{
  display: flex;
  flex-flow: column wrap;
  border: 5px dotted yellow;
  height: 100vh;
  justify-content:space-around;
  align-content: space-around;
}
aside{
  width: 40vw;
  height: 50vh;
  order: 0;
}

.nes-container.is-dark{
  background-color: black;
  
}

.nes-container.is-dark.with-title > .title{
  background-color: black;
}

aside p{
  text-align:start;
   /* border:5px solid blue; */
  display: flex;
  justify-content: space-between;
}

.nes-badge{
  margin: 1em;
}

a span {
  display:block;
}

.nes-badge span.is-primary:first-child, .nes-badge span.is-error:first-child{
  width:initial;
}

.nes-badge span.is-dark:first-child, .nes-badge span.is-success:first-child, .nes-badge span.is-warning:first-child  {
  width: initial;
}

table{
  border: 5px solid black;
}

table p {
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img{
  /* float: left; */
  border: 5px solid green;
  order:0;
}

/* img:after {
  content: "";
  display: table;
  clear: both; 
} */

.hard-skills{
  order:1;
  width: 45vw;
}

</style>
