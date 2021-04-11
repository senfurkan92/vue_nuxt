import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({});

Vue.directive("color", {
  bind(el, binding, vnode){
    el.style.backgroundColor = binding.value
    // el.style.color = "white"
    // el.hidden = false
    // el.classList.add("h4");
  }
});

Vue.directive("multi", {
  bind(el, binding, vnode){
    if(binding.modifiers["delay"] != null)
    {
      setTimeout(() => {
        if(binding.arg == "background")
        {
          el.style.background = binding.value 
        }
        else
        {
          el.style.color = binding.value
        }
      },2000)     
    }    
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
