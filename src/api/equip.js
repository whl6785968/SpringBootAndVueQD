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

export function getPm10(eno){
  return request({
    url: '/equip/getPm10',
    method: 'get',
    params: {eno}
  })
}

export function getShowData(eno){
  return request({
    url: '/equip/getShowData',
    method: 'get',
    params: {eno}
  })
}

export function getRef(eno){
  return request({
    url: '/equip/selectRef',
    method: 'get',
    params: { eno }
  })
}

export function getCata(eno,rid){
  return request({
    url: '/equip/selectCata',
    method: 'get',
    params: { eno,rid }
  })
}

export function getDetailData(cid,eno,rid){
  return request({
    url: '/equip/getDetailData',
    method:'get',
    params: { cid,eno,rid }
  })
}

export function getRefByEdid(edid){
  return request({
    url: '/equip/getRefByEdid',
    method: 'get',
    params: { edid }
  })
}

export function exportData(edid){
  return request({
    url: '/equip/exportEquipData',
    method: 'post',
    params: { edid }
  })
}

export function getAllEquipInfo(){
  return request({
    url: '/equip/getAllEquipInfo',
    method: 'get'
  })
}


