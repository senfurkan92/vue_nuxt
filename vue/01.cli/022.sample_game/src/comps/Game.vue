<template>
    <div key="game" class="bg-dark" style="height:100vh">
        <div v-show="isAlerted" class="alert alert-danger w-50 rounded" style="position: absolute; z-index:10; top:25%; left:50%; transform: translateX(-50%)">
            <h1 class="text-center">Chose your pokemon!!!</h1>
        </div>
        <div class="row p-0 m-0">
            <div class="col-2" v-for="(pokeImg,index) in getRandomPokeImgs" :key="index">
                <transition
                enter-active-class="animated flipInY"
                leave-active-class="animated flipInY absolute"
                move-class="slowly"
                mode="out-in"
                appear>
                    <div :class="['p-2', 'mycard', 'h-100', 'bg-light', {'chosen': chosenPoke == pokeImg}]" @mousedown="chose(pokeImg)">
                        <img class="myimg" :src="pokeImg" width="100%"/>
                    </div>
                </transition>
            </div>
        </div>
        <div class="row mt-5 p-0 m-0">
            <div class="offset-5"></div>
            <div class="col-2">
                <transition
                enter-active-class="animated flipInX"
                leave-active-class="animated flipOutX"
                mode="out-in"
                appear>
                    <div class="p-2 mycard h-100 bg-light" @click="compare()" v-if="!isCompared" key="questionMark">
                        <img class="myimg" src="src/assets/closed.png" width="100%"/>
                    </div>
                    <div class="p-2 mycard h-100 bg-light" v-else key="askedPoke">
                        <img class="myimg" :src="askedPoke" width="100%"/>
                    </div>
                </transition>
            </div>
            <div class="offset-5"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pokeImgs : ["src/assets/balb.png","src/assets/cha.png","src/assets/ivy.png","src/assets/pika.png","src/assets/squi.png","src/assets/sand.png"],
            chosenPoke : "",
            randomPokeImgs :[],
            askedPoke : "",
            isCompared : false,
            isAlerted:false,
        }
    },
    created(){
        let index = Math.floor(Math.random() * this.pokeImgs.length-1);
        this.askedPoke = this.pokeImgs.splice(index,1)[0];
        this.pokeImgs.splice(index,0,this.askedPoke);
    },
    methods:{
        chose(pokeImg){
            this.chosenPoke = pokeImg[0]
        },
        compare()
        {
            if(this.chosenPoke == "")
            {
                this.isAlerted = true;
                setTimeout(()=>{this.isAlerted=false},1000)
                return
            }
            this.isCompared = true;
            setTimeout(()=>{
                if(this.askedPoke == this.chosenPoke)
                {
                    this.$emit("result","appWin");
                }
                else
                {
                    this.$emit("result","appLost");
                }
            },3000)
        }
    },
    computed:{
        getRandomPokeImgs()
        {
            while (this.randomPokeImgs.length < 6)
            {
                let index = Math.floor(Math.random() * this.pokeImgs.length-1);
                let path = this.pokeImgs.splice(index,1)
                this.randomPokeImgs.push(path)
            }
            return this.randomPokeImgs
        }
    }
}
</script>

<style scoped>
    .mycard{
        border-radius: 10%;
        border: 2px solid darkslategray;
        min-height: 250px;
    }
    .chosen{
        box-shadow: 4px 4px 8px 4px yellow;
    }
    .myimg{
        position: relative;
        top:50%;
        transform: translateY(-50%);
    }
    .slowly{
        transition: transform 1s;
    }
</style>