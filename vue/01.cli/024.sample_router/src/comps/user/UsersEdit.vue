<template>
<div>
    <p>
        Current id = {{id}} for edit
        <br>
        Name = {{name}}
        <br>
        Surname = {{surname}}
    </p>
    <div style="height:800px; background-color:black">
    </div>
    <div id="data" style="height:800px; background-color:red">
    </div>
</div>
</template>

<script>
export default{
    data(){
        return{
            id : this.$route.params.id,
            name : this.$route.query.name,
            surname : this.$route.query.surname
        }
    },
    watch:
    {
       "$route"(to, from){
           this.name = to.query.name,
           this.surname = to.query.surname
       }
    },
    computed:{

    }
}
</script>