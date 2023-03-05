<template>
  <div>
    <h3>Question:</h3>
    <p>{{ question }}</p>
    <h3>Correct Answer:</h3>
    <p>{{ correctAnswer }}</p>
    <h3>ChatGPT's Solution:</h3>
    <p>{{ answer }}</p>
    <h3>Incorrect answer:</h3>
    <p>{{ incorrectAnswer }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getQuestionsBySubtopic } from "@/composables/firebaseFunctions";
import { generateCorrectAnswer, generateMultipleIncorrectAnswers, generateIncorrectAnswer } from "@/composables/chatGPTFunctions"

const question = ref("");
const correctAnswer = ref("waiting for firebase...");
const answer = ref("waiting for chatGPT response...");
const incorrectAnswer = ref("generating incorrect answers...");

let questionObject = {}

getQuestionsBySubtopic("orthogonality")
  .then((res) => {
    console.log(res);
    questionObject = res[0];
    question.value = questionObject.question
    correctAnswer.value = questionObject.answer;

    console.log(questionObject)
    generateCorrectAnswer(questionObject.question).then(res => answer.value = res)
    generateMultipleIncorrectAnswers(questionObject.question, questionObject.answer, 3).then(res => incorrectAnswer.value = res)
    // generateIncorrectAnswer(questionObject.question, questionObject.answer, ['12', '1']).then(res => incorrectAnswer.value = res)
  })
</script>

<style scoped></style>
