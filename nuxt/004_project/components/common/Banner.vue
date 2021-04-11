<template>
    <div class="w-100">
        <div class="mybanner" style="">
            <div class="h1 text-danger mycenter">{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            require:false,
            default:'Title'
        }
    }
}
</script>

<style scoped>
    .mycenter{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
    }

    .mybanner{
        background-image: url(../../static/images/articlewp.jpg);
        background-size: cover;
        width: 100%;
        height: 500px;
        position: relative;
        text-align: center;
    }
</style>