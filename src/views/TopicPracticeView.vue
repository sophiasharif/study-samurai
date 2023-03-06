<template>
  <div>
    <h1>topic practice</h1>
    <div id="dropdown-div">
      <topic @generateTopic="updateQuestionSpec"></topic>
      <button @click="generateQuestion" class="button">GENERATE</button>
    </div>
    <div v-if="questionLoaded">
      <Suspense>
        <MultipleChoiceQuestion :questionObject="question" />
        <template #fallback> generating a practice question... </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion.vue";
import { getQuestionsBySubtopic, getQuestionsByUnit } from "@/composables/firebaseFunctions";
import { ref } from "vue";
import topic from '@/components/SubTopicSelect.vue'

const question = ref({});
const questionLoaded = ref(false);
const subunit = ref(null);
const unit = ref('1');

function generateQuestion() {
  if (subunit.value) {
    getQuestionsBySubtopic(subunit.value).then((res) => {
      const index = Math.floor(Math.random()*res.length)
      question.value = res[index];
      questionLoaded.value = true;
    });
  } else if (unit.value) {
    getQuestionsByUnit(Number(unit.value)).then((res) => {
      const index = Math.floor(Math.random()*res.length)
      question.value = res[index];
      questionLoaded.value = true;
    });
  }
}
function updateQuestionSpec(unitNumber, selectedSubtopic) {
  console.log("updated");
  subunit.value = selectedSubtopic;
  unit.value = unitNumber;
}
</script>

<style scoped>
  topic {
    margin: 20px;
  }

  #dropdown-div {
    display: inline;
    padding: 20px;
  }
</style>
