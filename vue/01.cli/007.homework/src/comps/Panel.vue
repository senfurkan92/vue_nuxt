<template>
    <div >
        <h2 class="valign" :style="mystyle">
            <slot name="redMessage"></slot>
            <slot name="blueMessage"></slot>
            <slot name="greenMessage"></slot>
        </h2>     
    </div>
</template>

<script>
export default {
    props: {
        mystyle:[]
    }
}
</script>

<style scoped>
    div{
        width: 100%;
        min-height: 75px;
        text-align: center;
        border-radius: 10px;
        color:white;
        font-size: 1.5em;
        margin-top: 20px;
    }

    .valign{
        position: relative;
        top: 50%;
        transform: translateY(+45%);
        margin: 0;
        padding: 0;
    }
</style>