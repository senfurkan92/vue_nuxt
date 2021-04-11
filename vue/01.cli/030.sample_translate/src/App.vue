<template>
  <div class="container mt-2">
    <h3 class="w-100 text-center">Vue-Translator</h3>
    <app-paragraph></app-paragraph>
    <app-history></app-history>
  </div>
</template>

<script>
import History from './components/history/History'
import Paragraph from './components/paragraph/Paragraph'

export default {
  components:{
    appHistory:History,
    appParagraph: Paragraph
  }
}
</script>

<style>

</style>