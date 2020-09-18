<template>
  <div class="head banxin">
    <!--    logo部分-->
    <img src="~assets/img/home/logo.jpg" alt="">
    <span>快乐课堂</span>

    <div class="xuanxiang">
      <router-link to="/home">首页               </router-link>
      <router-link to="/jingpin">精品自学课       </router-link>
      <router-link to="/xianmian">限免课程        </router-link>
      <router-link to="/kuajing">跨境资讯         </router-link>
      <router-view></router-view>
    </div>

    <div class="head-right" >
      <router-link  to="/login">登录</router-link>|
      <router-link to="/logup">注册</router-link>
<!--      <router-view></router-view>-->
    </div>

  </div>
</template>

<script>
  export default {
    name: "Head"
  }
</script>

<style scoped>
  .head{
    display: flex;
    text-align: center;
    font-size: 18px;
    height:40px;
    background-color: white;
    align-items: center;
    color: black;
  }
  .head img{
    width: 60px;
    height: 60px;
  }
  .head span{
    font-size: 25px;
  }
  .xuanxiang{
    margin-left: 50px;
  }
  .head-right{
    position: absolute;
    right: 20px;}
  .xuanxiang .router-link-active{
    border-bottom: solid 3px pink;
    padding: 8px;
    font-size: 20px;
  }

</style>
