<template>
    <div class="w-100 text-center mt-5">
        <div class="d-flex justify-content-center">
            <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                    <button class="btn btn-danger" @click="emitComponent('appRed')">Red</button>
                </div>
                <div class="p-2 bd-highlight">
                    <button class="btn btn-info" @click="emitComponent('appBlue')">Blue</button>
                </div>
                <div class="p-2 bd-highlight">
                    <button class="btn btn-success" @click="emitComponent('appGreen')">Green</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        emitComponent(comp)
        {
            this.$emit("activePanel", comp)
        }
    }
}
</script>

<style scoped>
    button{
        min-width: 200px;
    }
</style>