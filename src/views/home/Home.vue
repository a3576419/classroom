<template>
  <div class="home">
<!--    头部-->
<!--    <Header></Header>-->
<!--    轮播图-->
    <div class="banner banxin">
      <ElCarousel></ElCarousel>
    </div>

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
        <div class="down">
          <span class="price">￥{{ xianMian_goods[0].price }}</span>
          <del class="market_price">￥{{ xianMian_goods[0].market_price }}</del>
        </div>
      </a>
      </div>
    </div>
    <Footer></Footer>
    </div>
</template>

<script>
  // 头部
  import Header from "@/components/common/header/Header";
  // 获取精品视频数据
  import {getJingPinList} from "@/network/JingPin";
  // 获取限免视频数据
  import {getXianMianList} from "@/network/XianMian";
  // 课程展示
  import GoodsList from "@/components/content/goods/GoodsList";
  //首页精品自学课右边课程item
  import HomeProduct_itemList from "@/components/content/homeProduct_itemList/HomeProduct_itemList";
  //轮播图
  import ElCarousel from "@/components/content/elCarousel/ElCarousel";
  //底部
  import Footer from "@/components/common/footer/Footer";

  export default {
  name: 'Home',
    data(){
      return{
        // goods:{
        //   goods_all: [],
        //   goods_yingxiao:[],
        //   goods_yamaxun:[],
        //   goods_kuajing:[],
        // },
        // xianMian_goods:[
        //   {
        //     cover_url:'',
        //     title:'',
        //     price:'',
        //     market_price:''
        //   },
        // ],
        goods:{
          goods_all: [
            {
              cover_url:require("@/assets/img/jingPin/kuaJing.jpg"),
              title:'亚马逊跨境电商运营公开课海星跨境',
              price:'299.00',
              market_price:'699.00',
              courseCount:'6'
            },
            {
              cover_url: require("@/assets/img/jingPin/yaMaXun.jpg"),
              title:'跨境电商亚马逊如何选择',
              price:'59.9',
              market_price:'599.00',
              courseCount:'3'
            },
            {

              cover_url: require("@/assets/img/jingPin/yingXiao.jpg"),
              title:'跨境电商亚马逊Listing优化',
              price:'99.90',
              market_price:'799.00',
              courseCount:'1'
            },
          ],
          goods_yingxiao:[
            {
              cover_url: require("@/assets/img/jingPin/yingXiao.jpg"),
              title:'跨境电商亚马逊Listing优化',
              price:'99.90',
              market_price:'799.00',
              courseCount:'1'
            },
          ],
          goods_yamaxun:[
            {
              cover_url: require("@/assets/img/jingPin/yaMaXun.jpg"),
              title:'跨境电商亚马逊如何选择',
              price:'59.9',
              market_price:'599.00',
              courseCount:'3'
            },
          ],
          goods_kuajing:[
            {
              cover_url:require("@/assets/img/jingPin/kuaJing.jpg"),
              title:'亚马逊跨境电商运营公开课海星跨境',
              price:'299.00',
              market_price:'699.00',
              courseCount:'6'
            },
          ],
        },
        xianMian_goods:[
          {
            cover_url:require("@/assets/img/jingPin/xianMian.jpg"),
            title:'亚马逊跨境电商运营公开课海星跨境',
            price:'免费',
            market_price:'0.00',
            courseCount:'6'
          },
        ],
      }
    },
  components: {
    // Swiper,
    // SwiperItem
    Header,
    GoodsList,
    HomeProduct_itemList,
    ElCarousel,
    Footer
  },
    //请求课程数据
    // created() {
    //   getJingPinList().then(res=>{
    //     // '精品自学课的数据请求结果'
    //     // console.log(res)
    //     this.goods.goods_all.push(...res.data.goods)
    //     this.goods.goods_yingxiao.push(this.goods.goods_all[2])
    //     this.goods.goods_yamaxun.push(this.goods.goods_all[1])
    //     this.goods.goods_kuajing.push(this.goods.goods_all[0])
    //   });
    //   getXianMianList().then(res=>{
    //     // '限免课的数据请求结果'
    //     // console.log(res);
    //     this.xianMian_goods.push(...res.data.data)
    //     console.log(this.xianMian_goods);
    //   });
    // },
    methods:{
      linkTo () {
        let activeIndex = this.$refs.carousel.activeIndex
        this.$router.push(this.imgs[activeIndex].link)
      }
    }
}
</script>
<style scoped>
  .home{
    height: 100%;
    color: black;
  }
  /*顶部轮播Banner*/
    .banner{
      border-radius: 30px;
      margin-top: 10px;
      /*width: 100%;*/
      height: 300px;
      margin-bottom: 50px;
  }
  /*课堂介绍*/
  .home_show ul{
    display: flex;
    justify-content: space-around;
  }
  .home_show img{
    width: 80px;
    height: 80px;
    float: left;
    margin-right: 15px;
  }
  .home_show span{
    font-size: 20px;
    padding-bottom: 10px;
  }
  .home_show p{
    font-size: 12px;
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
    margin-bottom: 260px;
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
    overflow-x: hidden;
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
