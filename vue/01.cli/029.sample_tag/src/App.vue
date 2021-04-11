<template>
  <div class="p-5">
    <app-tags v-for="(tags,index) in tagsMatris" :key="index" v-model="tagsMatris[index]"
    :textColor="themes[index].textColor" :bgColor="themes[index].bgColor"></app-tags>
  </div>
</template>

<script>
import Tags from './assets/components/Tags'

export default {
  components:{
    appTags : Tags
  },
  data(){
    return{
      tagsMatris:[
         [],
         [],
         [],
         [],
         []
      ],
      themes:[
        {textColor:"text-light", bgColor:"bg-dark"},
        {textColor:"text-light", bgColor:"bg-danger"},
        {textColor:"text-light", bgColor:"bg-info"},
        {textColor:"text-light", bgColor:"bg-secondary"},
        {textColor:"text-light", bgColor:"bg-warning"},
      ]
    }
  }
}
</script>

<style>

</style>