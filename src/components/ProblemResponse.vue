<template>
  <div>
      We can define the integral of a function with bounded support:
      <math-jax latex="\frac{x^2}{a^2}-\frac{y^2}{b^2}=1"></math-jax>
      <p>Here's a block of LaTeX:</p>
      <div>
        <math-jax :latex=formula :block="true"></math-jax>
      </div>
  </div>
  <div border-style="solid">
    <template v-for="(item,index) in this.textArray">
      <span>{{ item }}</span>
      <math-jax :latex="equationsArray[index]"></math-jax>
    </template>
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
      formula: "\\begin{align} \\int_a^b f(x), dx \\end{align}",
      textArray: ['Lorem ipsum ', ' dolor sit amet ', ' consectetur adipiscing elit '],
      equationsArray: ['\\frac{1}{2}x + 3y = 7', 'e^{i\\pi} + 1 = 0', 'a^2 + b^2 = c^2'],
      beginWithEquation : false
    };
  },
  components: {
    MathJax
  },props: {
    description: {
      type: String,
      required: true
    }
  },methods: {
    splitProblem(){
      const pattern = /(\$.*?\$)/g; // regex pattern to match LaTeX equations
      const parts = this.description.split(pattern); // split the description string
      this.textArray = parts.filter((part) => !part.match(pattern)); // filter out equations
      this.equationsArray = parts.filter((part) => part.match(pattern)).map((eq) => eq.slice(1, -1)); // filter out text
    }
  },created(){
    this.splitProblem();
  }
}
</script>
