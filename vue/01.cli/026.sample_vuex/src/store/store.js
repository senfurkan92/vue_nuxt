import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter : 0
    },
    getters:{
        getDoubleCounter(state)
        {
            return state.counter * 2
        },
        getDescriptedCounter(state)
        {
            return state.counter + " kez Tıklandı"
        }
    },
    mutations:{
        increaseCounter(state, value)
        {
            state.counter += value;
        },
        decrementCounter(state,value)
        {
            state.counter -= value;
        }
    },
    actions:{
        increaseCounterAsync({commit}, value)
        {
            setTimeout(() => {

                commit("increaseCounter", value.amount)
            }, value.time);

        },
        decrementCounterAsync({commit},value)
        {
            setTimeout(() => {
                commit("decrementCounter", value.amount)
            }, value.time);
        }
    }
});