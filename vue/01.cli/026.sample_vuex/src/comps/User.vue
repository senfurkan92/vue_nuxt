<template>
    <div>
        <label>{{getName}}</label>
        <input @input="setName" :value="getName"/>
        <input @input="setNameAsync({e:$event, wait:3000})" :value="getName"/>
        <br/>
        <label>{{getSurname}}</label>
        <input @input="setSurname" :value="getSurname"/>
        <input @input="setSurnameAsync({e:$event, wait:3000})" :value="getSurname"/>
        <br/>
        <label>{{getAge}}</label>
        <input @input="setAge" :value="getAge"/>
        <input @input="setAgeAsync({e:$event, wait:3000})" :value="getAge"/>
        <hr>
        <label>{{getvModelExp}}</label>
        <input type="text" v-model="getvModelExp"/>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex"

export default {
    computed:{
        ...mapGetters([
            "getName", "getSurname", "getAge"
        ]),
        getvModelExp:{
            get(){
                return this.$store.getters.getvModelExp
            },
            set(value){
                this.$store.commit("setvModelExp",value)
            }
        }
    },
    methods:{
        ...mapMutations([
            "setName", "setSurname", "setAge"
        ]),
        ...mapActions([
            "setNameAsync", "setSurnameAsync", "setAgeAsync"
        ])
    }
}
</script>

<style scoped>

</style>>