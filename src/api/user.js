import request from '@/utils/request'

export function login(data) {
  return request({
    url : '/user/login',
    method: 'post',
    data  
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
} 

export function initmenu(userId) {
  return request({
    url: '/tstMenu',
    method: 'get',
    params: { userId }
  })
}

export function getAllUser() {
  return request({
    url: '/user/getAllUser',
    method: 'get'
  })
}

export function changeAuth(id,auth) {
  return request({
    url:'/user/changeAuth',
    method: 'post',
    params: { id,auth}
  })
}
