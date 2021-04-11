<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <app-memory>
          <h1 slot="heading">Title</h1>
          <p slot="content">Description of the memory</p>
           <!-- default slot -->
          <p>Read more...</p>
          <p><button class="btn btn-info">Click</button></p>
        </app-memory>
      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./Memory.vue"

export default {
  components:{
    appMemory : Memory
  }
}
</script>

<style scoped>

</style>