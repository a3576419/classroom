<template>
<div class="jingpin">
<!--  图片-->
  <div class="jingpin-img">
    <img src="~assets/img/temporary/course_top_banner.png" alt="">
  </div>
<!-- 课程分类选项卡-->
  <table class="jingpin-tab banxin">
    <tr>
      <td>
        <table>
          <tr>
            <td><span>分类:</span></td>
            <td>
              <router-link :to="{path:'/jingPin/all',query:{goods}}" style="margin-left: 60px">全部</router-link>
              <router-link :to="{path:'/jingPin/yingXiao',query:{goods:goods_yingxiao}}" style="margin-left: 60px">电商营销</router-link>
              <router-link :to="{path:'/jingPin/yaMaXun',query:{goods:goods_yamaxun}}"  style="margin-left: 40px">亚马逊课程</router-link>
              <router-link :to="{path:'/jingPin/kuaJing',query:{goods:goods_kuajing}}"  style="margin-left: 40px">跨境电商</router-link>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <router-view></router-view>
</div>
</template>

<script>
  import {getCourseList} from "@/network/JingPin";
  export default {
    name: "JingPin",
    data(){
      return{
        // 保存课程数据
        // goods:{
        //   // 'All':{page:0,list:[]},
        //   'all':{list:[]},
        //   'dianShang':{list:[]},
        //   'yaMaXun':{list:[]},
        //   'kuaJing':{list:[]},
        // }
        goods: [],
        goods_yingxiao:[],
        goods_yamaxun:[],
        goods_kuajing:[],
      }
    },
    //请求课程数据
    created() {
      getCourseList().then(res=>{
        console.log(res)
       this.goods.push(...res.data.goods)
       this.goods_yingxiao.push(this.goods[2])
       this.goods_yamaxun.push(this.goods[1])
       this.goods_kuajing.push(this.goods[0])
      })
    },
  }
</script>

<style scoped>
  .jingpin-img{
    background-color: #e8ecf0;
  }
  img{
    width: 970px;
    height: 260px;
    display: block;
    margin: 0 auto;
  }
  .jingpin-tab{
    font-size: 23px;
  }
  .jingpin-tab .router-link-active {
    padding: 8px;
    font-weight: bold;
    color: mediumaquamarine;
  }

</style>
