<template>
    <div class="row parentBg p-4">
        <!-- parent content -->
        <div class="col-12">
            <h2>Parent Component ({{user}})</h2>
            <span>Burası parent component yani herşeyin import edildiği component:)</span>
            <div class="row">
                <div class="col-6"><input class="form-control" v-model="name1"/></div>
                <div class="col-6"><input class="form-control" v-model="name2"/></div>
            </div>
        </div>
        <hr class="w-100 bg-light">
        <!-- child1 content -->
        <div class="col-6">
            <child-first :name="name1" @data="makeCommonUser($event)"></child-first>
        </div>
        <!-- child2 content -->
        <div class="col-6">
            <child-second :name="name2"></child-second>
        </div>
    </div>
</template>

<script>
import ChildFirst from "./ChildFirst.vue"
import ChildSecond from "./ChildSecond.vue"
export default {
    data(){
        return {
            name1:"Furkan",
            name2:"Hayris",
            user:"Not Defined"
        }
    },
    components:{
        childFirst : ChildFirst,
        ChildSecond : ChildSecond
    },
    methods:{
        makeCommonUser(event){
            this.user = event,
            this.name2 = event
        }
    }
}
</script>

<style scoped>
    .parentBg{
        background-color: cadetblue;
    }
</style>