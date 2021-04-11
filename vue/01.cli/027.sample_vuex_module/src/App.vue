<template>
  <div class="container">
    <div class="h1 text-center">
      VUEX
    </div>
    <hr>
    <app-present></app-present>
    <hr>
    <app-function></app-function>
  </div>
</template>

<script>
import Present from "./comps/Present"
import Function from "./comps/Function"

export default {
  components:{
    appPresent : Present,
    appFunction : Function
  }
}
</script>

<style>

</style>
