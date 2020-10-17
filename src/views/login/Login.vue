<template>
  <div class="login">
    <!--      中间内容-->
    <div class="login_background">
      <div class="neiRong">
        <div class="logup_title">
          <span @click="loginType(!iscodelogin)":class="{active:iscodelogin}" style="padding-right: 15px">手机号验证码登录</span>
          <span>|</span>
          <span @click="loginType(iscodelogin)" :class="{active:!iscodelogin}" style="padding-left: 15px">手机号验密码登录</span>
        </div>

        <div class="info">
          <img src="~assets/img/home/iphone.png" alt="">
          <input type="text"  placeholder="输入手机号"></input>
        </div>

        <div class="info rigt" v-if="iscodelogin">
          <img src="~assets/img/home/code.png" alt="">
          <input type="text" placeholder="输入验证码"></input>
          <span>获取验证码</span>
        </div>

        <div class="info rigt" v-if="!iscodelogin">
          <img src="~assets/img/home/密码@2x.png" alt="">
          <input type="password" placeholder="请输入密码"></input>
          <span>忘 记 密 码</span>
        </div>
        <div class="logup_button">
          <button>登录</button>
        </div>
        <div style="font-size: 20px">木有账号？<router-link to="/logup" style="color: #f7c140">去注册</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    components:{

    },
    data(){
      return{
        iscodelogin:'ture',
      }
    },
    methods:{
      loginType(e){
        if (e){

          this.iscodelogin=!this.iscodelogin;
        }
      }
    },

  }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/img/img/login_bg.png');
    background-repeat: no-repeat ;
    background-size:100%;
    position: fixed;
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    color: black;
  }
  .login_background{
    width: 700px;
    height: 500px;
    background-color: white;
    border-radius: 20px;
    margin-top: 150px;
  }
  .neiRong{
    text-align: center;
    margin: 0 auto;
  }
  .logup_title{
    margin: 50px;
    text-align: center;
    font-size: 20px;
  }
  .info{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 450px;
    height: 60px;
    margin: 0 auto;
    border-bottom: 1px solid gainsboro;
  }
  .info img{
    width: 30px;
    height: 30px;
    margin-right: 15px
  }
  .info input{
    border: none;
    width: 100%;
    color: black;
    /*解决点击时出现默认边框*/
    outline:none;
  }
  .rigt input{
    width: 70%;
  }
  .rigt span{
    color: #f7c140;
    font-size: 18px;
  }
  .logup_button button{
    width: 450px;
    height: 60px;
    border-radius: 15px;
    background-color: #f7c140;
    margin: 30px;
    outline:none;
  }
  /*验证码密码切换 改变样式*/
  .active{
    font-size: 20px;
    font-weight: bold;
  }
</style>
