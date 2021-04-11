<template>
  <div class="col-6">
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="p-2 bd-highlight border" v-for="(currentServer) in serverNames" :key="currentServer.id" @mousedown="emitInfo(currentServer)">{{currentServer.id}}. {{currentServer.state}}</div>
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
        serverNames: Array
    },
    methods:{
      emitInfo(currentServer){
        this.$emit("currentServer", currentServer);
      }
    }
};
</script>

<style>
</style>