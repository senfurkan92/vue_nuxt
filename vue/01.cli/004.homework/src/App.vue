<template>
  <div class="container">
    <div class="row">
      <app-navbar></app-navbar>
      <app-server :serverNames="serverNames" @currentServer="info = $event"></app-server>
      <app-serverInfo :info="info" @repaired="repair($event)"></app-serverInfo>
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
  methods:{
    repair(id){
      var repairedServer = this.serverNames.filter(x => x.id == id);
      repairedServer[0].state = "Working :)"
    }
  },
  data(){
    return {
      serverNames : [
                      {id:1,state:"In Danger"},
                      {id:2,state:"Unknown"},
                      {id:3,state:"Warning"},
                      {id:4,state:"Warning"},
                      {id:5,state:"Critical"},
                      {id:6,state:"Working"}
                    ],
      info : {id:0, state:"Unselected"}
    }
  }
}
</script>

<style>

</style>
