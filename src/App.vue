<template>
  <nav>
    <router-link to="/" id="logo-div">
      <img id="logo-img" src="@/assets/katana.svg" />
      <div id="logo-text">
        <h4>study samurAI</h4>
        <h5>with your good pal sam!</h5>
      </div>
    </router-link>
    <div id="page-links">
      <router-link to="/">home</router-link>
      <router-link to="/exam-prep">exam prep</router-link>
      <router-link to="/topic-practice">topic practice</router-link>
      <router-link to="/check-work">check work</router-link>
      <router-link to="/login" class="button">LOGIN</router-link>
    </div>
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
    justify-content: space-between;
  }

  #logo-div {
    display: flex;
    align-items: center;
  }

  #logo-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  #logo-text h4 {
    font-size: 22px;
    margin: 5px 0px;
  }

  #logo-text h5 {
    margin: 0px;
  }

  #logo-img {
    width: 40px;
    justify-self: start;
    margin: 0px 15px;
  }

  #page-links {
    display: flex;
    padding: 30px;
    justify-content: flex-end;
    align-items: center;
  }

  #page-links a {
    margin: 10px 20px;
  }

  #page-links a.router-link-exact-active {
    color: var(--lightPurple);
  }

  .blob {
    position: absolute; /* specify position! */
    background-color: white;
    border-radius: 10px; /* probably will want this to be dynamic */
    z-index: -1;
  }

  @keyframes animateCW {
    from {
      -webkit-transform: rotate(0deg) translateX(5px) rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg) translateX(5px) rotate(-360deg);
    }
  }

  #smallBlob {
    left: 300px;
    top: 260px;
    width: 45px;
    height: 50px;
    animation: animateCCW 12s linear infinite;
  }

  #mediumBlob {
    left: 57%;
    top: 170px;
    width: 150px;
    height: 180px;
    animation: animateCW 16s linear infinite;
  }

  #largeBlob1 {
    left: -50px;
    top: 550px;
    width: 500px;
    height: 400px;
    animation: animateCW 30s linear infinite;
  }

  #largeBlob2 {
    left: 1050px;
    top: 680px;
    width: 600px;
    height: 500px;
    animation: animateCCW 40s linear infinite;
  }

  @keyframes animateCCW {
    from {
      -webkit-transform: rotate(0deg) translateX(5px) rotate(0deg);
    }

    to {
      -webkit-transform: rotate(-360deg) translateX(5px) rotate(360deg);
    }
  }
</style>
