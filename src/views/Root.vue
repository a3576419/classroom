<template>
  <div class="root">
    <Header></Header>
<!--    <Footer></Footer>-->
  </div>
</template>

<script>
  import Header from "@/components/common/header/Header";
  // import Footer from "@/components/common/footer/Footer";
  export default {
    name: "Root",
    components:{
      Header,
      // Footer,
    }
  }
</script>

<style scoped>
  .root{
    width:100%;
    height: 100%;
  }

</style>
