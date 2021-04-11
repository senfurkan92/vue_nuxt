<template>
  <div class="pb-3 pl-3 pr-3">
    <div class="bg-light p-2 rounded" style="border:1px solid lightgray">
      <h6><slot name="fromLanguage"></slot> => <slot name="toLanguage"></slot></h6>
      <div class="text-justify w-100">
          <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>