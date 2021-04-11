<template>
    <div class="row bannerBg pr-xl-5 pr-lg-5 pr-md-2 pr-sm-0 pl-xl-5 pl-lg-5 pl-md-2 pl-sm-0 m-0" style="z-index:100; position:absolute; width:100%">
        <div class="col-xl-4 col-lg-3 col-md-1 col-sm-1 text-left valign text-white">asd</div>
        <div class="col-xl-4 col-lg-6 col-md-10 col-sm-10 text-center valign">
            <app-topbannermessage v-for="(message, index) in messages" :index="index" :key="index" :message="messages[index]" :currentIndex="activeIndex"></app-topbannermessage>
        </div>
        <div class="col-xl-4 col-lg-3 col-md-1 col-sm-1 text-right valign text-white">asd</div>
    </div>
</template>

<script>
import Topbannermessage from "./Topbannermessage"

export default {
    data(){
        return{
            activeIndex : 0,
            messages:[
            "Ürünlerimiz katkı maddesi içermez",
            "Üreticiden, aracısız tüketiciye",
            "Anında, koşulsuz iade"
            ]
        }
    },
    components: {
        appTopbannermessage: Topbannermessage
    },
    created()
    {
        setInterval(()=> {
            if(this.activeIndex+1 >= this.messages.length)
            {
                this.activeIndex = 0
            }
            else
            {
                this.activeIndex++;
            }
        },5000)
    }
}
</script>

<style scoped>
    .bannerBg{
        background: linear-gradient(rgb(161,161,139,0.5), rgb(203,153,126,0.5));
        min-height: 60px;
    }
    .valign{
        position: relative;
        top: 50%;
        transform: translateY(+30%);
    }
</style>