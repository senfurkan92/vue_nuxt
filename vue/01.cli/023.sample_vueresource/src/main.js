import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.use(VueResource);
Vue.http.options.root = "https://vuejs-vue-resource-6f2d8-default-rtdb.firebaseio.com"
Vue.http.interceptors.push((request, next) => {
  // POST INTERCEPTOR
  // if(request.method.toLowerCase() == "post")
  // {
  //   request.method = "PUT"
  // }
  // next()

  // GET INTERCEPTOR
  next(response => {
    response.json = () => {
      const userlist = [];
      for(let key in response.data)
      {
        let content = {"id":key , "username":response.data[key].username}
        userlist.push(content)
      }
      return{
        userList : userlist
      }
    }
  })
});

new Vue({
  el: '#app',
  render: h => h(App)
})
