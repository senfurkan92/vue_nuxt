<template>
  <div class="container mt-5">
    <button class="btn btn-info" @click="addNumber()">Add</button>
    <hr>
    <ul class="list-group">
      <transition-group
        enter-class=""
        enter-active-class="animated zoomIn"
        leave-class=""
        leave-active-class="animated zoomOut position-absolute w-100"
        appear
        mode="out-in"
        move-class="slowly"
        >
        <li v-for="(number,index) in numbers" :key="number" v-listItem @mousedown="numbers.splice(index,1)">{{index}}. {{number | modify}}</li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      numbers : [1,2,3,4,6,7,8,9]
    }
  },
  directives:{
    "listItem": {
      bind(el,binding,vnode )
      {
        el.classList.add('list-group-item')
        el.classList.add('bg-dark')
        el.classList.add('text-light')
      }
    }
  },
  filters:{
    modify(value){
      return value + 1000
    }
  },
  methods:{
    addNumber()
    {
      var biggest = 0;
      this.numbers.forEach(x=> {
        biggest = biggest > x ? biggest : x
      })
      biggest +=1;
      var index = Math.floor(Math.random() * this.numbers.length +1) -1
      this.numbers.splice(index,0,biggest);
    }
  }
}
</script>

<style>
  .slowly{
    transition: transform 1s;
  }
</style>
