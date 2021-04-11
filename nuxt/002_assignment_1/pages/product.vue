<template>
    <div class="container">
        <form class="text-center">
            <input class="text-center" v-model="id" placeholder="id"/>
            <br>
            <button class="btn btn-sm btn-outline-success" v-if="id>0" type="button" @click="$router.replace(`/product/${id}/edit`)">Getir</button>
        </form>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
export default {
    layout:"product",
    data(){
        return{
            id:0
        }
    }
}
</script>

<style>

</style>