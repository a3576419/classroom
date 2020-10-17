<!--home页 课程右边展示-->
<template>
  <div class="goods_item">
    <div class="goods_info">
      <!-- 最外层包裹a标签 点击可进入详情页-->
      <a href="">
      <img :src="goodsitem.cover_url" alt=""  />
      <p>{{ goodsitem.title }}</p>
      <div class="info_down">
        <span class="price">￥{{ goodsitem.price }}</span>
        <del class="market_price">￥{{ goodsitem.market_price }}</del>
      </div>
      </a>
    </div>
  </div>

</template>
<script>
  export default {
    name: "",
    props:{
      goodsitem:{
        type:Object,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>
  .goods_item{
    /*最外层div*/
    width: 33.3%;
  }
  .goods_info{
    width: 220px;
  }
 .goods_info img{
   /*图片宽度沾满整个框*/
   /*width: 100%;*/
   /*height: 150px;*/
   width: 220px;
   height: 110px;
   margin-bottom: 15px;
 }
 .goods_info p{
   /*标题*/
   font-size: 18px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   margin-bottom: 8px;
 }
 .price{
   /*价格*/
   font-size: 23px;
   color: red;
   font-weight: bold;
   margin-left: 12px;
 }
  /*带横线的价格*/
  .goods_info del{
   color: #a9a9aa;
   margin: 25px;
 }
 /*最下面三行*/
 .info_down{
   text-align: center;
   margin-top: 10px;
 }

</style>
