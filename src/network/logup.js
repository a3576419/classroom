import{request} from "@/network/request";
export function username(username){
  return request({
    //接口：http://csdcloud.cn:8081/classroom/sys/user?username=1
    url:'login_logup/classroom/sys/user',//查找用户名存不存在 login_logup：在vue.config.js配置proxy跨域
    method:"GET",
    params:{
      username:username,
    }
  })
}
export function submit(username,password,rePassword){    //注册
  return request({
    //接口：http://csdcloud.cn:8081/classroom/sys/user?username=xxx&password=xxx&rePassword=xxx
    url:'login_logup/classroom/sys/user',//查找用户名存不存在 login_logup：在vue.config.js配置proxy跨域
    method:"POST",
    params:{
      username:username,
      password:password,
      rePassword:rePassword
    }
  })
}
