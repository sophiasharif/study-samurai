<template>
  <div>
    <h2>{{ question }}</h2>
    <ul>
      <li v-for="(answer, index) in answers" :key="index">
        <input
          type="radio"
          :id="'answer-' + index"
          :value="answer"
          v-model="userAnswer"
        />
        <label :for="'answer-' + index">{{ answer }}</label>
      </li>
    </ul>
    <button @click="checkAnswer">Submit</button>
    <div v-if="isAnswered">
      <p v-if="isCorrect">Correct!</p>
      <div v-else>
        <p>Incorrect! The correct answer is {{ correctAnswer }}.</p>
        <div v-if="explanation">
            {{ explanation }}
        </div>
        <div v-else>
            generating feedback...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateMultipleIncorrectAnswers, generateIncorrectAnswerExplanation } from '@/composables/chatGPTFunctions';

export default {
  props: ["questionObject"],
  async setup(props) {
    const incorrectAnswers = await generateMultipleIncorrectAnswers(props.questionObject.question, props.questionObject.answer, 3)
    console.log(incorrectAnswers);
    return { incorrectAnswers };
  },
  data() {
    return {
      question: this.questionObject.question,
      correctAnswer: this.questionObject.answer,
      userAnswer: "",
      isAnswered: false,
      isCorrect: false,
      explanation: null
    };
  },
  computed: {
    answers() {
      let allAnswers = this.incorrectAnswers.concat(this.correctAnswer);
      return allAnswers.sort(() => Math.random() - 0.5);
    },
  },
  methods: {
    checkAnswer() {
      this.isAnswered = true;
      this.isCorrect = this.userAnswer === this.correctAnswer;
      if (!this.isCorrect) {
        generateIncorrectAnswerExplanation(this.question, this.correctAnswer, this.userAnswer).then(res => {
            console.log(res)
            this.explanation = res;
        })
      }
    },
  },
};
</script>

<style scoped>
/* add any necessary CSS styles here */
</style>
