<template>
  <div>
    <h1>Exam Prep</h1>
    <test-topics></test-topics>
    <practice-format-input @generate-test="handleGenerate"></practice-format-input>
    <div class="problemBox">
      <problem-response></problem-response>
      <text-math v-if="this.isGenerated" :desc="'Given that $||\\bm{u}|| = 1$, $||\\bm{v}|| = 3$, and $\\bm{u} \\cdot \\bm{v} = 2$, evaluate the expression $2\\bm{u} \\cdot (3\\bm{u} - \\bm{v})$.'"></text-math>
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
.problemBox{
  border-style: solid;
  border-width:2pt;
}
</style>
