<template>
    <div class="child1Bg p-2">
        <h2>Child Component 1-{{reverseName}}</h2>
        <span>Ben user.vue Parent Component'in içerisindeki componentim</span>
        <button class="btn btn-info" @click="emitTitle">Emit Title</button>
        <input class="from-control" v-model="age" @input="emitAge()"/>
    </div>
</template>

<script>
import { eventBus } from "../main"
export default {
    // case_sensetive, validation
    props:{
        name : {
            type: String,
            required: true,
            default: "Furkan"
        }
    },
    data(){
        return{
            age: "27"
        }
    },
    computed:{
        reverseName()
        {
            return this.name.split("").reverse().join("");
        }
    },
    methods:{
        emitTitle()
        {
            this.$emit("data",this.name);
        },
        emitAge()
        {
            eventBus.$emit("age", this.age);
            eventBus.emitAge(this.age);
        },
    }
}
</script>

<style scoped>
    .child1Bg{
        background-color: palevioletred;
    }
</style>