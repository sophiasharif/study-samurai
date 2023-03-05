<template>
  <div>
    <TestComponent/>
    <div>
    <div class="bg"></div>
    <!--<div class="bg-shade"></div>-->
    <div class="content">
      <div class="title">VueChat</div>
      <input class="username" type="text" v-model="username" placeholder="input username"/>
      <input class="password" type="text" v-model="password" placeholder="input password"/>
      <div class="login" @click="login()">login</div>
      <div class="bottom">
        <span class="clear"></span>
        <span class="register" @click="jumpRegister()">signup</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TestComponent from '@/components/TestComponent.vue'

export default {

  components: {
    TestComponent
  }
}
</script>

<style>

</style>
