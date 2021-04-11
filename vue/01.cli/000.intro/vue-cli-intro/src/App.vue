
<template>
  <div>
    <button @click="title += ' :)'">BTN</button>
    <h1>{{ titleProp }}</h1>
    <hr>
    <Home></Home>
  </div>
</template>

// business logic
// burada import edersek component olarak tanıtmak gerekir
// fakat main.js içinde global olarak vue.component ile tanımlarsak
// component gerekmeden her yerden erişim sağlarız
<script>
export default {
  data() {
    return {
      title: "CLI",
    };
  },
  computed: {
    titleProp() {
      return this.title;
    },
  }
};
</script>

<style>
</style>
