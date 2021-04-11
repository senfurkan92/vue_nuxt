export const crudMixin = {
    data(){
        return{
            initialCatalog : "https://vue-glosery-default-rtdb.firebaseio.com/",
        }
    },
    methods:{
        insertItem(tableName, item){
            return this.$http.post(this.initialCatalog+tableName+".json",item)
                .then(response => {
                    return response;
                })
                .catch(response => {
                    return response;
                })
        },
        updateItem(tableName, item){
            return this.$http.put(this.initialCatalog+tableName+".json",item)
                .then(response => {
                    return response;
                })
                .catch(response => {
                    return response;
                })
        },
        deleteItem(tableName, id){

        },
        getItems(tableName){
            return this.$http.get(this.initialCatalog+tableName+".json")
                .then(response => {
                    return response;
                })
                .catch(response => {
                    return response;
                })
        }
    }
}







