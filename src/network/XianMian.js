import{request} from "@/network/request";
export function getXianMianList(){
  return request({
    url:'index/courseList',
    method:"POST",
    // 给接口传参获取限免课程数据
    params:{
      model:2,
      is_gratis:20
    }
  })
}

