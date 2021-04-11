<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <router-view name="header-top"></router-view>
                <transition mode="out-in" enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
                    <router-view></router-view>
                </transition>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './comps/layout/Header'
export default {
    components:{
        appHeader : Header
    }
}
</script>

<style>

</style>
