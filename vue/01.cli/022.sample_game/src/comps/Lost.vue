<template>
    <div key="lost" class="bg-warning w-100" style="height:100vh">
        <h1 class="text-center valign">YOU LOST</h1>
        <div class="w-100 valign text-center">
            <button class="btn btn-secondary" @click="again()">Play Again</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        again(){
            this.$emit("result","appGame");
        }
    }
}
</script>

<style scoped>
    .valign{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
</style>