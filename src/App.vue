<template>
  <div class="app">
    <Header></Header>
<!--    <Home></Home>-->
  </div>
</template>

<script>
  import Header from "@/components/common/header/Header";
  import Home from "@/views/home/Home";
    export default {
        name: "APP",
        components:{
          Header,
          Home
        },
    }
</script>

<style>
    @import "assets/css/base.css";
    @import "assets/css/common.css";
</style>
