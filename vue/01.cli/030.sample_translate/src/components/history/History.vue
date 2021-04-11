<template>
  <div class="w-100 mt-2 mypanel">
      <h5 class="w-100 p-3 text-center">Arama Geçmişi</h5>
      <template v-for="(record,index) in records">
          <app-record :key="index">
              <span slot="fromLanguage">{{record.fromLanguage}}</span>
              <span slot="toLanguage">{{record.toLanguage}}</span>
              <span slot="content">{{record.content}}</span>
          </app-record>
      </template>
  </div>
</template>

<script>
import Record from './Record'

export default {
    data(){
        return{
            records:[]
        }
    },
    components:{
        appRecord : Record
    }
}
</script>

<style>

</style>