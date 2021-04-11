<template>
  <div class="container mt-4">
    <div class="row">
      <button class="btn btn-danger w-50" @click="currentComponent='appHome'">Home</button>
      <button class="btn btn-success w-50" @click="currentComponent='appPage'">Page</button>
    </div>
    <transition
      enter-class=""
      enter-active-class="animated tada"
      leave-class=""
      leave-active-class="animated bounceOutRight"
      mode="out-in"
      appear
    >
      <component :is="currentComponent"></component>
    </transition>
  </div>
</template>

<script>
import Home from "./comps/Home"
import Page from "./comps/Page"

export default {
  data(){
    return {
      currentComponent : "appHome"
    }
  },
  components:{
    appHome : Home,
    appPage : Page
  }
}
</script>

<style>

</style>
