<template>
  <div class="container">
        <h1 class="text-center">Hadi Düzenle!</h1>
        <div>
            <ul class="list-group">
                <li class="list-group-item">ID : {{$route.params.id}}</li>
            </ul>
        </div>
        <div class="rounded bg-dark text-center">
            <nuxt-link tag="a" class="btn btn-secondary" to="/product">Geri Dön</nuxt-link>
        </div>
  </div>
</template>

<script>
export default {
    validate(arg){
        console.log("+")
        return /^\d+$/.test(arg.params.id)
    },
    beforeRouteEnter(to,from,next){
        console.log("naber")
        next()
    }
}
</script>

<style>

</style>