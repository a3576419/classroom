import{request} from "@/network/request";
export function login(username,password){
  return request({
    //接口：http://csdcloud.cn:8081/classroom/sys/login?username=aaa&password=aaa
    url:'login_logup/classroom/sys/login',//查找用户名存不存在 login_logup：在vue.config.js配置proxy跨域
    method:"POST",
    params:{
      username:username,
      password:password
    }
  })
}
