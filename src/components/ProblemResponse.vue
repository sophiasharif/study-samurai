<template>
  <div>
      We can define the integral of a function with bounded support:
      <math-jax latex="\frac{x^2}{a^2}-\frac{y^2}{b^2}=1"></math-jax>
      <p>Here's a block of LaTeX:</p>
      <div>
        <math-jax :latex=formula :block="true"></math-jax>
      </div>
  </div>
</template>
  
<style>
  .mathjax {
    display: block;
  }
</style>


<script>
import { MathJax } from 'mathjax-vue3'
export default {
  data(){
    return{
      formula: "\\begin{align} \\int_a^b f(x), dx \\end{align}"
    };
  },
  components: {
    MathJax
  }
}
</script>
