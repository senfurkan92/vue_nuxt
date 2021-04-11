
<template>
    <div>
        <label>Lamb State : {{state}}</label>
        <hr>
        <button @click="turnOn()">Turn on the Light</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            state : "close"
        }
    },
    computed:{
        stateProp(){ return this.state}
    },
    methods:{
        turnOn() { this.state = "open"}
    }
}
</script>

<style></style>