<template>
  <div class="app">
    <Header v-if="!$route.meta.showNav"></Header>
    <router-view></router-view>
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
