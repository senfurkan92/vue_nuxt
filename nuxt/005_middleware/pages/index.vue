<template>
    <div>
        <div class="row">
            <div class="col-6 offset-3">
                <app-local-storage></app-local-storage>
            </div>
        </div>
        <div class="row">
            <div class="col-6 offset-3">
                <app-cookie></app-cookie>
            </div>
        </div>
    </div>
</template>

<script>
import LocalStorage from "@/components/localStorage"
import Cookie from "@/components/cookie"

export default {
    head:{
        title:'Home'
    },
    components:{
        appLocalStorage:LocalStorage,
        appCookie:Cookie
    }
}
</script>

<style>

</style>