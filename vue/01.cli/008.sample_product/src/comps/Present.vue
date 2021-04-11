<template>
    <div class="row">
        <div class="col-2 mt-1" v-for="(product, index) in presentedProducts" :key="index">
            <div class="w-100 h-100 p-1 bg-light rounded">
                <div class="w-100 text-center mt-2"> 
                    <img :src="product.imgPath" height="100" width="100"/>
                </div>
                <div class="pr-3 pl-3 pt-2">
                    <p>Name : {{product.name}}</p>
                    <p>Quantity : {{product.quantity}}</p>
                    <p>Price : {{product.price}}</p>
                </div>                
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        presentedProducts : Array
    }
}
</script>

<style scoped>

</style>