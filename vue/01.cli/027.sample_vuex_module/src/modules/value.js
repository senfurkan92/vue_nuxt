const state = {
    clickCount : 0,
    value : 0,
}

const getters = {
    getValue(state){
        return state.value;
    },
    getClickCount(state){
        return state.clickCount;
    }
}

const mutations = {
    setValue(state,payload){
        state.clickCount++;
        state.value+= parseInt(payload);
    },
    setValueDynamic(state,payload){
        state.clickCount++;
        state.value += parseInt(payload);
    }
}

const actions = {
    setValueAsync({commit}){
        setTimeout(commit("setValue"),3000)
    },
    setValueDynamicAsync({commit},payload){
        setTimeout(commit("setValueDynamic",payload))
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}