<template>
  <div class="container">
    <input v-css:implement.now="['bg-warning', 'form-control', 'text-dark', 'mt-5']" v-model="searched"/><br/>
    <ul v-css:implement.now="['mt-1']">
      <li v-for="product in getFilteredProducts" :key="product">{{product | upper}}</li>
    </ul>
    <app-comp></app-comp>
    <p v-bigger>{{test | toLower}}</p>
  </div>
</template>

<script>
import Comp from './Comp'
import {productMixin} from './productMixin'
export default {
  mixins : [productMixin],
  components :{
    appComp:Comp
  },
  data(){
    return{
      test : "Test"
    }
  }
}
</script>

<style>

</style>
