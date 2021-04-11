<template>
  <div class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <nuxt-link to="/auth" class="nav-link" tag="a" exact active-class="active">Auth</nuxt-link>
          <nuxt-link to="/" class="nav-link" tag="a" exact active-class="active">Anasayfa</nuxt-link>
          <nuxt-link to="/about" class="nav-link" tag="a" exact active-class="active">Hakkımızda</nuxt-link>
          <a class="nav-link" style="cursor:pointer" @click.prevent="logout()" v-if="$store.getters.isAuthenticated">Çıkış Yap</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch("logout")
        .then(response => {
          if(response)
          {
            this.$router.push("/auth")
          }
        })
    }
  }
}
</script>

<style>

</style>