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
            <h1>在线教学平台</h1>
            <p>多名优秀导师入驻青柠，一键拥有自己</p>
            <p>的直播课堂，感受在线教育的独特魅力</p>
          </div>
        </li>
        <li>
          <img src="~@/assets/img/home/advantage_practice.png" alt="">
          <div class="l">
            <h1>VIP精品课程</h1>
            <p>系统化体系完整高效课程，加入VIP，带你精准</p>
            <p>解析跨境电商规则，传授玩法，让你占据制高点</p>
          </div>
        </li>
        <li>
          <img src="~@/assets/img/home/advantage_teaching.png" alt="" >
          <div class="l">
            <h1>VIP精品课程</h1>
            <p>快乐一流的导师团队，拥有着丰富的授课经验，</p>
            <p>针对学员有问必答，随到随学进行培训</p>
          </div>

        </li>
      </ul>
<!--      精品自学课-->
      <table class="home_jingpin banxin">
        <tr>
          <td> <strong style="color: #5babfa; font-size: 60px;">|</strong> </td>
        </tr>
        <tr>
          <td>  <span style="font-size: 40px;margin: 40px ">精品自学课</span> </td>
        </tr>
        <tr>
          <td>  <span style="font-size: 25px; margin-right: 630px">解决你最想搞定的业务问题</span></td>
        </tr>
        <tr>
          <td style=" font-size:25px;float: right"> <a style=" ">更多自学课程></a> </td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>

  // import {Swiper, SwiperItem } from "@/components/content/swiper";

  export default {
  name: 'Home',
  components: {
    // Swiper,
    // SwiperItem
  },
}
</script>
<style scoped>
  .home{
    height: 100%;
  }
  .home_show ul{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .home_show img{
    width: 70px;
    height: 70px;
    float: left;
  }
  .home_jingpin{
    display: flex;
  }
</style>
