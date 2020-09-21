import{request} from "@/network/request";
export function getCourseList(){
  return request({
    // url:'/home/multidata',
    url:'index/courseList',
    method:"POST"
  })
}

