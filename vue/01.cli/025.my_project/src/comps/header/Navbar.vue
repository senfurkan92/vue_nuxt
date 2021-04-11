<template>
<div>
   <nav :style="'z-index:100; position:fixed; width:100%; top:'+getNavbarTop+'px'">
       <button class="btn btn-primary toggleBtn" v-if="getToggleShow" @click="isToggleClicked = !isToggleClicked"><span :class="getToggleShowContent"></span></button>
       <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp" appear>
        <div class="d-flex justify-content-center w-100" v-if="getNavbarColumnShow" :style="[{'z-index':0}, {'backgroundColor':'rgb(240,239,235,1)'},{position:getBigWindow?'solid':'absolute'}]">
                <div :class="'d-flex flex-'+getAlign+' bd-highlight'">
                    <div class="p-3 bd-highlight text-center" style="width:150px" v-for="item in navbarItems" :key="item.id" :id="'navItem'+item.id">
                        <a class="nav-link" :href="item.path" v-if="item.subtitles.length==0">{{item.title | upperCase}}</a>
                        <a class="nav-link dropdown-toggle" :href="item.path" :id="'navLink'+item.id" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-if="item.subtitles.length>0">
                            {{item.title | upperCase}}
                        </a>
                        <div class="dropdown-menu" :aria-labelledby="'navLink'+item.id" v-if="item.subtitles.length>0" style="min-width:200px">
                            <a class="dropdown-item" :href="subtitle.path" v-for="(subtitle,index) in item.subtitles" :key="index">{{subtitle.title | upperCase}}</a>
                        </div>
                    </div>
                </div>
        </div>
       </transition>
   </nav>
</div>
</template>

<script>
export default {
    data(){
        return {
            windowWidth: window.innerWidth,
            windowTop : window.scrollY,
            navbarItems:[
                {id:1, title:"Flex item 1", path: "#", subtitles:[]},
                {id:2, title:"Flex item 2", path: "#", subtitles:[]},
                {id:3, title:"Flex item 3", path: "#", subtitles:[]},
                {id:4, title:"Flex item 4", path: "#", subtitles:[]},
                {id:5, title:"Flex item 5", path: "#", subtitles:[{title:"sub1",path:"#"},{title:"sub2",path:"#"}]},
                {id:6, title:"Flex item 6", path: "#", subtitles:[{title:"sub1",path:"#"}]},
            ],
            isToggleClicked: false
        }
    },
    created()
    {
        window.addEventListener("resize", ()=>{
            this.windowWidth = window.innerWidth
            this.windowTop = window.scrollY
        }),
        window.addEventListener("scroll", ()=>{

            this.windowTop = window.scrollY
            console.log(this.windowTop<60 ? 60 : 0)
        } )
    },
    computed:{
        getAlign()
        {
            return this.windowWidth>900?'row':'column'
        },
        getBigWindow()
        {
            return this.windowWidth>900?true:false
        },
        getToggleShow()
        {
            return this.windowWidth>900?false:true
        },
        getToggleShowContent()
        {
            return this.isToggleClicked?"fa fa-arrow-up":"fa fa-arrow-down"
        },
        getNavbarColumnShow()
        {
            if(this.windowWidth>900)
            {
                return true;
            }
            else
            {
                return this.isToggleClicked ? true : false;
            }
        },
        getNavbarTop()
        {
            return this.windowTop<60 ? 60-this.windowTop : 0
        }
    },
    filters:{
        upperCase(value){
            return value.toUpperCase()
        }
    }
}
</script>

<style scoped>
    .toggleBtn{
        position: relative;
        float: right;
        right:50px;
        top:5px;
        z-index: 10;
    }
</style>