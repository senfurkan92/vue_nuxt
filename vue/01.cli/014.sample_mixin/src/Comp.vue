<template>
  <div>
    <input v-css:implement.now="['bg-warning', 'form-control', 'text-dark', 'mt-5']" v-model="searched"/><br/>
    <button class="btn btn-success" @click="products.push(searched)">Ekle</button>
    <ul v-css:implement.now="['mt-1']">
      <li v-for="product in getFilteredProducts" :key="product">{{product | upper}}</li>
    </ul>
  </div>
</template>

<script>
import {productMixin} from "./productMixin"
export default {
    mixins: [productMixin]
}
</script>

<style>

</style>