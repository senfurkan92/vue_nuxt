<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <button class="btn btn-primary" type="button" @click="activeComponent ='appComp1'">Comp1</button>
        <button class="btn btn-success" type="button" @click="activeComponent ='appComp2'">Comp2</button>
        <button class="btn btn-secondary" type="button" @click="activeComponent ='appComp3'">Comp3</button>
        <button class="btn btn-danger" type="button" @click="activeComponent ='appComp4'">Comp4</button>
      </div> 
      <div class="col-12">
        <!-- Activated-deactivated lifecycle  -->
        <keep-alive>
          <component :is="activeComponent">
            <h1 slot="title1">Title-1</h1>
            <h1 slot="title2">Title-2</h1>
            <h1 slot="title3">Title-3</h1>
            <h1 slot="title4">Title-4</h1>
            <span slot="content1">Content-10</span>
            <span slot="content2">Content-20</span>
            <span slot="content3">Content-30</span>
            <span slot="content4">Content-40</span>
            <div slot="detail" class="w-100 text-left">
              Tel : 05554443322<br/>
              Mail : mail@gmail.com
            </div>
            <div>
              <button class="btn btn-warning">Submit</button>
            </div>
          </component>
        </keep-alive>
        <appComp1></appComp1>
      </div>    
    </div>
  </div>
</template>

<script>
import Comp1 from "./comps/Comp1"
import Comp2 from "./comps/Comp2"
import Comp3 from "./comps/Comp3"
import Comp4 from "./comps/Comp4"
export default{
  data (){
    return {
      activeComponent : "appComp1",
    }
  },
  components: {
    appComp1 : Comp1,
    appComp2 : Comp2,
    appComp3 : Comp3,
    appComp4 : Comp4
  }
}
</script>

<style scoped>
button{
  width: 200px;
  margin-top: 30px;
}
</style>
