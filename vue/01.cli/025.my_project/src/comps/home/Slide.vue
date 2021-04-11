<template>
    <div>
        <img :src="imgPath" :style="getSlideStyle"/>
        <div :style="getContentStyle">
            <slot name="title"></slot>
            <slot name="description"></slot>
            <slot name="content"></slot>
            <button class="btn btn-info" style="width:200px" @click="routeInfo">Bilgi Al</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            windowWidth: window.innerWidth
        }
    },
    props:{
        imgPath: String,
        infoLink: String,
    },
    created(){
        window.addEventListener("resize",()=>{
            this.windowWidth= window.innerWidth
        })
    },
    computed:{
        getSlideStyle(){
            let heightRatio = this.windowWidth>1500 ? 100 : 100 - (1500-this.windowWidth)/9
            heightRatio = heightRatio<55 ? 55 : heightRatio
            return {
                height: heightRatio + 'vh',
                width: 100+'%',
                'z-index': '-2',
                position: 'absolute',
                top: 0,
                left: 0,
            }
        },
        getContentStyle()
        {
            let heightRatio = this.windowWidth>1500 ? 500 : 400 - (1500-this.windowWidth)/2
            heightRatio = heightRatio<210 ? 210 : heightRatio
            return {
                position: 'absolute',
                left: 15 +'%',
                top: heightRatio +'px',
                transform: 'translateY(-50%)',
                'z-index': '-2',
                'box-shadow': 'inset -10px 5px 50px 30px rgb(255,241,230,0.5)',
                padding : 50 + 'px',
                'border-radius' : 10 + '%'
            }
        }
    },
    methods:{
        routeInfo()
        {
            this.$router.push[infoLink];
        }
    }
}
</script>

<style scoped>
    .contentFrameOuter{
        box-shadow: -30px -30px 30px 10px rgb(255,241,230,1);
        border-radius: 10%;
    }
    .contentFrameInner{
        box-shadow: inset -30px -30px 30px 10px rgb(255,241,230,1);
        border-radius: 10%;
        padding: 50px;
    }
</style>