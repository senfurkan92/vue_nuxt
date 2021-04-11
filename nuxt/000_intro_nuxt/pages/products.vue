<template>
    <div>
        <ul>
           <li v-for="product in products" :key="product.id">{{product.name}}</li>
        </ul>
    </div>
</template>

<script>


export default{
    data(){
        return{
            products:[
                {id:1,name:"elma"},
                {id:2,name:"armut"},
                {id:3,name:"kiraz"}
            ],
        }
    }
}
</script>

<style scoped>

</style>