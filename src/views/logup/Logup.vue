<template>
  <!--    最外层背景-->
  <div class="logup" >
    <!--      中间内容-->
    <div class="logup_background">
      <div class="neiRong">
        <div class="logup_title">欢迎来到快乐课堂</div>
        <form action="http://csdcloud.cn:8081/classroom/sys/user" method="post" autocomplete="off">
        <div class="info">
          <img src="~assets/img/home/iphone.png" alt="">
          <input type="text"  placeholder="请输入用户名" v-model="username" name="username" @blur="username_blur"></input>
          <img src="~assets/img/logup/success.png" alt="" v-if="username_success">
          <span v-if="username_warning" class="tiShi">用户名已存在</span>
          <span v-if="username_null" class="tiShi">用户名不能为空</span>
        </div>

        <div class="info yanZhengMa">
          <img src="~assets/img/home/code.png" alt="">
          <input type="text" placeholder="请输入密码" v-model="password" name="password"  @blur="password_blur"></input>
<!--          <span>获取验证码</span>-->
          <img src="~assets/img/logup/success.png" alt="" v-if="password_success" >
          <span v-if="password_null" class="tiShi">密码不能为空</span>
        </div>

        <div class="info">
          <img src="~assets/img/home/密码@2x.png" alt="">
          <input type="password" placeholder="请再次输入密码" @blur="confirmPassword_blur" name="rePassword" v-model="confirm_Password"></input>
          <img src="~assets/img/logup/success.png" alt="" v-if="confirmPassword_success" >
          <span v-if="confirmPassword_warning" class="tiShi">两次密码不一致</span>
          <span v-if="confirmPassword_null" class="tiShi">确认密码不能为空</span>
        </div>
        <div class="logup_button">
<!--          <input :type="username_success&&password_success&&confirmPassword_success?'submit':'button'" value="注册" @click="submit">-->
          <input type="button" value="注册" @click="Submit">
        </div>
        </form>
          <div style="font-size: 20px">已有账号？<router-link to="/login" style="color: #f7c140">去登录</router-link></div>
      </div>
    </div>

  </div>
</template>

<script>
  import {username,submit} from "@/network/logup";
  export default {
    name: "Logup",
    data() {
      return {
        username: '',       //用户名
        password: '',       //密码
        confirm_Password:'',//确认密码
        username_success:false,  //检测用户名是否存在的返回值 对号

        password_success:false, //检测密码是否输入 对号

        confirmPassword_success:false, //检测两次密码是否一致 对号

        username_warning:false,  //提示用户名已存在
        username_null:false,   //提示用户名不能为空

        password_warning:false,
        password_null:false,   //提示用户名不能为空

        confirmPassword_warning:false,
        confirmPassword_null:false,   //提示用户名不能为空
      }
    },
    methods:{
      // 用户名失去焦点触发事件
      username_blur(){
        if(this.username!=''){
          username(this.username).then(res=>{
            console.log(res.success)
            this.username_success=res.success
            if (res.success){
              this.username_success=true
              this.username_warning=false
              this.username_null=false

            }else {
              this.username_warning=true
              this.username_success=false
              this.username_null=false
            }
          })
        }else {
          this.username_null=true
          this.username_warning=false
          this.username_success=false
          return
        }
        // console.log("username_blur事件被执行了")

      },
      // 密码失去焦点触发事件
      password_blur(){
        if(this.password!=''){
          this.password_success=true
          this.password_null=false
        }else {
          this.password_null=true
          this.password_success=false
          return
        }
      },
      // 确认密码失去焦点检测两次是否一致
      confirmPassword_blur(){
        if(this.confirm_Password!=''){
          if(this.password===this.confirm_Password){
            this.confirmPassword_success=true
            this.confirmPassword_warning=false
            this.confirmPassword_null=false
          }else {
            this.confirmPassword_warning=true
            this.confirmPassword_success=false
            this.confirmPassword_null=false
            return
          }
        }else {
          this.confirmPassword_null=true
          this.confirmPassword_warning=false
          this.confirmPassword_success=false
            return
        }
      },
      Submit(){
        if (this.username_success&&this.password_success&&this.confirmPassword_success){
          username(this.username).then(res=>{
            console.log(res.success)
            this.username_success=res.success
            if (res.success){
              submit(this.username,this.password,this.confirm_Password).then(res=>{
                console.log(res)
                if (res.success){
                  alert('注册成功')
                  return
                }
              })
            }else {
              this.username_warning=true
              this.username_success=false
              this.username_null=false
            }
          })

        }else {
          alert('用户名或密码格式不对')
        }
      }
    }
  }
</script>

<style scoped>
  .logup{
    width: 100%;
    height:100%;
    background: url('~@/assets/img/img/login_bg.png');
    background-repeat: no-repeat ;
    background-size:100%;
    position: fixed;
    display: flex;
    justify-content: center;
    /*align-items: center;*/
  }
  .logup_background{
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
  .yanZhengMa span{
    color: #f7c140;
    font-size: 18px;
  }
  .logup_button input{
    width: 450px;
    height: 60px;
    border-radius: 15px;
    background-color: #f7c140;
    margin: 30px;
    outline:none;
  }
  .info .tiShi{
    color: red;
    font-size: 12px;
  }
</style>
