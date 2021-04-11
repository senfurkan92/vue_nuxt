export const mymixin = {
    data(){
        return{
          mixinmessage1 : "Mixin Merhaba dünya !",
          mixinmessage2 : "mixinmerhabaMars"
        }
      },    
      computed:{
        reverseTxt(){
          return this.mixinmessage1.split('').reverse().join('');
        },
        modifyTxt(){
          return `${this.mixinmessage2}.com (${this.mixinmessage2.length})`;
        }
      }
}