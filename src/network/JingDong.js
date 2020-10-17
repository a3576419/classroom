import {request} from "@/network/request";

export function getjingdong(){  //京东万象接口测试proxy
  return request({
    url:'api/he/freeweather',
    method:"GET",
    // 给接口传参获取聊城数据
    params:{
      city:'liaocheng',
      appkey:'32aba1f19622e8c8b31c99965e6a8884'
    }
  })
}
