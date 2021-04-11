<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-12">
        <h3>Animation ve Transition</h3>
        <hr>
        <button class="btn btn-info text-center" @click="isShowed = !isShowed" style="min-width:200px">{{condition}}</button>
        <br><br>
        <transition name="fade" type="transition" appear>
          <div class="alert alert-info" v-if="isShowed">{{message}}</div>
        </transition>      
        <transition name="slide" type="animation" appear>
          <div class="alert alert-warning" v-if="isShowed">{{message}}</div>
        </transition>   
        <p>selam</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShowed : true,
      message : "Hello world"
    }
  },
  computed:{
    condition(){
      return this.isShowed ? "Hide" : "Show";
    }    
  }
}
</script>

<style scoped>
.slide-enter{
  opacity: 0;
}

.slide-enter-active{
  animation-name: slide-in;
  animation-duration: 2s;
  animation-fill-mode: forwards;  
  transition: opacity 1s;
}

/* .slide-leave{

} */

.slide-leave-active{
  animation-name: slide-out;
  animation-duration: 2s;
  animation-fill-mode: forwards;  
  transition: opacity 1s;
  opacity: 0;
}


@keyframes slide-in {
  from{
    transform: rotate3d(1, 1, 1, 45deg) translate(300px,300px) skew(60deg,60deg);
    width: 0;
    font-size: 0em;
  }
  to{
    transform: rotate3d(0) translate(0) skew(0);
    width: 100%;
    font-size: 1em;
  }
}

@keyframes slide-out {
  to{
    transform: rotate3d(1, 1, 1, 45deg) translate(300px,300px) skew(60deg,60deg);
    width: 0;
    font-size: 0em;
  }
  from{
    transform: rotate3d(0) translate(0) skew(0);
    width: 100%;
    font-size: 1em;
  }
}


/* with transition */
.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 1s;
}

/* .fade-leave{
  opacity: 1;
} */

.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}
</style>
