// lazy, trim, number kullanımı

<template>
    <div class="w-100 frame">
        <div class="formHead text-center">
            <h3>Başvuru Formu</h3>
        </div>
        <div class="form-body p-4 bg-transparent">
            <div class="form-group">
                <label><b>Kullanıcı Adı</b></label>
                <input class="form-control" v-model.lazy.trim="username" @change="implementEmit('username',username)"/>
            </div>
            <div class="mt-3 form-group">
                <label><b>Şifre</b></label>
                <input class="form-control" v-model.lazy.trim="password" type="password" @change="implementEmit('password',password)"/>
            </div>
            <div class="mt-3 form-group">
                <label><b>Yaş</b></label>
                <input class="form-control" v-model.lazy.number="age" @change="implementEmit('age',age)"/>
            </div>
            <div class="mt-3 form-group">
                <label><b>Açıklama</b></label>
                <textarea class="form-control" rows="3" cols="3" v-model.lazy.trim="description" @change="implementEmit('description',description)"></textarea>
            </div>
            <div class="mt-3 form-group">
                <label><b>Uzmanlık</b></label><br/>
                <div class="form-check form-check-inline">                 
                    <input class="form-check-input" type="checkbox" value="Yazilim" v-model="specialist" @change="implementEmit('specialist', specialist)">
                    <label class="form-check-label">Yazılım</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" value="Donanim" v-model="specialist" @change="implementEmit('specialist', specialist)">
                    <label class="form-check-label">Donanım</label>
                </div>
            </div>
            <div class="mt-3 form-group">
                <label><b>Cinsiyet</b></label><br/>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" value="Erkek" v-model="gender" @change="implementEmit('gender', gender)">
                    <label class="form-check-label" for="inlineRadio1">Erkek</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" value="Kadın" v-model="gender" @change="implementEmit('gender', gender)">
                    <label class="form-check-label" for="inlineRadio2">Kadın</label>
                </div>
            </div>    
            <div class="mt-3 form-group">
                <label><b>Şehir</b></label>
                <select class="form-control" v-model="city" @change="implementEmit('city', city)">
                    <option value="0" selected>-</option>
                    <option value="Adana">Adana</option>
                    <option value="Adıyaman">Adıyaman</option>
                    <option value="Afyonkarahisar">Afyonkarahisar</option>
                    <option value="Ağrı">Ağrı</option>
                    <option value="Amasya">Amasya</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Antalya">Antalya</option>
                    <option value="Artvin">Artvin</option>
                    <option value="Aydın">Aydın</option>
                    <option value="Balıkesir">Balıkesir</option>
                    <option value="Bilecik">Bilecik</option>
                    <option value="Bingöl">Bingöl</option>
                    <option value="Bitlis">Bitlis</option>
                    <option value="Bolu">Bolu</option>
                    <option value="Burdur">Burdur</option>
                    <option value="Bursa">Bursa</option>
                    <option value="Çanakkale">Çanakkale</option>
                    <option value="Çankırı">Çankırı</option>
                    <option value="Çorum">Çorum</option>
                    <option value="Denizli">Denizli</option>
                    <option value="Diyarbakır">Diyarbakır</option>
                    <option value="Edirne">Edirne</option>
                    <option value="Elazığ">Elazığ</option>
                    <option value="Erzincan">Erzincan</option>
                    <option value="Erzurum">Erzurum</option>
                    <option value="Eskişehir">Eskişehir</option>
                    <option value="Gaziantep">Gaziantep</option>
                    <option value="Giresun">Giresun</option>
                    <option value="Gümüşhane">Gümüşhane</option>
                    <option value="Hakkâri">Hakkâri</option>
                    <option value="Hatay">Hatay</option>
                    <option value="Isparta">Isparta</option>
                    <option value="Mersin">Mersin</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="İzmir">İzmir</option>
                    <option value="Kars">Kars</option>
                    <option value="Kastamonu">Kastamonu</option>
                    <option value="Kayseri">Kayseri</option>
                    <option value="Kırklareli">Kırklareli</option>
                    <option value="Kırşehir">Kırşehir</option>
                    <option value="Kocaeli">Kocaeli</option>
                    <option value="Konya">Konya</option>
                    <option value="Kütahya">Kütahya</option>
                    <option value="Malatya">Malatya</option>
                    <option value="Manisa">Manisa</option>
                    <option value="Kahramanmaraş">Kahramanmaraş</option>
                    <option value="Mardin">Mardin</option>
                    <option value="Muğla">Muğla</option>
                    <option value="Muş">Muş</option>
                    <option value="Nevşehir">Nevşehir</option>
                    <option value="Niğde">Niğde</option>
                    <option value="Ordu">Ordu</option>
                    <option value="Rize">Rize</option>
                    <option value="Sakarya">Sakarya</option>
                    <option value="Samsun">Samsun</option>
                    <option value="Siirt">Siirt</option>
                    <option value="Sinop">Sinop</option>
                    <option value="Sivas">Sivas</option>
                    <option value="Tekirdağ">Tekirdağ</option>
                    <option value="Tokat">Tokat</option>
                    <option value="Trabzon">Trabzon</option>
                    <option value="Tunceli">Tunceli</option>
                    <option value="Şanlıurfa">Şanlıurfa</option>
                    <option value="Uşak">Uşak</option>
                    <option value="Van">Van</option>
                    <option value="Yozgat">Yozgat</option>
                    <option value="Zonguldak">Zonguldak</option>
                    <option value="Aksaray">Aksaray</option>
                    <option value="Bayburt">Bayburt</option>
                    <option value="Karaman">Karaman</option>
                    <option value="Kırıkkale">Kırıkkale</option>
                    <option value="Batman">Batman</option>
                    <option value="Şırnak">Şırnak</option>
                    <option value="Bartın">Bartın</option>
                    <option value="Ardahan">Ardahan</option>
                    <option value="Iğdır">Iğdır</option>
                    <option value="Yalova">Yalova</option>
                    <option value="Karabük">Karabük</option>
                    <option value="Kilis">Kilis</option>
                    <option value="Osmaniye">Osmaniye</option>
                    <option value="Düzce">Düzce</option>
                </select>
            </div> 
            <div class="w-100 text-right mt-3">
                <button class="btn btn-info" style="width:200px" @click.prevent="submit()">Başvur</button>
            </div>  
        </div>
    </div>
</template>

<script>
import {EventBus} from "../main.js"

export default {
    data(){
        return {
            username:"",
            password:"",
            age:30,
            description:"",
            specialist: [],
            city:"",
            cities : [],
            gender : ""
        }
    },
    methods:{
        implementEmit(key, value)
        {
            EventBus.emitter(key,value);
        },
        submit()
        {
            this.$emit("submitUpdate",true)
        }      
    }
}
</script>

<style scoped>
    .frame{
        border : 1px solid sandybrown;
        border-radius: 20px;
        box-shadow: 2px 2px 10px 2px black;
    }

    .formHead{
        border-bottom: 1px solid sandybrown;
        background-color: rgb(244, 164, 96,0.2);
        color: sandybrown;
    }

    .formBody{
        background-color: rgb(244, 164, 96,0.1);
    }
</style>