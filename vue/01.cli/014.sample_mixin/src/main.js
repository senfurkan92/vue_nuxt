import Vue from 'vue'
import App from './App.vue'

Vue.filter(
  "toLower", (value) => {
    return value.toLowerCase();
  }
);

Vue.directive("bigger", {
    bind(el, binding, vnode){
      el.classList.add("h3")
    }
  }
);

Vue.mixin({
  created(){
    console.log("Global mixin is created!!!")
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
