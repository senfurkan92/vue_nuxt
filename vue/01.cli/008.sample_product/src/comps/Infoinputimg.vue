<template>
    <div class="w-100 h-100">
        <div class="float-right mydiv" >
            <slot></slot>
            <div class="w-100 text-center pt-1">
                <img id="preview" v-bind:src="imgPath" height=300 width=300/>
            </div>
            <div class="w-100 text-center pr-5 pl-5">
                <input class="form-control bg-transparent valign" accept=".img, .png, .jpg, .jpeg" style="border:0" type="file" @change="fileUploaded"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           imgPath : "/src/assets/product.png" 
        }
    },
    methods:{
        fileUploaded(e){
            var file = e.target.files[0];
            var currentImgPath = URL.createObjectURL(file);
            this.imgPath = currentImgPath;
            this.$emit("currentImgPath", currentImgPath);
        }
    }
}
</script>

<style scoped>
    .mydiv{
        height: 400px;
        width: 350px;
        border-radius: 10px;
        border: 2px solid darkgray; 
        box-shadow: 1px 3px 10px 2px black;
        background: blanchedalmond;
    }
</style>