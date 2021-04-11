<template>
  <div>
    <app-header></app-header>
    <div class="container mt-5">
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header"

export default {
  // array içinde sıralama önemli
  middleware: ["session-control","auth"],
  components:{
    appHeader:Header
  }
}
</script>

<style>

</style>