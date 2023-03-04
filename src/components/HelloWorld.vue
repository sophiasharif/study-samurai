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
      <button @click="generateProblem">Generate New Problem</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const client = axios.create({
  headers: {
    Authorization: "Bearer " + process.env.VUE_APP_OPENAI_API_KEY,
  },
});

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
    async generateProblem() {
      const params = {
        prompt:
          "I don't understand the following problem: Let f(u, v) = tan(uv3). Find the partial derivatives fu(u, v) and fv(u, v). What math concepts is it testing and what am I missing? Give me 3 more practice problems to test my understanding.",
        model: "text-davinci-003",
        max_tokens: 1000,
        temperature: 0.7,
      };

      try {
        const result = await client.post(
          "https://api.openai.com/v1/completions",
          params
        );
        this.problem = result.data.choices[0].text;
      } catch (error) {
        console.error(error);
      }
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
