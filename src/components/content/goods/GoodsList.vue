<template>
<div class="goodslist banxin">
  <GoodsListItem v-for="(item,index) in goods" :goodsitem="item" :key="index"></GoodsListItem>
</div>
</template>

<script>
  import GoodsListItem from "@/components/content/goods/GoodsListItem";
  export default {
    name: "",
    props:{
      goods:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      GoodsListItem
    },

  }

</script>

<style scoped>
  .goodslist{
    display: flex;
    /*根据宽度决定一行显示多少*/
    flex-wrap: wrap;
  }

</style>
