<template>
    <div>
        <slot name="listTitle"></slot>
        <slot></slot>
        <div class="wheat p-2 border rounded" v-if="getProductsLength<=0">
            Henüz Burada Bir Kayıt Bulamadık
            <br>
            <small>Kayıt eklemek için Ürün İşlemleri menüsünden yararlanabilirsiniz</small>
        </div>
        <div v-else>
            <table class="table-bordered table-hover w-100">
                <thead>
                    <tr class="rounded bg-dark text-light text-center">
                        <th width="20%">ID</th>
                        <th width="20%">Ürün Adı</th>
                        <th width="15%">Adet</th>
                        <th width="15%">Fiyat</th>
                        <th width="20%">Açıklama</th>
                        <th width="10%">İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="product in getProducts">
                        <tr :key="product.id">
                            <td>{{product.id}}</td>
                            <td>{{product.content.name}}</td>
                            <td>{{parseFloat(product.content.amount)}}</td>
                            <td>{{parseFloat(product.content.price).toFixed(2)}} TL</td>
                            <td>{{product.content.description}}</td>
                            <td class="text-center">
                                <button style="font-size:0.7em" class="btn btn-secondary text-light">
                                    <span>Düzenle</span>
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
import {crudMixin} from '../../crudMixin'

export default {
    mixins:[crudMixin],
    computed:{
        ...mapGetters(["getProductsLength", "getProducts"])
    }
}
</script>

<style scoped>
    .wheat{
        background-color: wheat;
        color: rgb(146, 117, 64);
    }
</style>