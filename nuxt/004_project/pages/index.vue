<template>
  <div>
    <app-post-cards :posts="getPostList"></app-post-cards>
    <nuxt-child/>
  </div>
</template>

<script>
import PostCards from "@/components/posts/PostCards"

export default {
  layout:"standart",
  loading: {
    continuous: true
  },
  components:{
    appPostCards : PostCards
  },
  computed:{
    getPostList(){
      return this.$store.getters.getPostList;
    }
  },
  // one page structure
  // created(){
  //   setTimeout(()=>{
  //     this.postList = PostList
  //   },1500)
  // },
  // server side render, waiting during loading
  // asyncData(context,callback){
  //   setTimeout(()=>{
  //     callback(null,{postList:PostList})
  //   },3000)
  // }
}
</script>

<style>

</style>