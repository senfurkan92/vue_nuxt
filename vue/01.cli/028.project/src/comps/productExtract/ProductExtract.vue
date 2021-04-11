<template>
    <div>
        <slot name="exitTitle"></slot>
        <slot></slot>
        <form class="w-100">
            <div class="row">
                <div class="col-12 mb-2">
                    <label><b>Ürün Adı :</b></label>
                    <select type="text" :class="['form-control', {'is-invalid':$v.product.id.$error}]" v-model="product.id" @blur="$v.product.id.$touch()">
                        <option selected></option>
                        <template v-for="p in getProducts">
                            <option :key="p.id" :value="p.id" v-if="p.content.amount>0">{{p.content.name}}</option>
                        </template>
                    </select>
                    <small v-if="!$v.product.id.required" class="text-danger">Gerekli</small>
                </div>
                <div class="col-12 mb-2">
                    <label><b>Adet : </b></label><br>
                    <small>(Stok : {{product.stock}})</small>
                    <input type="number" :class="['form-control', {'is-invalid':$v.product.amount.$error}]" v-model="product.amount" @blur="$v.product.amount.$touch()"
                    min="0" :max="product.stock"/>
                    <small v-if="!$v.product.amount.required" class="text-danger">Gerekli</small>
                    <small v-if="!$v.product.amount.minValue" class="text-danger">Cücük !!!</small>
                </div>
                <div class="col-12 text-right mt-2">
                    <button class="btn btn-success" :disabled="$v.product.$invalid" type="button" @click="extract()">Kaydet</button>
                </div>
            </div>
        </form>
        <app-alert :content="message.content" :bgColor="message.bgColor" v-if="message.show"></app-alert>
    </div>
</template>

<script>
import {required, numeric, minValue} from "vuelidate/lib/validators"
import {mapGetters, mapMutations, mapActions} from 'vuex'
import Alert from "../layout/Alert"
import {crudMixin} from "../../crudMixin"
import {eventBus} from '../../main'

export default {
    data(){
        return{
            product:{
                name:"",
                id:"",
                amount:0,
                stock:0
            },
            message:{
                bgColor:"danger",
                content:"deneme",
                show:false,
                duration:3000,
                interval: null,
            }
        }
    },
    mixins:[crudMixin],
    computed:{
        ...mapGetters(["getProducts"])
    },
    validations:{
        product:{
            id:{
                required : required,
            },
            amount:{
                required,
                minValue : minValue(0),
            }
        }
    },
    components:{
        appAlert : Alert
    },
    watch:{
        "message.show"(){
            if(this.message.show){
            clearInterval(this.interval);
            this.interval = setTimeout(()=>{
                    this.message.show = false;
                },this.message.duration)
            }
        },
        "product.amount"(){
            this.product.amount = +this.product.amount > +this.product.stock ? +this.product.stock : +this.product.amount
        },
        "product.id"(){
            let p = this.getProducts.find(x => x.id == this.product.id)
            this.product.stock = p.content.amount
        }
    },
    methods:{
        ...mapActions(["setBudgetAsync","setIncomeAsync"]),
        extract(){
            eventBus.emitter("extractProduct", {id : this.product.id, amount : this.product.amount})
            this.product = {
                name:"",
                id:"",
                amount:0,
                stock:0
            }
        }
    }
}
</script>

<style>

</style>