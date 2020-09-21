<template>
<div class="goodslist banxin">
<!--  打印数据测试-->
<!--  {{goodsdata}}-->
  <GoodsListItem v-for="item in goodsdata" :goodsitem="item"></GoodsListItem>
</div>
</template>

<script>
  import GoodsListItem from "@/components/content/goods/GoodsListItem";
  export default {
    name: "",
    // 接收传来的数组
    // props:{
    //   goodsitem:{
    //     type:Object,
    //     default(){
    //       return[]
    //     }
    //   }
    // },
    data(){
      return{
        goodsdata:this.$route.query.goods,
      }
    },
    components:{
      GoodsListItem
    }
  }

</script>

<style scoped>
  .goodslist{
    display: flex;
    /*根据宽度决定一行显示多少*/
    flex-wrap: wrap;
  }

</style>
