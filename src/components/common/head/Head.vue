<template>
  <div class="body">
<!--    <div class="head">-->
<!--      &lt;!&ndash;    logo部分&ndash;&gt;-->
<!--      <img src="~assets/img/home/logo.jpg" alt="" class="image">-->
<!--      <span>快乐课堂</span>-->
<!--      <div class="head-center">-->
<!--        <router-link style="margin-left: 60px" to="/home">首页</router-link>-->
<!--        <router-link style="margin-left: 40px" to="/jingpin">精品自学课&nbsp;&nbsp;&nbsp;</router-link>-->
<!--        <router-link style="margin-left: 40px" to="/xianmian">限免课程&nbsp;&nbsp;&nbsp;</router-link>-->
<!--        <router-link style="margin-left: 40px" to="/kuajing">跨境资讯&nbsp;&nbsp;&nbsp;</router-link>-->
<!--      </div>-->
<!--      <div class="head-right">-->
<!--        <router-link to="/login">登录</router-link>|-->
<!--        <router-link to="/logup">注册</router-link>-->
<!--      </div>-->
<!--    </div>-->

    <table class="head">
      <tr>
        <td>
          <table>
            <tr>
              <td>
                <img src="~assets/img/home/logo.jpg" alt="" class="image">
              </td>
              <td>
                <strong>快乐课堂</strong>
              </td>
              <td class="head-center">
                <router-link style="margin-left: 60px" to="/home">首页</router-link>
                <router-link style="margin-left: 40px" to="/jingpin">精品自学课</router-link>
                <router-link style="margin: 40px" to="/xianmian">限免课程</router-link>
                <router-link style="margin-right: 500px" to="/kuajing">跨境资讯</router-link>
              </td>
              <td class="head-right">
                <router-link to="/login">登录 |</router-link>
                <router-link to="/logup"> 注册</router-link>
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
  export default {
    name: "Head"
  }
</script>

<style scoped>
  /*.head {*/
  /*  width: 80%;*/
  /*  margin: 0 auto;*/
  /*  font-size: 18px;*/
  /*  height: 80px;*/
  /*  background-color: white;*/
  /*  color: black;*/
  /*  text-align: center;*/
  /*}*/

  /*.image {*/
  /*  width: 60px;*/
  /*  height: 60px;*/
  /*  !*display: inline;*!*/
  /*  text-align: center;*/
  /*}*/

  /*.head span {*/
  /*  font-size: 25px;*/
  /*}*/

  /*.head-center {*/
  /*  margin-left: 50px;*/
  /*  display: inline;*/
  /*  text-align: center;*/
  /*}*/

  /*.head-center .router-link-active {*/
  /*  border-bottom: solid 3px pink;*/
  /*  padding: 8px;*/
  /*  font-size: 20px;*/
  /*  margin-top: 10px;*/
  /*}*/

  /*.head-right {*/
  /*  float: right;*/

  /*}*/
  .head{
    margin: 0 auto;
    font-size: 18px;
  }
  .head img{
      width: 60px;
      height: 60px;
  }
  .head strong{
    font-size: 28px;
    color: black;
  }
  .head-center .router-link-active {
    border-bottom: solid 4px mediumaquamarine;
    padding: 8px;
    font-size: 20px;
    color: black;
  }

</style>
