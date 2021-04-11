<template>
  <div>
    <transition-group
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
      mode="out-in"
    >
      <component :is="currentComponent" @result="currentComponent=$event" key="components">
      </component>
      <canvas id="canvas" key="confetti" v-show="currentComponent=='appWin'" style="height:100vh;width:100%;z-index:0"></canvas>
    </transition-group>
  </div>
</template>

<script>
import Game from "./comps/Game"
import Win from "./comps/Win"
import Lost from "./comps/Lost"
export default {
  data(){
    return{
      currentComponent : "appGame"
    }
  },
  components: {
    appGame : Game,
    appWin : Win,
    appLost : Lost
  }
}
</script>

<style>

</style>
