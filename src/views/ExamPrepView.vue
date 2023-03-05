<template>
  <div>
    <h1>Exam Prep</h1>
    <test-topics></test-topics>
    <practice-format-input></practice-format-input>
    <problem-response></problem-response>
  </div>
</template>

<script>
import TestTopics from '../components/TopicSelect.vue'
import PracticeFormatInput from '@/components/PracticeFormatInput.vue'
import ProblemResponse from '@/components/ProblemResponse.vue'
export default {
  components: {
    TestTopics,
    PracticeFormatInput,
    ProblemResponse
  }
}
</script>

<style>
/* add any custom styles here */
</style>
