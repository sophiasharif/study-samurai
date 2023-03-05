<template>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/exam-prep">exam prep</router-link>
    <router-link to="/topic-practice">topic practice</router-link>
    <router-link to="/check-work">check work</router-link>
    <router-link to="/login" class="button">LOGIN</router-link>
  </nav>
  <router-view/>
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
</style>
