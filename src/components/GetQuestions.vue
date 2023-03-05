<template>
  <div>
    <ul>
      <li v-for="t in textbookSections" :key="t.id">
        <p>{{ t }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="question in questions" :key="question.id">
        <h3>Subtopic: {{ question.subtopic }}</h3>
        <p>Question: {{ question.question }}</p>
        <p>Ansewr: {{ question.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { db } from "../firebase/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import {getSubtopicsInUnit, getQuestionsBySubtopic} from '@/composables/firebaseFunctions'

const questionsColRef = collection(db, "questions");
const questions = ref([]);

getDocs(questionsColRef).then((snapshot) => {
  let docs = [];
  snapshot.docs.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  questions.value = docs;
});

console.log(await getQuestionsBySubtopic("orthogonality"))

const textbookSections = ref([]);
// getSubtopicsInUnit(1).then(res => {
//   textbookSections.value = res;
// })
</script>

<style scoped></style>
