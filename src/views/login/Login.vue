<template>
  <div class="login">
    <!--      中间内容-->
    <div class="login_background">
      <div class="neiRong">
        <div class="logup_title">
          <span @click="loginType(iscodelogin)":class="{active:!iscodelogin}" style="padding-right: 15px">手机号验证码登录</span>
          <span>|</span>
          <span @click="loginType(!iscodelogin)" :class="{active:iscodelogin}" style="padding-left: 15px">用户名密码登录</span>
        </div>

        <div class="info">
          <img src="~assets/img/home/iphone.png" alt="">
          <input type="text"  placeholder="输入手机号"  v-if="!iscodelogin"></input>
          <input type="text"  placeholder="输入用户名" v-model="username" v-if="iscodelogin"></input>
        </div>

        <div class="info rigt" v-if="!iscodelogin">
          <img src="~assets/img/home/code.png" alt="">
          <input type="text" placeholder="输入验证码" ></input>
          <span>获取验证码</span>
        </div>

        <div class="info rigt" v-if="iscodelogin">
          <img src="~assets/img/home/密码@2x.png" alt="">
          <input type="password" placeholder="请输入密码" v-model="password"></input>
          <span>忘 记 密 码</span>
        </div>
        <div class="info">
          <img src="~assets/img/home/yanZhengMa.png" alt="">
          <input type="text"  placeholder="输入验证码" v-model="code"></input>
          <!-- 3使用验证码组件 -->
          <identify :identifyCode="identifyCode" @click.native="changeCode"></identify>
        </div>
        <div class="logup_button">
          <button @click="login">登录</button>
        </div>
        <div style="font-size: 20px">木有账号？<router-link to="/logup" style="color: #f7c140">去注册</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from "@/network/login";
  //1引用组件
  import identify from "@/components/common/identify/identify";
  export default {
    name: "Login",
    components:{
      //2注册组件
      identify
    },
    data(){
      return{
        iscodelogin:'ture',
        username:'',
        password:'',
        code:'',
        // 4验证码初始值
        identifyCode: '1234',
        // 4验证码的随机取值范围
        identifyCodes: '1234567890'
      }
    },
    mounted () {
      // 5刷新页面就生成随机验证码
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    methods:{
      loginType(e){
        if (e){
          this.iscodelogin=!this.iscodelogin;
        }
      },
      login(){
          if(this.username!=''&&this.password!=''&&this.code!=''){
            login(this.username,this.password).then(res=>{
              // console.log(res) //打印返回的检测结果（用户名密码是否正确）
              if(res.success&&this.code==this.identifyCode){
                alert('登录成功')
              }else {
                alert('用户名密码或验证码不正确')
              }
            })
          }else {
            alert('用户名密码或验证码不能为空')
          }
      },
      // 点击验证码刷新验证码
      changeCode () {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
        // console.log(this.identifyCode) //打印随机出来的验证码
      },
      // 生成一个随机整数  randomNum(0, 10) 0 到 10 的随机整数， 包含 0 和 10
      randomNum (min, max) {
        max = max + 1
        return Math.floor(Math.random() * (max - min) + min)
      },
      // 随机生成验证码字符串
      makeCode (data, len) {
        for (let i = 0; i < len; i++) {
          this.identifyCode += data[this.randomNum(0, data.length - 1)]
        }
      },
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
  .tiShi{
    color: red;
    font-size: 12px;
  }
</style>
