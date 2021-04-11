import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from './comps/productList/ProductList'
import ProductProcess from './comps/productProcess/ProductProcess'
import ProductExtract from './comps/productExtract/ProductExtract'

Vue.use(VueRouter);

let routes = [
    {
        path:"/",
        component: ProductList
    },
    {
        path:"/islemler",
        component: ProductProcess
    },
    {
        path:'/cikis',
        component: ProductExtract
    }
]

export const router = new VueRouter({
    mode:"history",
    routes:routes
})