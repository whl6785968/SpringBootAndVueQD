import request from '@/utils/request'

export function sendNotice(data){
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

export function getMsgCount(token){
  return request({
    url: '/msg/getNotReadCount',
    method: 'get',
    params: { token }
  })
}
