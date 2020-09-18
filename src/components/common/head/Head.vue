<template>
  <div class="head banxin">
    <!--    logo部分-->
    <img src="~assets/img/home/logo.jpg" alt="" class="imgg">
    <span>快乐课堂</span>
    <div class="head-center">
      <router-link style="margin-left: 60px" to="/home">首页&nbsp;&nbsp;&nbsp;</router-link>
      <router-link style="margin-left: 40px" to="/jingpin">精品自学课&nbsp;&nbsp;&nbsp;</router-link>
      <router-link style="margin-left: 40px" to="/xianmian">限免课程&nbsp;&nbsp;&nbsp;</router-link>
      <router-link style="margin-left: 40px" to="/kuajing">跨境资讯&nbsp;&nbsp;&nbsp;</router-link>
    </div>

    <div class="head-right" >
      <router-link  to="/login">登录</router-link>|
      <router-link to="/logup">注册</router-link>
      <!--      <router-view></router-view>-->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Head"
  }
</script>

<style scoped>
  .head{
    font-size: 18px;
    /*height:40px;*/
    background-color: white;
    color: black;
  }
  .imgg{
    width: 60px;
    height: 60px;
  }
  .head span{
    font-size: 25px;
  }
  .head-center{
    margin-left: 50px;
    display: inline;
  }
  .head-center .router-link-active{
    border-bottom: solid 3px pink;
    padding: 8px;
    font-size: 20px;
    margin-top: 10px;
  }
  .head-right{
    float: right;
    right: 20px;
  }

</style>
