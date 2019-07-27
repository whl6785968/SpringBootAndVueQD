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

export function changeReadState(msid,uid){
  return request({
    url: '/msg/changeReadState',
    method: 'post',
    params: { msid,uid }
  })
}

export function getPublicMsgTitle(uid){
  return request({
    url: '/msg/getPublicMsgTitle',
    method: 'get',
    params: { uid }
  })
}
