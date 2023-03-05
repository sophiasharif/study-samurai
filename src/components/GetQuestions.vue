<template>
  <div>
    <h3>Question:</h3>
    <p>{{ question }}</p>
    <h3>Solution:</h3>
    <p>{{ answer }}</p>
    <h3>Explanation:</h3>
    <p>{{ explanation }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getQuestionsBySubtopic } from "@/composables/firebaseFunctions";
import { generateCorrectAnswer } from "@/composables/chatGPTFunctions"

const question = ref("");
const answer = ref("waiting for chatGPT response...");


getQuestionsBySubtopic("dot product properties")
  .then((res) => {
    console.log(res);
    const questionObject = res[0];
    question.value = questionObject.question;

    generateCorrectAnswer(question.value).then(res => answer.value = res)
  })
</script>

<style scoped></style>
