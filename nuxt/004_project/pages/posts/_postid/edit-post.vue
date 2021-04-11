<template>
  <div>
      <app-post-process :post="getPost" :isPost="false">
          <h4 slot="process">Düzenle</h4>
      </app-post-process>
  </div>
</template>

<script>
import PostProcess from '@/components/posts/PostProcess'

export default {
    layout:"standart",
    components:{
        appPostProcess : PostProcess
    },
    computed:{
        getPost(){
            return this.$store.getters.getPostList.find(x=> x.id == this.$route.params.postid)
        }
    }
}
</script>

<style>

</style>