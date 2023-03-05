<template>
    <div>
        <p>{{ desc }}</p>
    </div>
    
</template>
  
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
    },
    
    props: {
      desc: {
        type: String,
        required: true,
      },
    },
  };
</script>