<template>
  <div class="hello">
    <img
      src="@/assets/sam.svg"
      alt=""
    />
    <h1>EL STUDY SAMUR.AI</h1>
    <div>
      <h2>Calculus Problem:</h2>
      <p>{{ problem }}</p>
      <button @click="test">Generate New Problem</button>
    </div>
  </div>
</template>

<script>
import generateChatGPTResponse from "@/composables/generateChatGPTResponse"

export default {
  data() {
    return {
      problem: "",
    };
  },
  methods: {
    async test() {
      let res = await generateChatGPTResponse("Tell me a funny story");
      this.problem = res;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 400px;
}
</style>
