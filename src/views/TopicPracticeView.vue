<template>
  <div>
    <h1>Topic Practice</h1>
    <div v-if="questionLoaded">
      <Suspense>
        <MultipleChoiceQuestion :questionObject="question" />
        <template #fallback> Loading suspended component... </template>
      </Suspense>
    </div>
    <div v-else>QUESTION LOADING</div>
  </div>
</template>

<script setup>
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion.vue";
import { getQuestionsBySubtopic } from "@/composables/firebaseFunctions";
import { ref } from "vue";

const question = ref({});
const questionLoaded = ref(false);
getQuestionsBySubtopic("orthogonality").then((res) => {
  question.value = res[0];
  questionLoaded.value = true;
});
</script>

<style scoped></style>
