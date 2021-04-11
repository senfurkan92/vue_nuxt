<template>
  <div class="w-100 mt-2 mypanel">
        <form class="p-3">
            <div class="w-100">
                <textarea v-model="translateParagraph" rows="5" class="form-control" placeholder="Çevirmek istediğiniz kelime/cümle yazınız"></textarea>
                <select v-model="detectedLanguage" class="form-control mt-1"></select>
            </div>
            <div class="pb-3">
                Tespit Edilen Dil : {{detectedLanguage}}
            </div>
            <div class="w-100">
                <button class="btn btn-sm btn-primary w-100 text-center" type="button">Transalate</button>
            </div>
        </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            detectedLanguage:"",
            translateParagraph:""
        }
    },
    methods:{
        translate(){

        }
    }
}
</script>

<style>
    .mypanel{
        background-color: aliceblue;
        box-shadow: 0px 0px 4px 2px gray;
    }
</style>