<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12">
        <button v-shadow:implement.do="'black'" class="btn btn-warning" @click="isShowed = !isShowed">{{getState |capital}}</button>
      </div>
      <div class="col-12 mt-2">
        <transition
          v-bind:css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCancelled">
          <div :style="getStyle" v-shadow:implement.do="'black'" v-if="isShowed">Naber</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {mymixin} from './mymixin'

export default {
 mixins:[mymixin],
 data(){
  return{
    increaseAmount : 10,
    decreaseAmount : 10,
    currentWidth:50,
    maxWidth : 300,
    minWidth : 50
  }
 },
 computed:{
   getStyle(){
     return [{'width':this.currentWidth +'px'}, {'height':50 +'px'}, {backgroundColor:'darkorange'}, {color:'white'}, {border:'2px solid black'}]
   }
 },
 methods:{
  beforeEnter(el){
    console.log("beforeEnter")
  },
  enter(el, done){
    const interval = setInterval(()=> {
      if(this.currentWidth < this.maxWidth)
      {
        this.currentWidth += this.increaseAmount;
        el.style.width = this.currentWidth +"px";
      }
      else
      {
        clearInterval(interval)
        done()
      }
    },2)
  },
  afterEnter(el){
    console.log("afterEnter")
  },
  afterEnterCancelled(el){
    console.log("afterEnterCancelled")
  },
  beforeLeave(el){
    console.log("beforeLeave")
  },
  leave(el, done){
    const interval = setInterval(()=> {
      if(this.currentWidth > this.minWidth)
      {
        this.currentWidth -= this.decreaseAmount;
        el.style.width = this.currentWidth +"px";
      }
      else
      {
        clearInterval(interval)
        done()
      }
    },2)
  },
  afterLeave(el){
    console.log("afterLeave")
  },
  afterLeaveCancelled(el){
    console.log("afterLeaveCancelled")
  },
 }
}
</script>

<style>

</style>
