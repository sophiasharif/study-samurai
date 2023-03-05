<template>
  <div>
    <h1>Exam Prep</h1>
    <test-topics></test-topics>
    <practice-format-input @generate-test="handleGenerate"></practice-format-input>
    <problem-response :description="'$\\int_a^b f(x), dx$ denotes the integral from $a$ to $b$'" v-if="this.isGenerated" ref="practice"></problem-response>
    <p v-if="this.isGenerated">Type in your answer: {{ message }}</p>
    <input v-model="message" v-if="this.isGenerated" placeholder="your input" />
    <div id="submitButton">
        <a href="link" class="button" v-if="this.isGenerated">Look up the answer</a>
      </div>
  </div>
  


</template>

<script>
import TestTopics from '@/components/TopicSelect.vue'
import PracticeFormatInput from '@/components/PracticeFormatInput.vue'
import ProblemResponse from '@/components/ProblemResponse.vue'

export default {
  data(){
    return{
      isGenerated: false
    };
  },
  components: {
    TestTopics,
    PracticeFormatInput,
    ProblemResponse,
  }, methods:{
    handleGenerate(numProblems, numTime){
      console.log(numTime + "-minute problem set generated with" + numProblems + " problems");
      this.$refs.practice;
      this.isGenerated = true;
    }
  }

}
</script>

<style>
/* add any custom styles here */
.dropbtn {
  background-color: #926bc9;
  color: rgb(0, 0, 0);
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f900;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f100}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #2f1a5d;
}

#submitButton {
  margin: 20px;
}

</style>
