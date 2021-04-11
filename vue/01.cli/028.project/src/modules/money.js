const state = {
    budget :0,
    expense :0,
    income : 0
}

const getters = {
    getBudget(state){
        return state.budget.toFixed(2);
    },
    getExpense(state){
        return state.expense.toFixed(2);
    },
    getIncome(state){
        return state.income.toFixed(2);
    }
}

const mutations = {
    initBudget(state, value){
        state.budget = value;
    },
    initExpense(state, value){
        state.expense = value;
    },
    initIncome(state, value){
        state.income = value;
    },
    setBudget(state, value){
        state.budget += value;
    },
    setExpense(state, value){
        state.expense += value;
    },
    setIncome(state, value){
        state.income += value;
    }
}

const actions = {
    initBudgetAsync({commit}, value){
        commit("initBudget",value)
    },
    initExpenseAsync({commit}, value){
        commit("initExpense",value)
    },
    initIncomeAsync({commit}, value){
        commit("initIncome",value)
    },
    setBudgetAsync({commit}, value){
        commit("setBudget",value)
    },
    setExpenseAsync({commit}, value){
        commit("setExpense",value)
    },
    setIncomeAsync({commit}, value){
        commit("setIncome",value)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}