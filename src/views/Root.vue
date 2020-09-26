<template>
  <div class="root">
    <Header></Header>
<!--    <Footer></Footer>-->
<!--    <Home></Home>-->
  </div>
</template>

<script>
  import Header from "@/components/common/header/Header";
  // import Footer from "@/components/common/footer/Footer";
  import Home from "@/views/home/Home";
  export default {
    name: "Root",
    components:{
      Header,
      // Footer,
      Home
    }
  }
</script>

<style scoped>
  .root{
    width:100%;
    height: 100%;
  }

</style>
