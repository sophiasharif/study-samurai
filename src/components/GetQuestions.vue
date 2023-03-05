<template>
  <div>
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
import { collection, getDocs } from "firebase/firestore"

const colRef = collection(db, 'questions')
const questions = ref([]);


getDocs(colRef)
.then(snapshot => {
    let docs = []
    snapshot.docs.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id})
    })
    questions.value = docs;
})

</script>

<style scoped></style>
