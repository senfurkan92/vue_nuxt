<template>
  <div>
        <h3>Total Value:</h3>
        <input readonly type="number" class="form-control bg-warning" v-model="getValue"/>
      <hr>
        <h3>Total Click:</h3>
        <input readonly type="number" class="form-control bg-warning" v-model="getClickCount">
  </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  computed:{
    ...mapGetters(["getValue","getClickCount"]),
  },
}
</script>

<style>

</style>