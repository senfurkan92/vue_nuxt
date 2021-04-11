<template>
  <div>
      <app-post-process :isPost="true">
          <h4 slot="process" @submit="submit($event)">Yeni Ekle</h4>
      </app-post-process>
  </div>
</template>

<script>
import PostProcess from '@/components/posts/PostProcess'

export default {
    layout:"admin",
    components:{
        appPostProcess : PostProcess
    },
    methods:{
        submit(event){
            this.$emit("submit",event)
        }
    }
}
</script>

<style>

</style>