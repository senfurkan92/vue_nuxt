<template>
    <div>
        <div class="memory">
            <slot name="heading"></slot>
        </div>
        <div class="memory">
            <slot name="content"></slot>
        </div>
        <div class="memory">
            <!-- default slot -->
            <slot></slot>
        </div>
        <div class="memory">
            <!-- slot default -->
            <slot name="author">
                <h3>Author</h3>
                <p>No information about author</p>
            </slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div.memory {
        border: 1px solid #ccc;
        box-shadow : 1px 1px 4px 0px #666;
        padding: 20px 20px;
        margin-top: 20px;
    }
</style>