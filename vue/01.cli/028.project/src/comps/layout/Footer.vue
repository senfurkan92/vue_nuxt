<template>
    <div class="bottom w-100">
        <div class="row bg-dark text-light mr-0">
            <div class="col-6">
                <div class="p-2"><span class="badge badge-light">vue-project | furkansen</span></div>
            </div>
            <div class="col-6">
                <div class="d-flex justify-content-end">
                    <div class="d-flex flex-row bd-highlight">
                        <div class="p-2 bd-highlight">Bakiye : <span class="badge badge-info">{{getBudget}} TL</span></div>
                        <div class="p-2 bd-highlight">Harcanan : <span class="badge badge-danger">{{getExpense}} TL</span></div>
                        <div class="p-2 bd-highlight">Kazanılan : <span class="badge badge-success">{{getIncome}} TL</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex"

export default {
    computed:{
        ...mapGetters(["getBudget", "getExpense", "getIncome"])
    }
}
</script>

<style scoped>
    .bottom{
        position: fixed;
        top:100vh;
        transform: translateY(-100%);
    }
</style>