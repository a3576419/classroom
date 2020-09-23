<template>
  <div class="goods_item">
    <div class="goods_info">
      <!-- 最外层包裹a标签 点击可进入详情页-->
      <a href="http://www.zhao100.cn/paidCourseInfo/43">
      <img :src="goodsitem.cover_url" alt=""  />
      <p>{{ goodsitem.title }}</p>
      <span class="subtitle">{{ goodsitem.subtitle }}</span>
      <div class="info_down">
        <span class="price">￥{{ goodsitem.price }}</span>
        <del class="market_price">￥{{ goodsitem.market_price }}</del>
        <span class="collect">{{ goodsitem.courseCount}}人学过</span>
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
    width: 25%;
    margin-top: 30px;
  }
  .goods_info{
    /*给最外边设置边框*/
    /*width: 310px;*/
    /*border: solid 3px gainsboro;*/
    width: 363px;
    border: solid 3px gainsboro;
  }
 .goods_info img{
   /*图片宽度沾满整个框*/
   /*width: 100%;*/
   /*height: 150px;*/
   width: 360px;
   height: 180px;
   margin-bottom: 15px;
 }
 .goods_info p{
   /*标题*/
   font-size: 25px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   margin-bottom: 8px;
 }
 .subtitle{
   font-size: 15px;
   margin-bottom: 18px;
 }
 .price{
   /*价格*/
    font-size: 23px;
   color: salmon;
   font-weight: bold;
   margin-left: 12px;
 }
  /*带横线的价格*/
  .goods_info del{
   color: #a9a9aa;
   margin: 25px;
 }
 .collect{
   /*多少人看过*/
   color: #a9a9aa;
   margin-right: 15px;
 }
 /*最下面三行*/
 .info_down{
   text-align: center;
   margin-top: 10px;
 }

</style>
