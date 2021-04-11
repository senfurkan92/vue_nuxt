<template>
  <div class="container">
      <h3 class="mt-3">Vue-Resource</h3>
      <div class="form-group mt-3 w-100">
        <input class="form-control" type="text" v-model="username"/>
      </div>
      <button class="btn btn-primary" @click="save()">Save</button>
      <ul class="list-group mt-3">
        <transition-group
          enter-active-class="animated fadeInDownBig"
          leave-active-class="animated fadeOutDownBig absolute w-100"
          move-class="slowly"
          appear
          mode="out-in"
        >
        <li v-for="(item,index) in users" :key="index" class="list-group-item bg-dark text-light">
            <span>{{item.username}}</span>
            <button class="btn btn-sm btn-danger float-right" @click="deleteUser(item.id,index)">Delete</button>
          </li>
        </transition-group>
      </ul>
    </div>
</template>

<script>
export default {
  data(){
    return {
      username: null,
      users:[],
      resource : {}
    }
  },
  created(){
    this.getUsers();

    const customActions = {
      insert : {method : "POST", url:"users.json"}
    };
    this.resource = this.$resource("",{},customActions);
  },
  methods:{
    save(){
      // this.$http.post("users.json",{"username" : this.username})
      //   .then((response) => {
      //     this.getUsers()
      //   })

      // this.$resource("users.json").save({}, {"username" : this.username})
      //   .then((response) => {
      //     this.getUsers()
      //   })

      this.resource.insert({},{"username" : this.username})
        .then((response) => {
          this.getUsers()
        })
    },
    deleteUser(id,index){
      this.$http.delete("users/"+id+".json")
        .then(response => {
          if(response.status == 200)
          {
            this.users.splice(index,1)
          }
        })
    },
    getUsers(){
      this.$http.get("users.json")
        .then((response) => {
          return response.json()
        })
        .then(data => {
          for(let i = 0; i<data.userList.length; i++)
          {
            if(this.users.filter(x => x.id ==data.userList[i].id)[0] == undefined){
              this.users.push(data.userList[i])
            }
          }
        })
    }
  }
}
</script>

<style>
  .slowly{
    transition: transform 1s;
  }
</style>
