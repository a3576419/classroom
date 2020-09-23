<template>
  <div class="home">
<!--    <Swiper>-->
<!--      <SwiperItem>-->
<!--        <img src="~assets/img/temporary/course_top_banner.png" alt="">-->
<!--      </SwiperItem> <SwiperItem>-->
<!--        <img src="~assets/img/temporary/course_top_banner.png" alt="">-->
<!--      </SwiperItem>-->
<!--    </Swiper>-->

<!--    课堂介绍-->
    <div class="home_show banxin">
      <ul>
        <li>
            <img src="~@/assets/img/home/advantage_fame.png" alt="" style=" vertical-align: middle;">
          <div class="l">
            <span>在线教学平台</span>
            <div class="show_content">
            <p>多名优秀导师入驻青柠，一键拥有自己</p>
            <p>的直播课堂，感受在线教育的独特魅力</p>
            </div>
          </div>
        </li>
        <li>
          <img src="~@/assets/img/home/advantage_practice.png" alt="">
          <div class="l">
            <span>VIP精品课程</span>
            <div class="show_content">
            <p>系统化体系完整高效课程，加入VIP，带你精准</p>
            <p>解析跨境电商规则，传授玩法，让你占据制高点</p>
            </div>
          </div>
        </li>
        <li>
          <img src="~@/assets/img/home/advantage_teaching.png" alt="" >
          <div class="l">
            <span>专业导师培训</span>
            <div class="show_content">
              <p>快乐一流的导师团队，拥有着丰富的授课经验，</p>
              <p>针对学员有问必答，随到随学进行培训</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
<!--      精品自学课标题-->
    <table class="Course_title banxin">
      <tr>
        <td>
          <strong >|</strong>
        </td>
        <td>
          <span class="span1">精品自学课</span>
          <span class="span2">解决你最想搞定的业务问题</span>
        </td>
        <td>
          <a href="http://localhost:8080/jingPin">更多自学课程 ></a>
        </td>
      </tr>
    </table>
<!-- 精品视频展示   -->
    <div class="jingpin_show banxin">
      <div class="left">
        <GoodsList :goods="goods.goods_kuajing" class="left_GoodsList"></GoodsList>
      </div>
      <div class="right">
        <GoodsList :goods="goods.goods_yingxiao"></GoodsList>
        <GoodsList :goods="goods.goods_yamaxun"></GoodsList>
      </div>
    </div>

 <!--      限免课标题-->
    <table class="Course_title banxin">
      <tr>
        <td>
          <strong >|</strong>
        </td>
        <td>
          <span class="span1">限免课程</span>
          <span class="span2">每一堂课解决一个职业小难点</span>
        </td>
        <td>
          <a href="http://localhost:8080/xianMian">更多自学课程 ></a>
        </td>
      </tr>
    </table>

    <div class="xianmian_show">
      <GoodsList :goods="xianMian_goods"></GoodsList>
    </div>
  </div>
</template>

<script>
  // import {Swiper, SwiperItem } from "@/components/content/swiper";
  // 获取精品视频数据
  import {getJingPinList} from "@/network/JingPin";
  // 获取限免视频数据
  import {getXianMianList} from "@/network/XianMian";
  import GoodsList from "@/components/content/goods/GoodsList";
  export default {
  name: 'Home',
    data(){
      return{
        goods:{
          goods_all: [],
          goods_yingxiao:[],
          goods_yamaxun:[],
          goods_kuajing:[],
        },
        xianMian_goods:[]
      }
    },
  components: {
    // Swiper,
    // SwiperItem
    GoodsList
  },
    //请求课程数据
    created() {
      getJingPinList().then(res=>{
        // '精品自学课的数据请求结果'
        console.log(res)
        this.goods.goods_all.push(...res.data.goods)
        this.goods.goods_yingxiao.push(this.goods.goods_all[2])
        this.goods.goods_yamaxun.push(this.goods.goods_all[1])
        this.goods.goods_kuajing.push(this.goods.goods_all[0])
      });
      getXianMianList().then(res=>{
        // '精品自学课的数据请求结果'
        console.log(res);
        this.xianMian_goods.push(...res.data.data)
        console.log(this.xianMian_goods);
      });
    },
}
</script>
<style scoped>
  .home{
    height: 100%;
    color: black;
  }
  /*课堂介绍*/
  .home_show ul{
    display: flex;
    justify-content: space-between;
  }
  .home_show img{
    width: 80px;
    height: 80px;
    float: left;
    margin-right: 15px;
  }
  .home_show span{
    font-size: 25px;
    padding-bottom: 10px;
  }
  .home_show p{
    font-size: 15px;
    color: #a9a9aa;
  }
  .show_content{
    margin-top: 13px;
  }
  /*课程标题（共用）*/
  .Course_title{
    /*设置标题上边距*/
    padding-top: 30px;
  }
  .Course_title strong{
    color: #5babfa;
    font-size: 65px;
  }
  .Course_title .span1{
    font-size: 40px;

  }
  .Course_title .span2{
    font-size: 25px;
    margin: 30px;
  }
  .Course_title a{
    font-size: 25px;
    float: right;
  }
  /*精品视频展示*/
  .jingpin_show{
    margin-bottom: 100px;
  }

  .left_GoodsList{
    width: 100%;
    height: 100%;
  }
  .jingpin_show .right{
    width: 50%;
    display: flex;
  }
</style>
