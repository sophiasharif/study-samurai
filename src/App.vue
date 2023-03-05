<template>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/exam-prep">exam prep</router-link>
    <router-link to="/topic-practice">topic practice</router-link>
    <router-link to="/check-work">check work</router-link>
    <router-link to="/login" class="button">LOGIN</router-link>
  </nav>
  <router-view />
  <div id="smallBlob" class="blob"></div>
  <div id="mediumBlob" class="blob" width=60px height=80px></div>
  <div id="largeBlob1" class="blob" width=200px height=240px></div>
  <div id="largeBlob2" class="blob" width=200px height=240px></div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  nav {
    display: flex;
    padding: 30px;
    justify-content: flex-end;
    align-items: center;
  }

  nav a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    margin: 10px 20px;
  }

  nav a.router-link-exact-active {
    color: var(--lightPurple);
  }

  .blob {
    position: absolute; /* specify position! */
    background-color: white;
    border-radius: 10px; /* probably will want this to be dynamic */
    z-index: -1;
  }

  #smallBlob {
    left: 120px;
    top: 130px;
    width: 45px;
    height: 50px;
  }

  #mediumBlob {
    left: 57%;
    top: 170px;
    width: 150px;
    height: 180px;
  }

  #largeBlob1 {
    left: -50px;
    top: 550px;
    width: 500px;
    height: 400px;
  }

  #largeBlob2 {
    left: 1050px;
    top: 650px;
    width: 600px;
    height: 500px;
  }
</style>
