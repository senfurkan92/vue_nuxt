<template>
    <div>
        <h1>Users</h1>
        <p>
            <button class="btn btn-success" @click="navigateTo()">Go Home!</button>
            <br/>
            <!-- <transition enter-active-class="animated pulse" leave-active-class="animated-pulse" appear mode="out-in"> -->
                <router-view></router-view>
            <!-- </transition> -->
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id : this.$route.params.id
        }
    },
    methods:{
        navigateTo()
        {
            this.$router.push('/')
            // this.$router.push({path:'/'})
            // this.$router.push({name:'home'})
        }
    },
    created()
    {
        console.log(this.$route)
    },
    watch:
    {
        "$route"(to, from){
            this.id = to.params.id
        },
    }
}
</script>