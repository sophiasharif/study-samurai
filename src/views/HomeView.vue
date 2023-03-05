<template>
  <div>
    <TestComponent/>
    <div>
    <div class="bg"></div>
    <!--<div class="bg-shade"></div>-->
    <div class="content">
      <div class="title">Study Samurai</div>
      <input class="username" type="text" v-model="username" placeholder="input username"/>
      <input class="password" type="text" v-model="password" placeholder="input password"/>
      
      <div class="bottom">
        <span class="clear"></span>
        <button @click="login()">Login</button>
        <button @click="jumpRegister()">Register</button>
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
      // 判断用户名和密码是否正确
      const res = await this.$store.dispatch('login', data)
      if (res.status === 'success') {
        const userInfo = {
          userId: res.data.userId,
          nickname: res.data.nickname,
          headPic: res.data.headPic
        }
        // 保存用户名到Vuex
        this.$store.commit('setUserinfo', userInfo)
        setItem('userInfo', userInfo)
        Alert({content: res.data.stateText}).then((data) => {
          this.$router.push({name: 'Group'})
        })
      } else {
        Alert({content: res.data.stateText})
      }
    },
    jumpRegister() {
      // 跳转到注册页面
      this.$router.push({name: 'Register'})
    }
  },
  components: {
    TestComponent
  }
}
</script>

<style>

</style>
