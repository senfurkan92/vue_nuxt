const state = {
    products:[]
}

const getters = {
    getProducts(state){
        return state.products;
    },
    getProductsLength(state){
        return state.products.length;
    }
}

const mutations = {
    setProducts(state, list){
        state.products = list;
    }
}

const actions = {
    setProductsAsync({commit},payload)
    {
        let list = [];
        for(let key in payload.body)
        {
            let product = {
                id:key,
                content: payload.body[key]
            }
            list.push(product)
        }
        commit("setProducts",list)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}