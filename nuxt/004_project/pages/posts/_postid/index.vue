<template>
  <div>
    <app-post-detail :post="getPost">
    </app-post-detail>
  </div>
</template>

<script>
import PostDetail from "@/components/posts/PostDetail";

export default {
    layout: "standart",
    computed:{
      getPost(){
        return this.$store.getters.getPostList.find(x => x.id == this.$route.params.postid)
      }
    },
    components: {
        appPostDetail: PostDetail,
    },
};
</script>

<style>
</style>