<template>
  <div>
    <app-header></app-header>
    <Nuxt/>
  </div>
</template>

<script>
import Header from '@/components/common/Header'

export default {
    components:{
        appHeader:Header,
    }
}
</script>

<style>

</style>