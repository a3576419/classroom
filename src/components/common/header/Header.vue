<template>
  <div class="body">
          <table class="head banxin">
            <tr>
              <td style="width:100px ">
                <img src="~assets/img/home/logo.png" alt="" class="image">
              </td>
              <td style="width:140px ">
                <strong>快乐课堂</strong>
              </td>
              <td class="head-center">
                <router-link to="/home"    style="margin-left: 40px; color: black" >首页</router-link>
                <router-link to="/jingPin" style="margin: 45px">精品自学课</router-link>
                <router-link to="/xianMian">限免课程</router-link>
<!--                <router-link to="/kuaJing" style="margin: 35px">跨境资讯</router-link>-->
                <a href="https://www.80mob.com/" target="_blank" style="margin: 45px">跨境资讯</a>
              </td>
              <td class="head-right">
                <!-- <a href=""><router-link to="/login">登录 |</router-link></a>-->
<!--                <router-link to="/login">登录 |</router-link>-->
                <a href=""><router-link to="/logup" style="margin-right: 30px"> 免费注册</router-link></a>
<!--                    点击的方式跳转路由-->
<!--                <span @click="logup_click">免费注册</span>-->
                <span @click="login_click">登录  |</span>
              </td>
            </tr>
          </table>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Head",
    methods:{
      login_click(){
          let routeUrl = this.$router.resolve({
            path: "/login",
          });
          window.open(routeUrl .href, '_blank');

      },
      logup_click(){

      },
    }
  }
</script>

<style scoped>
  .head{
    height: 120px;
    font-size: 20px;
    color: black;
  }
  .head img{
      width: 100px;
      height: 100px;
  }
  .head strong{
    font-size: 35px;
  }
  .head-center .router-link-active {
    border-bottom: solid 4px mediumaquamarine;
    padding: 8px;
  }
  .head-right span{
    float: right;
  }
</style>
