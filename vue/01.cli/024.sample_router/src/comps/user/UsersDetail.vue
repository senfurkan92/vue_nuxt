<template>
    <div>
        <p>
            Current id = {{id}} for detail
        </p>
        <button class="btn btn-danger" @click="ready=true" v-if="!ready">Ready</button>
        <!-- :to="'/users/' + id + '/edit'" -->
        <router-link
            :to="{name:'userEdit', params:{id:id}, query : {name:'furkan', surname:'sen'}, hash:'#data'}"
            tag="button"
            class="btn btn-primary"
            >
            Edit
        </router-link>
    </div>
</template>

<script>
export default{
    data(){
        return{
            id : this.$route.params.id,
            ready : false
        }
    },
    beforeRouteEnter(to, from, next){
        next()
    },
    beforeRouteLeave(to, from, next){
        if(this.ready)
        {
            next()
        }
    }
}
</script>