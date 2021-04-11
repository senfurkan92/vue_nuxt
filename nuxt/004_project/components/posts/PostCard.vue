<template>
  <div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <h6 class="card-text">{{subtitle}}</h6>
                <p class="card-text">{{description}}</p>
                <div v-if="isAdmin">
                    <a href="#" @click.prevent="$router.push(`/posts/${id}/edit-post`)" class="btn btn-sm btn-outline-warning">Düzenle</a>
                    <a href="#" class="btn btn-sm btn-outline-danger">Sil</a>
                </div>
                <div v-else>
                    <!-- <a href="#" @click.prevent="$router.push(`/posts/${id}/edit-post`)" class="btn btn-sm btn-outline-warning">Düzenle</a> -->
                    <a href="#" @click.prevent="$router.push(`/posts/${id}`)" class="btn btn-sm btn-outline-primary">Görüntüle</a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props:{
        id:String,
        title:String,
        subtitle:String,
        description:String,
        isAdmin:{
            require:false,
            default:false,
            type:Boolean
        }
    },
}
</script>

<style>

</style>