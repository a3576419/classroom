<template>
  <div class="app">
      <!--    logo部分-->
        <img src="~assets/img/home/logo.jpg" alt="" class="imgg">
        <span>快乐课堂</span>

      <div class="head-center">
        <router-link to="/home">首页          </router-link>
        <router-link to="/jingpin">精品自学课  </router-link>
        <router-link to="/xianmian">限免课程   </router-link>
        <router-link to="/kuajing">跨境资讯    </router-link>
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
  // import Root from "@/views/Root";
    export default {
        name: "APP",
        components:{
          // Root,
        },
    }
</script>

<style>
    @import "assets/css/base.css";
    /*@import "assets/css/common.css";*/
    .app{
      font-size: 18px;
      height:40px;
      background-color: white;
      color: black;
    }
    .imgg{
      width: 60px;
      height: 60px;
    }
    .app span{
      font-size: 25px;
    }
    .head-center{
      margin-left: 50px;
     display: inline;
    }
    .head-right{
      float: right;
      right: 20px;}
    .head-center .router-link-active{
      border-bottom: solid 3px pink;
      padding: 8px;
      font-size: 20px;
      margin-top: 10px;
    }

</style>
