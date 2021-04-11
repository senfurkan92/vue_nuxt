<template>
  <div class="container">
    <app-buttons @activePanel="activePanel = $event"></app-buttons>
    <component :is="activePanel">
    </component>
  </div>
</template>

<script>
import Red from "./comps/Red"
import Blue from "./comps/Blue"
import Green from "./comps/Green"
import Buttons from "./comps/Buttons"
export default {
  data() {
    return {
      activePanel : "appRed"
    }
  },
  components:{
    appRed : Red,
    appBlue : Blue,
    appGreen : Green,
    appButtons : Buttons
  }
}
</script>

<style>

</style>
