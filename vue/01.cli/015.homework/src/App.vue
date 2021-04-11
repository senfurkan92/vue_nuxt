<template>
  <div class="container mt-3">
    <p>{{message1 | reverseTxt}}</p>
    <p>{{message2 | modifyTxt}}</p>
    <p>{{reverseTxt}}</p>
    <p>{{modifyTxt}}</p>
  </div>
</template>

<script>
import {mymixin} from './mymixin'
export default {
  data(){
    return{
      message1 : "Merhaba dünya !",
      message2 : "merhabaMars"
    }
  },
  filters:{
    reverseTxt(value){
      return value.split('').reverse().join('');
    },
    modifyTxt(value){
      return `${value}.com (${value.length})`;
    }
  },
  mixins:[mymixin]
}
</script>

<style>

</style>
