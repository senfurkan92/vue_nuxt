import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import {routes} from "./routes"

// vue-router
// burada scrollBehavior transition nedeniyle çalışmadı
Vue.use(VueRouter)
const router = new VueRouter({
  routes : routes,
  mode : "history",
  scrollBehavior(to, from, savedPosition){
    if(to.hash != "")
    {
        return{
          selector : to.hash
        }
    }
    return {x : 0,y : 800}
  }
});

router.beforeEach((to, from, next)=>{
    console.log("Global kontrol")
    next();
  }
)

// vue-resource
Vue.use(VueResource)
Vue.http.options.root = ""
Vue.http.interceptors.push((request, next) => {
  //POST INTERCEPTOR
  if(request.method.toLowerCase() == "post")
  {
    request.method = "PUT"
  }

  //GET INTERCEPTOR
  next(response => {
   console.log(response)
  })
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
