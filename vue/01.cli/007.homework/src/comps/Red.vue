<template>
    <app-panel :style="mystyle">
        <span slot="redMessage">Hi, I am Red</span>
    </app-panel>
</template>

<script>
import Panel from "./Panel"

export default {
    data(){
        return {
            mystyle : [{'border': '3px solid crimson'},{'background-color': 'rgba(224, 26, 26, 0.8)'}]
        }
    },
    components:{
        appPanel : Panel
    }
}
</script>

<style scoped>

</style>