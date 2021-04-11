<template>
    <app-panel :style="mystyle">
        <span slot="greenMessage">Hi, I am Green</span>
    </app-panel>
</template>

<script>
import Panel from "./Panel"

export default {
    data(){
        return {
            mystyle : [{'border': '3px solid darkgreen'},{'background-color': 'rgba(96, 199, 165, 0.8)'}]
        }
    },
    components:{
        appPanel : Panel
    }
}
</script>

<style scoped>

</style>