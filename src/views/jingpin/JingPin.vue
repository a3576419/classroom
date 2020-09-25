<template>
  <div class="jingpin">
    <!--  图片-->
    <div class="jingpin-img">
      <img src="~assets/img/temporary/course_top_banner.png" alt="">
    </div>
    <!-- 课程分类选项卡-->
    <TabControl :titles="['全部','电商营销','亚马逊课程','跨境电商']" @tabClick="tabClick"></TabControl>
    <div class="jingpin_list">
      <GoodsList :goods="goods[goodstype]"></GoodsList>
    </div>
      <Footer></Footer>
  </div>

</template>

<script>
  //获取精品数据
  import {getJingPinList} from "@/network/JingPin";
  //分类--标题选项卡
  import TabControl from "@/components/content/tabControl/TabControl";
  //封装的课程列表显示组件
  import GoodsList from "@/components/content/goods/GoodsList";
  //底部
  import Footer from "@/components/common/footer/Footer";
  export default {
    name: "JingPin",
    data(){
      return{
        // 保存课程数据(多个数据时需要考虑页面问题)
        // goods:{
        //   // 'All':{page:0,list:[]},
        //   'all':{list:[]},
        //   'dianShang':{list:[]},
        //   'yaMaXun':{list:[]},
        //   'kuaJing':{list:[]},
        // }
        goods:{
          goods_all: [],
          goods_yingxiao:[],
          goods_yamaxun:[],
          goods_kuajing:[],
        },
        goodstype:'goods_all'
      }
    },
    //请求课程数据
    created() {
      let then = getJingPinList().then(res=>{
        // '精品自学课的数据请求结果'
        console.log(res)
        this.goods.goods_all.push(...res.data.goods)
        this.goods.goods_yingxiao.push(this.goods.goods_all[2])
        this.goods.goods_yamaxun.push(this.goods.goods_all[1])
        this.goods.goods_kuajing.push(this.goods.goods_all[0])
      });
    },
    components:{
      TabControl,
      GoodsList,
      Footer
    },
    methods:{
      // 实现标题卡组件$emit来的方法
      tabClick(index){
        //打印测试
        // console.log(index)
        switch (index){
          case 0:
            this.goodstype='goods_all'
            break;
          case 1:
            this.goodstype='goods_yingxiao'
            //
            // this.$router.push('jingPin/Yingxiao')
            break;
          case 2:
            this.goodstype='goods_yamaxun'
            break;
          case 3:
            this.goodstype='goods_kuajing'
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .jingpin{
    height: 100%;
  }
  .jingpin-img{
    background-color: #e8ecf0;
    margin-bottom: 30px;
  }
  img{
    width: 970px;
    height: 260px;
    display: block;
    margin: 0 auto;
  }
  .jingpin_list{
    margin-bottom: 260px;
  }
</style>

