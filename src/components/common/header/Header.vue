<template>
  <div class="body">
          <table class="head banxin">
            <tr>
              <td>
                <img src="~assets/img/home/logo.jpg" alt="" class="image">
              </td>
              <td>
                <strong>快乐课堂</strong>
              </td>
              <td class="head-center">
                <router-link to="/home"    style="margin-left: 20px" >首页</router-link>
                <router-link to="/jingPin" style="margin-left: 40px">精品自学课</router-link>
                <router-link to="/xianMian"style="margin: 40px">限免课程</router-link>
                <router-link to="/kuaJing" style="margin-right: 400px">跨境资讯</router-link>
              </td>
              <td class="head-right">
                <router-link to="/login">登录 |</router-link>
                <router-link to="/logup"> 注册</router-link>
              </td>
            </tr>
          </table>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Head",
  }
</script>

<style scoped>
  .head{
    height: 120px;
    font-size: 23px;
  }
  .head img{
      width: 80px;
      height: 80px;
  }
  .head strong{
    font-size: 35px;
    color: black;
  }
  .head-center .router-link-active {
    border-bottom: solid 4px mediumaquamarine;
    padding: 8px;
    color: black;
  }

</style>
