<template>
  <div class="col-6">
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="p-2 bd-highlight border" v-for="(name, index) in serverNames" :key="index">{{name}}</div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        serverNames: ""
    },
};
</script>

<style>
</style>