<template>
    <div style="display:block">
        <app-header></app-header>
        <div class="container mt-3 p-3 mb-5 frame">
            <router-view>
                <h4 slot="listTitle" class="text-center w-100">Ürün Listesi</h4>
                <h4 slot="processTitle" class="text-center w-100">Ürün İşlemler</h4>
                <h4 slot="exitTitle" class="text-center w-100">Ürün Çıkışı</h4>
                <hr class="w-75">
            </router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./comps/layout/Header"
import Footer from "./comps/layout/Footer"
import {crudMixin} from './crudMixin'
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {eventBus} from './main'

export default {
    components:{
        appHeader : Header,
        appFooter : Footer
    },
    mixins:[crudMixin],
    computed:{
        ...mapGetters(["getBudget", "getExpense", "getIncome", "getProducts"])
    },
    created(){
        eventBus.$on('implementExpense', (expense) => {
            this.loss(expense)
        }),
        eventBus.$on('extractProduct', (p) => {
            this.gain(p)
        })
        this.init()
    },
    methods:{
        ...mapActions(["initBudgetAsync","initExpenseAsync","initIncomeAsync", "setProductsAsync"]),
        init(){
            this.getItems("money")
                .then( response => {
                    this.initBudgetAsync(parseFloat(response.body.budget));
                    this.initIncomeAsync(parseFloat(response.body.income));
                    this.initExpenseAsync(parseFloat(response.body.expense));
                })
            this.getItems("products")
                .then(response => {
                    this.setProductsAsync(response)
                })
        },
        loss(expense){
            let money = {
                budget : parseFloat(this.getBudget)-expense,
                expense : parseFloat(this.getExpense)+expense,
                income : parseFloat(this.getIncome),
            }
            this.updateItem("money",money)
                .then(response => {
                     this.init();
                })
        },
        gain(p){
            let product = this.getProducts.find(x => x.id == p.id)
            let gain = parseFloat(product.content.price) * parseFloat(p.amount)
            let money = {
                budget : parseFloat(this.getBudget)+gain,
                expense : parseFloat(this.getExpense),
                income : parseFloat(this.getIncome)+gain,
            }
            product.content.amount = parseFloat(product.content.amount) - parseFloat(p.amount);
            this.updateItem("products/"+product.id,product.content)
                .then(reponse=> {
                    this.updateItem("money",money)
                        .then(response => {
                            this.init();
                        })
                })
        }
    }
}
</script>

<style>
    .frame{
        box-shadow: 3px 3px 10px;
    }
</style>
