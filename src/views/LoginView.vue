<template>
  <div>
    <TestComponent />
    <div>
      <div class="bg"></div>
      <!--<div class="bg-shade"></div>-->
      <div class="content">
        <div class="title">Study Samurai</div>
        <input class="username" type="text" v-model="username" placeholder="input username" />
        <input class="password" type="text" v-model="password" placeholder="input password" />
        <div class="bottom">
          <span class="clear"></span>
          <div id="submitButton">
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import TestComponent from '@/components/TestComponent.vue'
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login() {
        let data = {
          username: this.username,
          password: this.password
        }
        // ????????????
        const res = await this.$store.dispatch('login', data)
        if (res.status === 'success') {
          const userInfo = {
            userId: res.data.userId,
            nickname: res.data.nickname,
            headPic: res.data.headPic
          }
          // ??????Vuex
          this.$store.commit('setUserinfo', userInfo)
          setItem('userInfo', userInfo)
          Alert({ content: res.data.stateText }).then((data) => {
            this.$router.push({ name: 'Group' })
          })
        } else {
          Alert({ content: res.data.stateText })
        }
      },
      jumpRegister() {
        // ???????
        this.$router.push({ name: 'Register' })
      }
    },
    components: {
      TestComponent
    }
  }
</script>

<style>

</style>