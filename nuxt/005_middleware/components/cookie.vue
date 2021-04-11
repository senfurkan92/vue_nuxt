<template>
  <div class="w-100">
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
         <h5 class="w-100 text-center">cookie Kullanımı</h5>
         <input class="form-control form-control-sm" v-model="toCookie"/>
         <div class="w-100 mt-2 mb-2">
             <button class="btn btn-sm btn-info" @click="setValue()">Set Value</button>
             <button class="btn btn-sm btn-info" @click="getValue()">Get Value</button>
             <button class="btn btn-sm btn-info" @click="deleteValue()">Delete Value</button>
         </div>
         <input class="form-control form-control-sm" :value="`cookie Değeri : ${fromCookie!=undefined?fromCookie:''}`" readonly/>
      </div>
  </div>
</template>

<script>
//npm install js-cookie --save
import Cookie from "js-cookie"

export default {
  data(){
    return{
      toCookie:null,
      fromCookie:null,
    }
  },
  methods:{
    setValue(){
      this.$store.commit("setCookie",this.toCookie)
    },
    getValue(){
      this.fromCookie = this.$store.getters.getAuthKey;
    },
    deleteValue(){
      this.$store.commit("clearCookie")
    }
  }
}
</script>

<style>

</style>