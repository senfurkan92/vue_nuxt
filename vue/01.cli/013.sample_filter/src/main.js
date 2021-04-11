import Vue from 'vue'
import App from './App.vue'


// before new Vue() :))
Vue.filter("smile", (value) => {
  return value + ':)';
})


new Vue({
  el: '#app',
  render: h => h(App)
})


