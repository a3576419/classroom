import{request} from "@/network/request";
export function getCourseList(){
  return request({
    url:'index/courseList',
    method:"POST"
  })
}