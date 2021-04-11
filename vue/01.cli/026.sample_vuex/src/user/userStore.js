import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const userStore = new Vuex.Store({
    state:{
        name : "furkan",
        surname : "sen",
        age: 27,
        vModelExp : "deneme",
    },
    getters:{
        getName(state){
            return state.name
        },
        getSurname(state){
            return state.surname
        },
        getAge(state){
            return state.age
        },
        getvModelExp(state){
            return state.vModelExp
        }
    },
    mutations:{
        setName(state, payload){
            state.name = payload.target.value;
        },
        setSurname(state, payload){
            state.surname = payload.target.value;
        },
        setAge(state, payload){
            state.age = parseInt(payload.target.value);
        },
        setvModelExp(state, payload)
        {
            state.vModelExp = payload;
        }
    },
    actions:{
        setNameAsync({commit}, payload){
            setTimeout(() => {
                commit("setName", payload.e)
            }, payload.wait);
        },
        setSurnameAsync({commit}, payload){
            setTimeout(() => {
                commit("setSurname", payload.e)
            }, payload.wait);
        },
        setAgeAsync({commit}, payload){
            setTimeout(() => {
                commit("setAge", payload.e)
            }, payload.wait);
        }
    }
})