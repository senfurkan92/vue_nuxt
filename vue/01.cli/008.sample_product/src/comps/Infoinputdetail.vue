<template>
    <div class="w-100 h-100">
        <div class="float-left mydiv">
            <slot></slot>
            <form class="pt-3 pr-5 pl-5 mt-4">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="productName">Ürün Adı</label>
                            <input ref="productName" type="text" class="form-control" id="productName" aria-describedby="productNameHelp">
                            <small id="productNameHelp" class="form-text text-muted">Detaylı bilgi veriniz.</small>
                        </div>
                    </div>
                    <div class="col-6">
                         <div class="form-group">
                            <label for="productQuantity">Ürün Miktarı</label>
                            <input ref="productQuantity" type="text" class="form-control" id="productQuantity" aria-describedby="productQuantityHelp">
                            <small id="productQuantityHelp" class="form-text text-muted">Detaylı bilgi veriniz.</small>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="productPrice">Ürün Fiyatı</label>
                            <input ref="productPrice" type="text" class="form-control" id="productPrice" aria-describedby="productPriceHelp">
                            <small id="productPriceHelp" class="form-text text-muted">Detaylı bilgi veriniz.</small>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-info float-right mt-4" @click="submit" type="button">
                            Kaydet
                        </button>
                    </div>
                </div>               
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        submit(){
            var name = this.$refs.productName.value;
            var quantity = this.$refs.productQuantity.value;
            var price = this.$refs.productPrice.value;
            var product = `{"name":"${name}","quantity":"${quantity}","price":"${price}"}`;
            var obj = JSON.parse(product)
            this.$emit("details", obj)
        }
    }
}
</script>

<style scoped>
    .mydiv{
        height: 400px;
        width: 90%;
        border-radius: 10px;
        border: 2px solid darkgray; 
        box-shadow: 1px 3px 10px 2px black;
        background: blanchedalmond;
    }
</style>