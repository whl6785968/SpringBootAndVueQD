import request from '@/utils/request'
import qs from 'qs'

export function getRoleList() {
  return request({
    url: '/menu/getRoleList',
    method: 'get'
  })
}

export function getMenuList(id) {
  return request({
    url: '/menu/getAllMenu/'+id,
    method: 'get'
  })
}

export function updateMenu(data){
//alert(JSON.stringify(data))
  const { id,mids } = data
  return request({
    url: '/menu/updateMenuByRid',
    method: 'post',
    params: { id:id,mids:mids },
    paramsSerializer: params => {
      return qs.stringify(params,{ indices: false})
    }
  })
}

export function addNewRole(roleName){
  return request({
    url: '/menu/addNewRole',
    method: 'post',
    params: { roleName }
  })
}
