
<template>
  <div class="col-6">
      <span>{{infoProp}}</span>
  </div>
</template>

<script>
export default {
  props: {
    info: String,
  },
  computed: {
    infoProp() {
      return this.info;
    },
  },
};
</script>

<style>
</style>