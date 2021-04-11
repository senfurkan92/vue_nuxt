<template>
    <div class="w-100 frame">
        <div class="formHead text-center">
            <h3>From Verileri</h3>
        </div>
        <div class="form-body p-4 bg-transparent">
            <div class="form-group">
                <label><b>Kullanıcı Adı : </b></label><span> {{username}}</span>
            </div>
            <div class="mt-3 form-group">
                <label><b>Şifre : </b></label><span> {{password}}</span>
            </div>
            <div class="mt-3 form-group">
                <label><b>Yaş : </b></label><span> {{age}}</span>
            </div>
            <div class="mt-3 form-group">               
                <label><b>Açıklama : </b></label><span style="white-space: pre;"> {{description}}</span>
            </div>
            <div class="mt-3 form-group">
                <label><b>Uzmanlık : </b></label><ul><li v-for="(item, index) in specialist" :key="index">{{item}}</li></ul>
            </div>
           <div class="mt-3 form-group">
                <label><b>Cinsiyet : </b></label><span> {{gender}}</span>
            </div>   
            <div class="mt-3 form-group">
                <label><b>Şehir : </b></label><span> {{city}}</span>
            </div>   
        </div>
    </div>
</template>

<script>
import {EventBus} from "../main.js"

export default {
   data(){
    return {
      username:"-",
      password:"-",
      age:30,
      description:"-",
      specialist:[],
      gender:"-",
      city:"-"
    }
  }, 
  created(){
    EventBus.$on("username", (username) =>{
        this.username = username
    });
    EventBus.$on("password", (password) =>{
        console.log(password)
        this.password = password
    });
    EventBus.$on("age", (age) =>{
        this.age = age
    });
    EventBus.$on("description", (description) =>{
        this.description = description
    });
    EventBus.$on("specialist", (specialist) =>{
        this.specialist = specialist
    });
    EventBus.$on("gender", (gender) => {
        this.gender = gender;
    });
    EventBus.$on("city", (city) => {
        this.city = city;
    })
  }
}
</script>

<style scoped>
    .frame{
        border : 1px solid rgb(96, 190, 244);
        border-radius: 20px;
        box-shadow: 2px 2px 10px 2px black;
    }

    .formHead{
        border-bottom: 1px solid rgb(96, 190, 244);
        background-color: rgb(96, 190, 244, 0.2);
        color: rgb(96, 190, 244);
    }

    .formBody{
        background-color: rgb(96, 190, 244, 0.1);
    }
</style>