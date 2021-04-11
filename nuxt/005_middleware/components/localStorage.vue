<template>
  <div class="w-100">
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
         <h5 class="w-100 text-center">localStorage Kullanımı</h5>
         <input class="form-control form-control-sm" v-model="toStorage"/>
         <div class="w-100 mt-2 mb-2">
             <button class="btn btn-sm btn-success" @click="setValue()">Set Value</button>
             <button class="btn btn-sm btn-success" @click="getValue()">Get Value</button>
             <button class="btn btn-sm btn-success" @click="deleteValue()">Delete Value</button>
         </div>
         <input class="form-control form-control-sm" :value="`localStorage Değeri : ${fromStorage!=undefined?fromStorage:''}`" readonly/>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      toStorage:null,
      fromStorage:null,
    }
  },
  methods:{
    setValue(){
      this.$store.commit("setLocalStorage",this.toStorage)
    },
    getValue(){
      this.fromStorage = this.$store.getters.getAuthKey;
    },
    deleteValue(){
       this.$store.commit("clearLocalStorage")
    }
  }
}
</script>

<style>

</style>