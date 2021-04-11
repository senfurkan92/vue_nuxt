<template>
    <div class="row">
        <div class="col-5">
            <app-Img @currentImgPath="traceImgPath=$event">
                <h5 class="w-100 text-center text-info">Ürün Resmi</h5>
            </app-Img>
        </div>
        <div class="col-7">
            <app-detail @details="emitProduct($event)">
                <h5 class="w-100 text-center text-info">Ürün Detayları</h5>
            </app-detail>
        </div>
    </div>    
</template>

<script>
import Infoinputimg from "./Infoinputimg"
import Infoinputdetail from "./Infoinputdetail"
export default {
    data() {
        return {
            traceImgPath : "/src/assets/product.png" 
        }
    },
    components:{
        appImg : Infoinputimg,
        appDetail : Infoinputdetail
    },
    methods:{
        emitProduct(e){
            e.imgPath = this.traceImgPath;
            this.$emit("emitProduct",e);
        }
    }
}
</script>

<style scoped>

</style>