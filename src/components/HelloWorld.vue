<template>
  <div class="hello">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Samurai_with_sword.jpg"
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
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      problem: "",
    };
  },
  methods: {
    async test() {
      let res = await generateChatGPTResponse("Tell my a really funny joke!");
      this.problem = res;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
