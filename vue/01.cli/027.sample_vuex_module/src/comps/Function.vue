<template>
    <div>
        <div>
            <button class="btn btn-secondary" @click="setValue(-1)">-1</button>
            <button class="btn btn-primary" @click="setValue(1)">+1</button>
        </div>
        <hr>
        <div>
            <button class="btn btn-secondary float-left" @click="setValueDynamic(getIncrementValue*-1)">-{{getIncrementValue}}</button>
            <button class="btn btn-primary float-left" @click="setValueDynamic(getIncrementValue)">+{{getIncrementValue}}</button>
            <input type="number" class="form-control bg-light float-left" style="width:200px" v-model="bindIncrementValue"/>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    computed:{
        ...mapGetters(["getIncrementValue"]),
        bindIncrementValue:{
            get(){return this.getIncrementValue},
            set(value){this.setIncrementValue(value)}
        }
    },
    methods:{
        ...mapMutations(["setIncrementValue", "setValue", "setValueDynamic"])
    }
}
</script>

<style>

</style>