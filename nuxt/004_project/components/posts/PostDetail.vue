<template>
  <div class="d-flex justify-content-center">
    <div class="p-2 bd-highlight">
      <blockquote class="blockquote">
        <h3>{{post.title}}</h3>
        <p>{{post.subtitle}}</p>
        <p>{{post.description}}</p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    post:Object
  }
};
</script>

<style>
</style>