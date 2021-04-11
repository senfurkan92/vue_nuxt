<template>
    <span :class="['tag', bgColor, textColor]">
        <span  class="content">{{content}} </span>
        <small class="myclose" style="font-size=0.1em" @mousedown="close()">x</small>
    </span>
</template>

<script>
export default {
    props:{
        content:String,
        textColor :{
            required: false
        },
        bgColor: {
            required: false
        }
    },
    methods:{
        close(tag){
            this.$emit("close")
        }
    }
}
</script>

<style>
    .tag{
    cursor: default;
    padding:10px;
    border-radius: 5px;
    font-size: 14px;
    margin-right: 2px;
    margin-bottom: 5px;
  }

  .myclose{
    position: relative;
    top: -10px;
    left: 4px;
    cursor: pointer;
  }
</style>