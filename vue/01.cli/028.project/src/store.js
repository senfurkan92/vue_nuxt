import Vue from 'vue'
import Vuex from 'vuex'
import money from './modules/money'
import product from './modules/product'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        money : money,
        product : product
    }
})