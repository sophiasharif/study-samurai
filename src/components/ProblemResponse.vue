<template>
  <div class="mathDisplay">
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
      textArray: [],
      equationsArray: [],
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

<style scoped>
.mathDisplay{
  display:inline-block;
}
</style>