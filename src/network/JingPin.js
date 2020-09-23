import{request} from "@/network/request";
export function getJingPinList(){
  return request({
    url:'index/courseList',
    method:"POST"
  })
}
