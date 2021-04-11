<template>
    <div :class="`alert alert-${bgColor} alert_move`" role="alert">
        {{content}}
    </div>
</template>

<script>
export default {
    props:{
        content:String,
        bgColor:String
    }
}
</script>

<style scoped>
    .alert_move{
        position: absolute;
        animation: alertAnim;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }

    @keyframes alertAnim{
        from{
            top:50px;
            left:50%;
            transform: translateX(-50%);
        }
        to{
            top:120px;
            left:50%;
            transform: translateX(-50%);
        }
    }
</style>