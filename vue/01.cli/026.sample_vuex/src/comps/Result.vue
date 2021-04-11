<template>
    <div>
        <p class="counter-container">Sayaç : {{getDoubleCounter}}</p>
        <p>{{getDescriptedCounter}}</p>
    </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
    props: ["counter"],
    // computed: mapGetters([
    //     "getDoubleCounter",
    //     "getDescriptedCounter"
    // ]),
    // computed: mapGetters({
    //     "getDoubleCounter" : double,
    //     "getDescriptedCounter" : stringC
    // })
    computed: {
        ...mapGetters([
            "getDoubleCounter",
            "getDescriptedCounter"
        ]),
        another(){

        },
        other(){

        }
    }
}
</script>

<style scoped>
    .counter-container{
        border: 1px solid #aa7f08;
        padding: 10px 5px;
        background-color: azure;
        font-size: 20px;
        color: #000;
    }
</style>