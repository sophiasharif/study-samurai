<template>
  <div>
    <h1>Topic Practice</h1>
    <topic @generateTopic="updateQuestionSpec"></topic>
    <button @click="generateQuestion">Generate Question</button>
    <div v-if="questionLoaded">
      <Suspense>
        <MultipleChoiceQuestion :questionObject="question" />
        <template #fallback> Generating a practice question... </template>
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

<style scoped></style>
