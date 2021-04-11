
<template>
    <div v-bind:style="getStyle" class="rounded">
        {{productCount}}/10
    </div>
</template>

<script>
export default {
    props:{
        productCount : String,
    },
    computed:{
        getStyle(){
            var color = 'white';
            var count = parseInt(this.productCount);
            if(count>3)
            {
                color = 'green'
            }
            if(count>5)
            {
                color = 'yellow'
            }
            if(count>7)
            {
                color = 'orange'
            }
            if(count>9)
            {
                color = 'red'
            }
            return {'background':color,'width': parseInt(count)*10+'%','height':'30px'}
        }
    }
}
</script>

<style scoped>

</style>