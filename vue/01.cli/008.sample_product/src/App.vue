<template>
  <div class="container">
    <app-header></app-header>
    <hr/>
    <app-Infoinput @emitProduct="addProduct($event)"></app-Infoinput>
    <hr/>
    <app-bar :productCount="products.length+''"></app-bar>
    <hr/>
    <app-present :presentedProducts="products"></app-present>
  </div>
</template>

<script>
import Header from "./comps/Header"
import Infoinput from "./comps/Infoinput"
import Bar from "./comps/Bar"
import Present from "./comps/Present"
export default {
    data(){
      return{
        products : []
      }
    },
    components:{
      appHeader : Header,
      appInfoinput : Infoinput,
      appBar: Bar,
      appPresent : Present
    },
    methods: {
      addProduct(product){
        if(this.products.length<10)
        {
          this.products.push(product)
        }
        else
        {
          alert("you have been exceeded the limit")
        }
      }
    }
}
</script>

<style>
  .valign{
    position: relative;
    top: 50%;
    transform: translateY(+50%);
  }
</style>
