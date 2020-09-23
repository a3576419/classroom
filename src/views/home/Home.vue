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

<!-- 精品自学课标题-->
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
<!-- 精品课程展示   -->
    <div class="Course_show banxin">
      <div class="left">
        <a href="http://www.zhao100.cn/paidCourseInfo/43">
          <img :src="goods.goods_kuajing[0].cover_url" alt=""  />
          <p>{{ goods.goods_kuajing[0].title }}</p>
          <span class="subtitle">{{ goods.goods_kuajing.subtitle }}</span>
          <div class="down">
            <span class="price">￥{{ goods.goods_kuajing[0].price }}</span>
            <del class="market_price">￥{{ goods.goods_kuajing[0].market_price }}</del>
          </div>
        </a>
      </div>
      <div class="right">
        <!-- 首页精品自学课右边课程item-->
        <HomeProduct_itemList :goodsitem="goods.goods_yamaxun[0]"></HomeProduct_itemList>
        <HomeProduct_itemList :goodsitem="goods.goods_yingxiao[0]"></HomeProduct_itemList>
      </div>
    </div>

 <!-- 限免课标题-->
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
<!-- 限免课程展示-->
    <div class="Course_show banxin">
      <div class="xianmian_left">
      <a href="http://www.zhao100.cn/paidCourseInfo/43">
        <img :src="xianMian_goods[0].cover_url" alt=""  />
<!--                                                                      这里报错-->
        <p>{{xianMian_goods[0].title}}</p>
        <span class="subtitle">{{ xianMian_goods.subtitle }}</span>
        <div class="down">
          <span class="price">￥{{ xianMian_goods[0].price }}</span>
          <del class="market_price">￥{{ xianMian_goods[0].market_price }}</del>
        </div>
      </a>
      </div>
    </div>
    </div>
</template>

<script>
  // import {Swiper, SwiperItem } from "@/components/content/swiper";
  // 获取精品视频数据
  import {getJingPinList} from "@/network/JingPin";
  // 获取限免视频数据
  import {getXianMianList} from "@/network/XianMian";
  // 课程展示
  import GoodsList from "@/components/content/goods/GoodsList";
  //首页精品自学课右边课程item
  import HomeProduct_itemList from "@/components/common/homeProduct_itemList/HomeProduct_itemList";
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
    GoodsList,
    HomeProduct_itemList
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
        console.log(this.goods.goods_yamaxun);
      });
      getXianMianList().then(res=>{
        // '限免课的数据请求结果'
        // console.log(res);
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

    padding: 30px 0px;
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
  .Course_show{
    margin-bottom: 100px;
  }
  .Course_show .left{
    width: 40%;
  }
  .Course_show .right{
    width: 60%;
    display: flex;
  }

  /*课程展示（共用）*/
  .xianmian_left{
   width: 40%;
  }
  .Course_show img{
    width: 98%;
    height: 100%;
    margin-bottom: 15px;
  }
  .Course_show p{
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
    font-size: 40px;
    color: red;
    font-weight: bold;
    margin-left: 12px;
  }
  /*带横线的价格*/
  .Course_show del{
    color: #a9a9aa;
    margin: 25px;
  }
  /*最下面三行*/
  .down{
    font-size: 25px;
    margin-top: 20px;
  }
</style>
