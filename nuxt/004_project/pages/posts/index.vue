<template>
  <app-post-cards :posts="getPostList">
  </app-post-cards>
</template>

<script>
import PostCards from '@/components/posts/PostCards'

export default {
    layout:"standart",
    computed:{
      getPostList(){
        return this.$store.getters.getPostList;
      }
    },
    // data(){
    //   return{
    //     postList : []
    //   }
    // },
    // fetch(context)
    // {
    //   return new Promise((resolve,reject)=>{
    //     context.store.dispatch("setPostListAsync",[{id:1,title:"deneme",subtitle:"subdeneme",description:"desc"}])
    //     resolve()
    //   })
    // },
    // asyncData(context,callback){
    //   setTimeout(()=>{
    //     // return new Promise((resolve,reject)=>{
    //     //   resolve({postList:PostList});
    //     // })
    //     // .then(data=>{
    //     //   return data;
    //     // })
    //     // .catch(e=>{
    //     //   context.error(new Error());
    //     // })
    //     callback(null,{postList:PostList})
    //   },2000)
    // },
    components:{
        appPostCards:PostCards
    },
}
</script>

<style>

</style>