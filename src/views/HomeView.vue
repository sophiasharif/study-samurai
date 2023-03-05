<template>
    <div class="title">
      <div id="welcome">
        <h1>hello hello,</h1>
        <h3>i'm sam!</h3>
      </div>
      <img id="sam-img" src="@/assets/sam.svg" />
    </div>
    <form>
      <h2>what would you like to do today?</h2>
      <div class="radio-choices">
        <label>
          <input @click="setLink('/topic-practice')" type="radio" id="topic" name="choice" value="topicPractice" checked="checked">
          <span class="selection"></span>
          practice by topic
        </label>
        <label>
          <input @click="setLink('/exam-prep')" type="radio" id="exam" name="choice" value="examPrep">
          <span class="selection"></span>
          prep for my exam
        </label>
        <label>
          <input @click="setLink('/check-work')" type="radio" id="work" name="choice" value="checkWork">
          <span class="selection"></span>
          check my work
        </label>
      </div>
      <div id="submitButton">
        <a :href="link" class="button">GO!</a>
      </div>
    </form>
</template>

<script>
  export default {
    data() {
      return {
        link: '/topic-practice'
      }
    },
    methods: {
      setLink(link) {
        this.link = link;
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: center;
    margin: 50px;
  }

  #welcome {
    width: 300px;
    line-height: 0.5;
    text-align: right;
    padding: 30px 50px;
    margin-left: -100px;
  }

  #sam-img {
    width: 150px;
  }

  form {
    display: grid;
    place-items: center;
    margin: 60px;
  }

  .radio-choices {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 30px 25px 30px;
  }

  label {
    display: flex;
    align-items: center;
    color: var(--lightPurple);
  }

  input[type="radio"] {
    width: 16px;
    height: 16px;
    border-radius: 16px;
    border: 10px var(--lightPurple);
    background-color: var(--lightPurple);
    margin: 7px 10px;
  }
</style>