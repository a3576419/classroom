<template>
  <!--    最外层背景-->
  <div class="logup" >
    <!--      中间内容-->
    <div class="logup_background">
      <div class="neiRong">
        <div class="logup_title">欢迎来到快乐课堂</div>

        <div class="info">
          <img src="~assets/img/home/iphone.png" alt="">
          <input type="text"  placeholder="输入手机号"></input>
        </div>

        <div class="info yanZhengMa">
          <img src="~assets/img/home/code.png" alt="">
          <input type="text" placeholder="输入验证码"></input>
          <span>获取验证码</span>
        </div>

        <div class="info">
          <img src="~assets/img/home/密码@2x.png" alt="">
          <input type="password" placeholder="输入密码"></input>
        </div>
        <div class="logup_button">
          <button>注册</button>
        </div>
          <div style="font-size: 20px">已有账号？<a href="http://localhost:8080/login" style="color: #f7c140">去登录</a></div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Logup"
  }
</script>

<style scoped>
  .logup{
    width: 100%;
    height: 1080px;
    background: url('~@/assets/img/img/login_bg.png');
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logup_background{
    width: 700px;
    height: 600px;
    background-color: white;
    border-radius: 20px;
  }
  .neiRong{
    text-align: center;
    margin: 0 auto;
  }
  .logup_title{
    margin: 50px;
    text-align: center;
    font-size: 28px;
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
  .yanZhengMa input{
    width: 70%;
  }
  .yanZhengMa span{
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
</style>
