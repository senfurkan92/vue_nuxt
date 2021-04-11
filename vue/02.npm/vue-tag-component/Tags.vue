<template>
    <div class="tag-container">
      <div>
        <span v-for="(t,index) in tags" :key="index">
          <app-tag :content="t" @close="selfClose(index)" :textColor="textColor" :bgColor="bgColor"></app-tag>
        </span>
        <input v-model="newTag" @keypress.enter="add()" @keydown.backspace="remove()">
      </div>
      <div class="w-100">
        <small v-if="invalid" class="text-danger">Zaten mevcut</small>
      </div>
    </div>
</template>

<script>
import Tag from './Tag'

export default {
    props:{
        value:{
            required : false
        },
        textColor :{
            required: false
        },
        bgColor: {
            required: false
        }
    },
    data(){
        return{
        tags:[],
        newTag:"",
        }
    },
    watch:{
        tags(){
            this.$emit('input',this.tags.join(','))
        }
    },
    created(){
        if(this.value)
        {
            if(this.value.length>0)
            {
                this.tags = this.value.split(',');
            }
        }
    },
    computed:{
        invalid(){
        return this.tags.includes(this.newTag)
        }
    },
    methods:{
        add(){
            if(!this.invalid && this.newTag != "")
            {
                this.tags.push(this.newTag);
                this.newTag = "";
            }
        },
        remove(){
            if(this.newTag == "" && this.tags.length>0)
            {
                this.tags.splice(this.tags.length-1,1);
            }
        },
        selfClose(index)
        {
            this.tags.splice(index,1)
        }
    },
    components: {
        appTag : Tag
    }
}
</script>

<style>
 input{
    padding-top: 7px;
    padding-bottom: 7px;
    font-size: 14px;
  }

  .tag-container{
    padding:10px;
    width: 100%;
    border: 2px solid gray;
    border-radius: 5px;
    margin-bottom: 2px;
  }
</style>