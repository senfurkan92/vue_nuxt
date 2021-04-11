import Vue from "vue"
import Vuex from "vuex"
import counter from "./modules/counter"
import value from "./modules/value"
import * as mutations from "./mutations"

Vue.use(Vuex)

export const store = new Vuex.Store({
    mutations: mutations,
    modules:{
        value,
        counter
    }
})