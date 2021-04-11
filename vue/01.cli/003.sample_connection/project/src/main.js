import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods:{
    emitAge(age)
    {
      this.$emit("commonAge",age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
