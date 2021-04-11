<template>
  <div>
    <div class="w-100 text-center">
        <button class="btn btn-sm btn-dark tect-light" @click="$router.push('/admin/new-post')">Yeni Yazı Ekle</button>
    </div>
    <app-post-cards :posts="getPostList" :isAdmin="true">
    </app-post-cards>
  </div>
</template>

<script>
import PostCards from '@/components/posts/PostCards'

export default {
    layout:"admin",
    components:{
        appPostCards:PostCards
    },
    computed:{
      getPostList(){
        return this.$store.getters.getPostList
      }
    }
}
</script>

<style>

</style>