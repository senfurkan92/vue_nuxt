<template>
    <div class="child2Bg p-2">
        <h2>Child Component 2- {{name}}</h2>
        <span>Ben user.vue Parent Component'in içerisindeki componentim</span>
        <p>age: {{age}}</p>
        <p>common age : {{commonAge}}</p>
    </div>
</template>

<script>
import { eventBus } from "../main"
export default {
    props:["name"],
    data(){
        return {
            age : "27",
            commonAge : "27"
        }
    },
    created(){
       eventBus.$on("age", (age) =>{
           this.age = age
       });
       eventBus.$on("commonAge", (commonAge) => {
           this.commonAge = commonAge;
       })
    }
}
</script>

<style scoped>
    .child2Bg{
        background-color: lemonchiffon;
    }
</style>