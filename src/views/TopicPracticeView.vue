<template>
  <div>
    <h1>Topic Practice</h1>
    <select name="Topics" id="button">
      <option value="">-- Select a Topic --</option>
      <option
        v-for="topic in topic"
        :key="topic.id"
        class="topics"
        :value="topic.name"
      >
        {{ topic.name }}
      </option>
      <option value="custom">Custom</option>
    </select>
    <button @click="generateQuestion">Generate Question</button>
    <div v-if="questionLoaded">
      <Suspense>
        <MultipleChoiceQuestion :questionObject="question" />
        <template #fallback> Generating a practice question... </template>
      </Suspense>
    </div>
  </div>
  <topic></topic>
</template>

<script setup>
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion.vue";
import { getQuestionsBySubtopic, getQuestionsByUnit } from "@/composables/firebaseFunctions";
import { ref } from "vue";
import topic from '@/components/SubTopicSelect.vue'

const question = ref({});
const questionLoaded = ref(false);
const subunit = ref(null);
const unit = ref(null);

getQuestionsBySubtopic("orthogonality").then((res) => {
  question.value = res[0];
  questionLoaded.value = true;
});


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
</script>

<style scoped></style>
