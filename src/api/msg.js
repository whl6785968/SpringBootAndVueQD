import request from '@/utils/request'

export function sendNotice(data){
  alert(JSON.stringify(data))
  return request({
    url: '/msg/sendNotice',
    method: 'post',
    data
  })
}

export function getMsgList(){
  return request({
    url: '/msg/getMsgList',
    method: 'get'
  })
}
