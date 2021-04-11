import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueResource from 'vue-resource'
import {store} from './store'
import {router} from './router'

Vue.use(Vuelidate);
Vue.use(VueResource);

export const eventBus = new Vue({
    methods:{
      emitter(eventName, eventValue){
        this.$emit(eventName,eventValue);
      }
    }
})

new Vue({
  el: '#app',
  store: store,
  router:router,
  render: h => h(App)
})
