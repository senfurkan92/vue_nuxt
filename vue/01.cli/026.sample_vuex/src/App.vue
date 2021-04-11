<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- <h1 class="text-center">VUEX</h1>
                <hr/>
                <app-result :counter="counter"></app-result>
                <app-second-result :counter="counter"></app-second-result>
                <hr/>
                <app-counter @counterEvent="counter += $event"></app-counter> -->
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from "./comps/Counter"
import Result from "./comps/Result"
import SecondResult from "./comps/SecondResult"
import User from "./comps/User"

export default {
    data(){
        return{
            counter : 0
        }
    },
    components:{
        appCounter : Counter,
        appResult : Result,
        appSecondResult : SecondResult,
        appUser : User
    }
}
</script>

<style>

</style>
