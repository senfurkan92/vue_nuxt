<template>
    <div>
        <div class="d-flex flex-wrap justify-content-center mb-4">
            <div class="p-2 bd-highlight" v-for="p in posts" :key="p.id">
                <app-post-card
                    :id="p.id"
                    :title="p.title"
                    :subtitle="p.subtitle"
                    :description="p.description"
                    :isAdmin="isAdmin">
                </app-post-card>
            </div>
        </div>
    </div>
</template>

<script>
import PostCard from './PostCard'

export default {
    props:{
        posts:{
            require: false,
            default: [{title:"title", subtitle:"subtitle", description:"description"}],
            type: Array,
            },
        isAdmin:{
            type:Boolean,
            require:true,
            default:false,
        },
    },
    components:{
        appPostCard : PostCard
    }
}
</script>

<style>

</style>