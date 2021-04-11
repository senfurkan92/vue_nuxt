<template>
    <transition enter-active-class="animated swing">
        <div v-if="index==currentIndex" :key="index">
            <span class="fa fa-circle-o-notch text-warning turning h6" aria-hidden="true"></span>
            <span class="text-white blank">{{message}}</span>
            <span class="fa fa-md fa-circle-o-notch text-warning turning" aria-hidden="true"></span>
        </div>
    </transition>
</template>

<script>
export default {
    props:{
        message:String,
        index:null,
        currentIndex:null
    }
}
</script>

<style scoped>
    .blank{
        animation-name: blankAnim;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    @keyframes blankAnim {
        0% {opacity: 1;}
        25% {opacity: 0.7;}
        50% {opacity: 1;}
        75% {opacity: 0.7;}
        100% {opacity: 1;}
    }

    .turning{
        animation-name: turnAnim;
        animation-duration: 5s;
        animation-iteration-count: infinite;
    }

    @keyframes turnAnim {
        0% {transform: rotateZ(0deg);}
        100% {transform: rotateZ(360deg);}
    }
</style>
