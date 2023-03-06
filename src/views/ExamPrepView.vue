<template>
  <div>
    <h1>exam prep</h1>
    <test-topics @generate-topics="updateTopics"></test-topics>
    <practice-format-input @generate-test="handleGenerate"></practice-format-input>
    <div v-if="isGenerated">
      <Suspense>
        <MultipleChoiceQuestion v-for="problem in practiceExam" :questionObject="problem"/>
        <template #fallback> generating practice exam... </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import TestTopics from '@/components/TopicSelect.vue'
import PracticeFormatInput from '@/components/PracticeFormatInput.vue'
import ProblemResponse from '@/components/ProblemResponse.vue'
import { getSubtopicsInUnit, getQuestionsByUnit } from '@/composables/firebaseFunctions';
import MultipleChoiceQuestion from '@/components/MultipleChoiceQuestion.vue';

export default {
  data(){
    return{
      isGenerated: false,
      problems: [],
      problemsGenerated: false,
      selectedUnits: [1],
      numProblems: 3,
      practiceExam: []
    };
  },
  components: {
    TestTopics,
    PracticeFormatInput,
    ProblemResponse,
    MultipleChoiceQuestion
}, methods:{
    async handleGenerate(){
      this.isGenerated = true;
      for (let i=0; i<this.selectedUnits.length; i++) {
        const res = await getQuestionsByUnit(this.selectedUnits[i])
        this.problems.push(...res)
      }

      for (let i=0; i<this.numProblems; i++) {
        const rand = Math.floor(Math.random()*this.problems.length);
        const q = this.problems.splice(rand, 1)[0]
        this.practiceExam.push(q)
      }

      console.log(this.practiceExam)

      this.problemsGenerated = true;
      
      this.$refs.practice;
      this.isGenerated = true;
    },
    updateTopics(selectedUnits){
      this.selectedUnits = selectedUnits;
    }
  }

}
</script>

<style>
/* add any custom styles here */
.dropbtn {
  background-color: #926bc9;
  color: rgb(0, 0, 0);
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
  background-color: #f9f9f900;
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

.dropdown-content a:hover {background-color: #f1f1f100}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #2f1a5d;
}

#submitButton {
  margin: 10px;
}

</style>
