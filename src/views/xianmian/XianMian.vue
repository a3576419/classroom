<template>
  <div class="xianmian">
    <div class="xianmian-img">
      <img src="~assets/img/temporary/course_top_banner.png" alt="">
    </div>
    <div class="XianMian_list">
      <GoodsList :goods="goods"></GoodsList>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  //获取限免数据
  import {getXianMianList} from "@/network/XianMian";
  //封装的课程列表组件
  import GoodsList from "@/components/content/goods/GoodsList";
  //底部
  import Footer from "@/components/common/footer/Footer";
  export default {
    name: "XianMian",
    data(){
      return{
        // goods:[],
        goods:[
          {
            cover_url:require("@/assets/img/jingPin/xianMian.jpg"),
            title:'亚马逊跨境电商运营公开课海星跨境',
            price:'299.00',
            market_price:'699.00',
            courseCount:'6'
          },
        ]
      }
    },
    //请求课程数据
    // created() {
    //   let then = getXianMianList().then(res=>{
    //     // '精品自学课的数据请求结果'
    //     console.log(res);
    //     this.goods.push(...res.data.data)
    //     console.log(this.goods);
    //   });
    // },
    components:{
      GoodsList,
      Footer
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
  .XianMian_list{
    margin-bottom: 260px;
  }

</style>
