<template>
    <div>
        <slot name="processTitle"></slot>
        <slot></slot>
        <form class="w-100">
            <div class="row">
                <div class="col-12 mb-2">
                    <label><b>Ürün Adı :</b></label>
                    <input type="text" :class="['form-control', {'is-invalid':$v.product.name.$error}]" v-model="product.name" @blur="$v.product.name.$touch()"/>
                    <small v-if="!$v.product.name.required" class="text-danger">Gerekli</small>
                    <small v-if="!$v.product.name.minLength" class="text-danger">Minimum {{$v.product.name.$params.minLength.min}} karakter</small>
                    <small v-if="!$v.product.name.maxLength" class="text-danger">Maksimum {{$v.product.name.$params.maxLength.max}} karakter</small>
                </div>
                <div class="col-12 mb-2">
                    <label><b>Adet :</b></label>
                    <input type="number" :class="['form-control', {'is-invalid':$v.product.amount.$error}]" v-model="product.amount" @blur="$v.product.amount.$touch()"/>
                    <small v-if="!$v.product.amount.required" class="text-danger">Gerekli</small>
                    <small v-if="!$v.product.amount.decimal" class="text-danger">Sadece sayısal değer</small>
                    <small v-if="!$v.product.amount.minValue" class="text-danger">Sadece 0'dan büyük</small>
                </div>
                <div class="col-12 mb-2">
                    <label><b>Fiyat :</b></label>
                    <input type="number" :class="['form-control', {'is-invalid':$v.product.price.$error}]" v-model="product.price" @blur="$v.product.price.$touch()"/>
                    <small v-if="!$v.product.price.required" class="text-danger">Gerekli</small>
                    <small v-if="!$v.product.price.decimal" class="text-danger">Sadece sayısal değer</small>
                    <small v-if="!$v.product.price.minValue" class="text-danger">Sadece 0'dan büyük</small>
                </div>
                <div class="col-12 mb-2">
                    <label><b>Açıklama :</b></label>
                    <textarea type="text" :class="['form-control', {'is-invalid':$v.product.description.$error}]" v-model="product.description" @blur="$v.product.description.$touch()">
                    </textarea>
                    <small v-if="!$v.product.description.maxLength" class="text-danger">Maksimum {{$v.product.description.$params.maxLength.max}} karakter</small>
                </div>
                <div class="col-12 text-right mt-2">
                    <button class="btn btn-success" :disabled="$v.product.$invalid" type="button" @click="insert()">Kaydet</button>
                </div>
            </div>
        </form>
        <app-alert :content="message.content" :bgColor="message.bgColor" v-if="message.show"></app-alert>
    </div>
</template>

<script>
import {required, minLength, maxLength, minValue, maxValue, numeric, decimal} from "vuelidate/lib/validators"
import {mapGetters, mapMutations, mapActions} from 'vuex'
import Alert from "../layout/Alert"
import {crudMixin} from "../../crudMixin"
import {eventBus} from "../../main"

export default {
    data(){
        return {
            product:{
                name:"",
                amount:0,
                price:0,
                description:""
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
    validations:{
        product:{
            name:{
                required,
                minLength : minLength(2),
                maxLength : maxLength(50)
            },
            amount:{
                required,
                decimal,
                minValue : minValue(1)
            },
            price:{
                required,
                decimal,
                minValue : minValue(0)
            },
            description:{
                maxLength : maxLength(100)
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
        }
    },
    methods:{
        ...mapActions(["setBudgetAsync","setExpenseAsync"]),
        insert()
        {
            this.message.show = false;
            this.insertItem("products", this.product)
                .then(response => {
                    if(response.ok)
                    {
                        this.message.bgColor="success";
                        this.message.content = `'${response.body.name}' ID'li ürün eklendi`;
                        this.message.show = true;
                        let expense = parseFloat(this.product.amount) * parseFloat(this.product.price)
                        eventBus.emitter("implementExpense", expense)
                    }
                    else
                    {
                        this.message.bgColor="warning";
                        this.message.content = "Beklenmedik bir hata oluştu";
                        this.message.show = true;
                    }
                })
        }
    }
}
</script>
