import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store.js'
import {userStore} from './user/userStore.js'

new Vue({
  el: '#app',
  store : userStore,
  render: h => h(App)
})
