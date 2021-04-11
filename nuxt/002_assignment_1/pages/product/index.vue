<template>
  <div class="container">
    <h1 class="w-100 text-center">Ürün Seçimi</h1>
    <p class="text-center">Ürünü id ile seçiniz</p>
    <app-link/>
  </div>
</template>

<script>
import Link from "@/components/Link"

export default {
    data(){
        return{
            id:0
        }
    },
    components:{
        appLink:Link
    }
}
</script>

<style>

</style>