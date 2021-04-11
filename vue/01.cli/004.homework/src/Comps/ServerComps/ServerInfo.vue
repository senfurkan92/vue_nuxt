
<template>
  <div class="col-6">
      <span>{{info.id}} {{info.state}}</span>
      <br/>
      <button class="btn btn-info" @click="emitRepair(info.id)">Repair</button>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  methods: {
    emitRepair(id){
      this.$emit("repaired",id)
    }
  }
};
</script>

<style>
</style>