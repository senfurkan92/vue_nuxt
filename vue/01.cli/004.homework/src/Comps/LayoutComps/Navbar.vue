
<template>
    <div class="col-12 mt-3 mb-3">
        <h1>{{titleProp}}</h1>
        <hr class="w-100">
    </div>
</template>

<script>
export default {
    data(){
        return{
            title : "Sunucu Durumu"
        }
    },
    computed:{
        titleProp(){ return this.title}
    }
}
</script>

<style>

</style>