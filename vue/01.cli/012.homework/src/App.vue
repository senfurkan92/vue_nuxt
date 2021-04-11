<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3 v-event:catch.mousedown>Directive Sınavı</h3>
      <br/>
      <input v-event:catch.keydown class="form-control"/>
    </div>
  </div>
</template>

<script>
export default {
  directives:{
    "event":{
      bind(el, binding, vnode)
      {
        if(binding.arg == "catch")
        {
          if(binding.modifiers["mousedown"])
          {
            el.addEventListener("mousedown", ()=> {
              el.style.color = "red";
            });
          }
          else if (binding.modifiers["mouseup"])
          {
            el.addEventListener("mouseup", ()=> {
              el.style.backgroundColor = "red";
            });
          }
          else if (binding.modifiers["keydown"])
          {
            el.addEventListener("keydown", ()=> {
              var r = Math.floor(Math.random() * 257);
              var g = Math.floor(Math.random() * 257);
              var b = Math.floor(Math.random() * 257);
              el.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
              el.style.color = 'rgb(' + b + ',' + r + ',' + g + ')'
            });
          }
        }
      }
    }
  }
}
</script>

<style>

</style>
