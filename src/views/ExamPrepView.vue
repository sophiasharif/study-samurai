<template>
  <div>
    <h1>Exam Prep</h1>
    <test-topics></test-topics>
    <practice-format-input @generate-test="handleGenerate"></practice-format-input>
    <problem-response v-if="this.isGenerated" ref="practice"></problem-response>
  </div>
  <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
  <a href="#">Linear Algebra</a>
  <a href="#">Analysis</a>
  <a href="#">Multivariable Differentiation</a>
  <a href="#">Multivariable Integration</a>
  <a href="#">Integrability</a>
  <a href="#">Change of Variables</a>
  </div>
</div>
</template>

<script>
import TestTopics from '@/components/TopicSelect.vue'
import PracticeFormatInput from '@/components/PracticeFormatInput.vue'
import ProblemResponse from '@/components/ProblemResponse.vue'
import TextMath from '@/components/TextAndMath.vue';

export default {
  data(){
    return{
      isGenerated: false
    };
  },
  components: {
    TestTopics,
    PracticeFormatInput,
    ProblemResponse,
    TextMath
  }, methods:{
    handleGenerate(numProblems, numTime){
      console.log(numTime + "-minute problem set generated with" + numProblems + " problems");
      this.$refs.practice;
      this.isGenerated = true;
    }
  }

}
</script>

<style>
/* add any custom styles here */
.dropbtn {
  background-color: #926bc9;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #2f1a5d;
}



</style>
