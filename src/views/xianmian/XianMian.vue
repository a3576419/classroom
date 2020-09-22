<template>
  <div class="xianmian">
    <div class="xianmian-img">
      <img src="~assets/img/temporary/course_top_banner.png" alt="">
    </div>
    <GoodsList :goods="goods"></GoodsList>
  </div>
</template>

<script>
  import {getCourseList} from "@/network/XianMian";
  import GoodsList from "@/components/content/goods/GoodsList";
  export default {
    name: "XianMian",
    data(){
      return{
        goods:[]
      }
    },
    //请求课程数据
    created() {
      let then = getCourseList().then(res=>{
        // '精品自学课的数据请求结果'
        console.log(res);
        this.goods.push(...res.data.data)
        console.log(this.goods);
      });
    },
    components:{
      GoodsList
    }
  }
</script>

<style scoped>
  .xianmian-img{
    background-color: #e8ecf0;
  }
  img{
    width: 970px;
    height: 260px;
    display: block;
    margin: 0 auto;
  }
</style>
