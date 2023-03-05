<template>
  <div class="title">
    <div id="welcome">
      <h1>hello hello,</h1>
      <h3>i'm sam!</h3>
    </div>
    <img src="@/assets/sam.svg"/>
  </div>
  <div id="miniForm">
    <form>
      <h2>what would you like to do today?</h2>
      <div class="radioChoices">
        <label>
          <input type="radio" id="topic" name="choice" value="topicPractice" checked="checked">
          <span class="selection"></span>
          practice by topic
        </label>
        <label>
          <input type="radio" id="exam" name="choice" value="examPrep">
          <span class="selection"></span>
          prep for my exam
        </label>
        <label>
          <input type="radio" id="work" name="choice" value="checkWork">
          <span class="selection"></span>
          check my work
        </label>
      </div>
      <div id="submitButton">
        <input type="submit" class="button" value="GO!">
      </div>
    </form>
  </div>
  <div id="smallBlob" class="blob" width=20px height=30px></div>
  <div id="mediumBlob" class="blob" width=60px height=80px></div>
  <div id="largeBlob1" class="blob" width=200px height=240px></div>
  <div id="largeBlob2" class="blob" width=200px height=240px></div>
</template>

<script>
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: center;
    margin: 50px;
  }

  #welcome {
    width: 200px;
    line-height: 0.5;
    text-align: right;
    padding: 30px 40px;
  }

  img {
    width: 150px;
  }

  h3, p {
    color: var(--lightPurple);
  }

  h2 {
    margin: 0px;
  }

  form {
    display: grid;
    place-items: center;
  }

  .radioChoices {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 30px;
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
    margin: 5px;
  }

  .blob {
    position: absolute;   /* specify position! */
    background-color: white;
    border-radius: 10px;  /* probably will want this to be dynamic */
  }
</style>