<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <app-head>
          <h1 slot="title" class="text-center">Form Verileriyle Çalışmak</h1>
        </app-head>
      </div>
      <hr class="w-100 bg-secondary"/>
      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-4 mb-5" v-show="!isSubmitted">
        <app-applyform @submitUpdate="isSubmitted = $event"></app-applyform>
      </div>
      
      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-4 mb-5">
        <app-presentform></app-presentform>
        <p v-show="isSubmitted">Kayıt gönderildi</p>
      </div>
    </div>   
  </div>
</template>

<script>
import Head from "./comps/Head"
import ApplyForm from "./comps/ApplyForm"
import PresentForm from "./comps/PresentForm"
export default {
  data(){
    return {
      username:"",
      password:"",
      age:0,
      description:"",
      specialist:"",
      gender:"",
      city:"",
      isSubmitted:false
    }
  },
  components:{
    appHead: Head,
    appApplyform:ApplyForm,
    appPresentform : PresentForm
  }
}
</script>

<style>

</style>
