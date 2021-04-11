<template>
    <div>
        <div class="offset-4 col-4">
            <form @submit.prevent="submit()" class="shadow-lg p-3 mb-5 bg-white rounded border" :class="[{'border-success':isRegistered},{'border-info':!isRegistered}]">
                <h5 class="w-100 text-center" :class="[{'text-success':isRegistered},{'text-info':!isRegistered}]">Nuxt.js | Auth</h5>
                <hr>
                <label :class="[{'text-success':isRegistered},{'text-info':!isRegistered}]">E-posta :</label>
                <input class="form-control form-control-sm mb-2" v-model="member.email"/>
                <label :class="[{'text-success':isRegistered},{'text-info':!isRegistered}]">Şifre :</label>
                <input class="form-control form-control-sm mb-4" v-model="member.password"/>
                <button class="btn btn-sm w-100 text-center mb-2" :class="[{'btn-success':isRegistered},{'btn-info':!isRegistered}]">
                    {{isRegistered?"Giriş":"Üye Ol"}}
                </button>
                <div class="w-100 text-center">
                    <a style="font-size:0.8em; cursor:pointer" @click="isRegistered=!isRegistered">
                        <b :class="[{'text-success':!isRegistered},{'text-info':isRegistered}]">
                            {{isRegistered?"Üye değilim":"Zaten üyeyim"}}
                        </b>
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    head:{
        title:'Auth'
    },
    data(){
        return{
            isRegistered:false,
            member:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        submit(){
            if(this.isRegistered)
            {
                this.$store.dispatch("signIn",this.member)
                    .then(response=>{
                        if(response){
                            this.$router.push("/")
                        }
                    })
            }
            else
            {
                this.$store.dispatch("signUp",this.member)
                    .then(response=>{
                        if(response){
                            this.$router.push("/")
                        }
                    })
            }
        }
    }
}
</script>

<style>

</style>