import request from '@/utils/request'
import qs from 'qs'

export function sendNotice(data){
  alert(data.imgList)
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

export function getPublicMsgDetail(msid){
  return request({
    url: '/msg/getPublicMsgDetail',
    method: 'get',
    params: { msid }
  })
}

export function deleteMsg(msids,uid){
  return request({
    url: '/msg/deleteMsg',
    method: 'delete',
    params: { msids,uid },
    paramsSerializer: params => {
      return qs.stringify(params,{ indices: false})
    }
  })
}
