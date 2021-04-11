<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter(1)">
      + Arttır
    </button>
    <button class="btn btn-danger" @click="decrementCounter(1)">
      - Arttır
    </button>
    <hr />
    <button class="btn btn-success" @click="increaseCounterAsync({time : 5000, amount : 2})">
      + Arttır
    </button>
    <button class="btn btn-danger" @click="decrementCounterAsync({time : 5000, amount : -2})">
      - Arttır
    </button>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
    // methods: mapMutations([
    //     "increaseCounter",
    //     "decrementCounter"
    // ]),
    methods:{
        ...mapMutations([
            "increaseCounter",
            "decrementCounter"
        ]),
        ...mapActions([
            "increaseCounterAsync",
            "decrementCounterAsync"
        ]),
        other(){

        },
        another(){

        }
    },
    // methods:{
    //     increaseCounter(value){
    //         this.$store.commit("increaseCounter",value)
    //     },
    //     decrementCounter(value){
    //         this.$store.commit("decrementCounter",value)
    //     },
    //     increaseCounterAsync(value){
    //         this.$store.dispatch("increaseCounterAsync",value)
    //     },
    //     decrementCounterAsync(value){
    //         this.$store.dispatch("decrementCounterAsync",value)
    //     },
    // }
}
</script>

<style>
</style>