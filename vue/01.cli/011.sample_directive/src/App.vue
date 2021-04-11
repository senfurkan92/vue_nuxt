<template>
  <div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 mt-3">
            <h3>Vue ile Gelen Directive Tanımları</h3>
            <p v-text="'deneme yanılma iyidir'"></p>
            <p v-html="'<ul><li>test1</li><li>test2</li></ul>'"></p>
        </div>
        <div class="col-md-6 col-md-offset-3 mt-3">
            <h3>Custom Directive Tanımları</h3>
            <p v-color="'green'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum urna lacus, vitae mattis est cursus id. Nunc et facilisis.</p>
            <p v-multi:background.delay="'yellow'">Furkan Sen</p>
            <p v-mydirective:wait.flash="3000">Denemeler</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  directives:{
    "mydirective":{
      bind(el,binding,vnode){
        if(binding.arg == 'wait')
        {
          setTimeout(()=>{
            el.style.color = "yellow"
            if(binding.modifiers["flash"])
            {
              setInterval(() => {
                el.style.backgroundColor = "blue"
              }, 2000);
              setTimeout(() => {
                setInterval(() => {
                el.style.backgroundColor = "red"
                }, 2000);
              }, 1000);
            }
          },2000)
        }
        else
        {
          el.style.backgroundColor = "red"
        }
      }
    }
  }
}
</script>

<style>

</style>
