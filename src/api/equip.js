import request from '@/utils/request'

export function getEquipList(){
  return request({
    url: '/equip/getList',
    method: 'get' 
  })
}

export function getDetail(id){
  return request({
    url:'/equip/getDetail',
    method: 'get',
    params: { id }
  })
}
