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
  <select name="Topics" id="button">
        <option value="">-- Select a Topic --</option>
        <option v-for="topic in topic" :key="topic.id" class="topics" :value="topic.name">{{ topic.name }}</option>
        <option value="custom">Custom</option>
        </select>
</template>

<script setup>

      
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion.vue";
import { getQuestionsBySubtopic } from "@/composables/firebaseFunctions";
import { ref } from "vue";
import topic from '@/components/TopicSelect.vue'

const question = ref({});
const questionLoaded = ref(false);
getQuestionsBySubtopic("orthogonality").then((res) => {
  question.value = res[0];
  questionLoaded.value = true;
});
</script>

<style scoped></style>
