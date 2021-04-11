import Vue from 'vue'
import App from './App.vue'

export const EventBus = new Vue({
  methods:{
    emitter(key, value){
      this.$emit(key,value);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
