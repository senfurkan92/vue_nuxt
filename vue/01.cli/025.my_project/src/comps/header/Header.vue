<template>
    <div>
        <app-topbanner></app-topbanner>
        <app-navbar></app-navbar>
    </div>
</template>

<script>
import Topbanner from './Topbanner'
import Navbar from './Navbar'

export default {
    components:{
        appTopbanner : Topbanner,
        appNavbar : Navbar
    }
}
</script>

<style scoped>

</style>