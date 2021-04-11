const state = {
    incrementValue : 5
}

const getters = {
    getIncrementValue(state){
        return state.incrementValue;
    }
}

const mutations={
    setIncrementValue(state,payload){
        state.incrementValue = payload
    }
}

export default{
    state,
    getters,
    mutations
}