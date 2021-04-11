<template>
    <app-panel :style="mystyle">
        <span slot="blueMessage">Hi, I am Blue</span>
    </app-panel>
</template>

<script>
import Panel from "./Panel"

export default {
    data(){
        return {
            mystyle : [{'border': '3px solid darkblue'},{'background-color': 'rgba(100, 168, 177, 0.8)'}]
        }
    },
    components:{
        appPanel : Panel
    }
}
</script>

<style scoped>

</style>