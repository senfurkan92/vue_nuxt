<template>
  <div class="container mt-5">
    <button type="button" class="btn btn-success" style="min-width:200px" @click="isShowed = !isShowed">{{getState}}</button>
    <transition name="fade" type="animation" mode="out-in">
      <div class="alert alert-success" v-if="isShowed" key="a">Selamlar Herkese !!!</div>
      <div class="alert alert-danger" v-else kay="b">Güle Güle Herkese !!!</div>
    </transition>
    <transition
      enter-class=""
      enter-active-class="animated shake"
      leave-class=""
      leave-active-class="animated swing"
      appear>
      <div class="alert alert-danger" v-show="isShowed">
        Say hello to Animate.CSS !!!
      </div>
    </transition>
    <transition appear mode="out-in" enter-active-class="animated bounce" leave-active-class="animated bounce">
                    <div v-if="0==messageIndex"  style="color:black" :key="'a'">asd</div>
                    <div v-else-if="1==messageIndex" style="color:black" :key="'b'">123</div>
                    <div v-else-if="2==messageIndex" style="color:black" :key="'c'">ASD</div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return {
      messageIndex : 0,
      isShowed : true
    }
  },
  computed:{
    getState(){
      return this.isShowed ? "Hide" : "Show"
    }
  },
      created(){
        setInterval(()=>{{
            console.log(this.messageIndex)
            if(this.messageIndex+1>=3)
            {
                this.messageIndex = 0
            }
            else
            {
                this.messageIndex++;
            }
        }},3000)
    },
}
</script>

<style>

.fade-enter-active{
  animation-name: animFadein;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.fade-leave-active{
  animation-name: animFadeout;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes animFadein {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes animFadeout {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}

</style>
