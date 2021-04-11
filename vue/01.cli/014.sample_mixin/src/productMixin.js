export const productMixin = {
    data(){
        return{
          products : ["anahtar", "bardak", "PC", "Monitör", "Saat"],
          searched : ""
        }
      },
      computed : {
        getFilteredProducts()
        {
          return this.products.filter(x => x.toLowerCase().includes(this.searched.toLowerCase()))
        }
      },
      filters:{
        upper(value){
          return value.toUpperCase()
        }
      },
      directives:{
        "css" : {
          bind(el, binding, vnode)
          {
            if(binding.arg == "implement")
            {
              if(binding.modifiers["now"] != null)
              {
                 for(var i = 0; i < binding.value.length;i++)
                 {
                   el.classList.add(binding.value[i])
                 }
              }
            }
          }
        }
    }
}