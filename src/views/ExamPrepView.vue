<template>
  <div>
    <h1>Exam Prep</h1>
    <test-topics></test-topics>
    <practice-format-input @generate-test="handleGenerate"></practice-format-input>
    <problem-response v-if="this.isGenerated" ref="practice"></problem-response>
  </div>
</template>

<script>
import TestTopics from '../components/TopicSelect.vue'
import PracticeFormatInput from '@/components/PracticeFormatInput.vue'
import ProblemResponse from '@/components/ProblemResponse.vue'
export default {
  data(){
    return{
      isGenerated: false
    };
  },
  components: {
    TestTopics,
    PracticeFormatInput,
    ProblemResponse
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
</style>
