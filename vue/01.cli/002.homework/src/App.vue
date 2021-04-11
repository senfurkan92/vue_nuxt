<template>
  <div class="container">
    <div class="row">
      <app-navbar></app-navbar>
      <app-server :serverNames="serverNames"></app-server>
      <app-serverInfo :info="info"></app-serverInfo>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Navbar from './Comps/LayoutComps/Navbar.vue'
import Server from './Comps/ServerComps/Server.vue'
import ServerInfo from './Comps/ServerComps/ServerInfo.vue'
import Foot from './Comps/LayoutComps/Foot.vue'
export default {
  components:{
    "app-navbar" : Navbar,
    "app-server" : Server,
    "app-serverInfo" : ServerInfo,
    "app-footer" : Foot
  },
  data(){
    return {
      serverNames : ['Sunucu 1#','Sunucu 2#','Sunucu 3#','Sunucu 4#','Sunucu 5#','Sunucu 6#'],
      info : "Sunucu bilgisi güncel değil"
    }
  }
}
</script>

<style>

</style>
