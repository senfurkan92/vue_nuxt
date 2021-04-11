<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6 col-md-offset-3 ">
        <h3>
            Filter And Mixins
        </h3>
        <p>
            {{message | toCapital}}
        </p>
        <p>
            {{age | magnitude}}
        </p> 
        <p>
            {{name | smile}}
        </p>
        <p>
          <input v-model="searchText" v-btn:do.try="true"/>
          <ul>
            <li v-for="product in getFilteredProducts" :key="product">
              {{product}}
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters:{
    toCapital(value){
      return value.toUpperCase();
    },
    magnitude(value){
      return value * 5
    },
    includesOrNot(value){
      return value.includes(value) ? value : ""
    }
  },
  data(){
    return {
      message : "Merhabalar ben furkan | Vue.js",
      age : 5,
      name : "Hayris ",
      searchText : "",
      products : ["Fare","Klavye","Telefon","Gözlük","Kumanda","Pencere","Saat","Elbise"],
    }
  },
  computed:{
    getFilteredProducts(){
      return this.products.filter(x => x.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  },
  directives:{
    "btn":{
      bind(el,binding,vnode){
        if(binding.value && binding.arg == 'do' && binding.modifiers["try"] != null)
        {
          el.classList.add("form-control");
        }
      }
    }
  }
}
</script>

<style>

</style>
