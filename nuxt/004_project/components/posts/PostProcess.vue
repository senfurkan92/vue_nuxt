<template>
  <div>
      <div class="d-flex justify-content-center">
        <div class="p-2 bd-highlight">
            <form style="min-width:500px" @submit.prevent="submit()">
                <slot name="process"></slot>
                <label>Başlık</label>
                <input type="text" class="form-control" v-model="postEdited.title"/>
                <label>Alt Başlık</label>
                <input type="text" class="form-control" v-model="postEdited.subtitle"/>
                <label>Açıklama</label>
                <textarea class="form-control" rows="5" v-model="postEdited.description"></textarea>
                <button class="btn btn-sm btn-outline-success mt-3">Kaydet</button>
            </form>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  props:{
    isPost: Boolean,
    post:{
      type:Object,
      required:false,
      default(){
        return{
          id:"",
          title:"",
          subtitle:"",
          description:""
        }
      }
    }
  },
  data(){
    return{
      postEdited : {}
    }
  },
  mounted(){
    this.postEdited = {
      title: this.post.title,
      subtitle: this.post.subtitle,
      description: this.post.description
    }
  },
  methods:{
    submit(){
      if(this.isPost){
        this.$store.dispatch("insertPostAsync",this.postEdited).then(x=> {if(x){this.$router.push('/admin')}})
      }
      else
      {
        this.$store.dispatch("updatePostAsync",{id:this.post.id, ...this.postEdited}).then(x=> {if(x){this.$router.push('/admin')}})
      }
    }
  }
}
</script>

<style>

</style>