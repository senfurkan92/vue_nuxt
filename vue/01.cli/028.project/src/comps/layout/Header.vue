<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><img src="../../assets/logo.png" class="img-thumbnail rounded" style="height:60px"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <router-link to="/" tag="li" class="nav-item nav-link" style="cursor:pointer" active-class="active" exact>
                    Ürün Listesi
                </router-link>
                <router-link to="/islemler" tag="li" class="nav-item" style="cursor:pointer" active-class="active" exact>
                    <span class="nav-link">Ürün İşlemler</span>
                </router-link>
                <router-link to="/cikis" tag="li" class="nav-item" style="cursor:pointer" active-class="active" exact>
                    <span class="nav-link">Ürün Çıkışı</span>
                </router-link>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>