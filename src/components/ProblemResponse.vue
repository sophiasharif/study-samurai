<template>
    <div>
      <p>Here's some inline LaTeX: $$e^{i\pi}+1=0$$</p>
      <p>Here's a block of LaTeX:</p>
      <div class="mathjax">
        $$
        \begin{align*}
        f(x) &= (x+a)(x+b) \\
             &= x^2 + (a+b)x + ab
        \end{align*}
        $$
      </div>
    </div>
  </template>
  
<style>
  .mathjax {
    display: block;
  }
</style>

<!--
<script>
import MathJax from 'mathjax';
export default {
  methods: {
    renderMathJax() {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    }
  },
  mounted() {
    this.renderMathJax();
  }
}
</script>
-->