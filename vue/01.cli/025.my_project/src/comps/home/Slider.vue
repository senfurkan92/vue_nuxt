<template>
    <div style="position:relative">
        <transition-group type="animation" name="slide" mode="out-in">
            <template v-for="(slide,index) in slides">
                <app-slide :key="slide.id" :imgPath="slide.imgPath" :infoLink="slide.infoLinkName" v-if="activeSlide == index">
                    <h2 slot="title">{{slide.title}}</h2>
                    <h3 slot="description">{{slide.description}}</h3>
                    <h5 slot="content">{{slide.content}}</h5>
                </app-slide>
            </template>
        </transition-group>
    </div>
</template>

<script>
import Slide from './Slide'

export default {
    data(){
        return{
            activeSlide :0,
            slides : [
                {id: 1, title:"Title-1", description: "Description-1", content: "Content-1", imgPath: "./src/assets/imgs/vue.png", infoLinkName:"asd"},
                {id: 2, title:"Title-2", description: "Description-2", content: "Content-2", imgPath: "./src/assets/imgs/vue.png", infoLinkName:"asd"},
                {id: 3, title:"Title-3", description: "Description-3", imgPath: "./src/assets/imgs/vue.png", infoLinkName:"asd"},
            ],
        }
    },
    components : {
        appSlide:Slide
    },
    created(){
        setInterval(()=>{
            if(this.activeSlide + 1 == this.slides.length)
            {
                this.activeSlide = 0
            }
            else
            {
                this.activeSlide++;
            }
        },5000)
    }
}
</script>

<style scoped>
    .slide-enter{
        opacity: 0.5;
    }

    .slide-enter-active{
        animation-name: slide-in;
        animation-duration: 2s;
    }

    .slide-leave{
        opacity: 0.5;
    }

    .slide-leave-active{
        animation-name: slide-out;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }


    @keyframes slide-in {
        from{
            transform: translateX(-1500px);
            opacity: 0.5;
        }
        to{
            transform: translateX(0px);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        to{
            transform: translateX(1500px);
            opacity: 0.5;
        }
        from{
            transform: translateX(0px);
            opacity: 1;
        }
    }
</style>