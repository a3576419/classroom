<template>
  <div class="app">
    <Root></Root>
  </div>
</template>

<script>
  import Root from "@/views/Root";
    export default {
        name: "APP",
        components:{
          Root,
        },
    }
</script>

<style>
    @import "assets/css/base.css";
    @import "assets/css/common.css";
</style>
