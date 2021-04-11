export const mymixin = {
    data(){
        return {
          isShowed : true
        }
      },
      computed:{
        getState(){
          return this.isShowed? "Hide" : "Show";
        }
      },
      filters:{
        capital(value){
          return value.toUpperCase();
        }
      },
      directives :{
        "shadow":{
          bind(el, binding, vnode){
            if(binding.arg == "implement")
            {
              setTimeout(()=>{
                if(binding.modifiers["do"] != null){
                  if(binding.value!="")
                  {
                    el.style.boxShadow = "2px 2px 5px 1px " + binding.value;
                  }
                }
              },500)
            }
          }
        }
      }
}