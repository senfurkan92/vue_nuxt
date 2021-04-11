<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './comps/header/Header'

export default {
  components:{
    appHeader : Header
  }
}
</script>

<style>

</style>
