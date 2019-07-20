import { getEquipList,getDetail,getPm10,getShowData,getRef,getCata,getDetailData,getRefByEdid,exportData } from '@/api/equip'

const state = {
  equipList: []
}

const mutations = {
  
}

const actions = {
  getEquipList({ commit }){
     return new Promise((resolve, reject) => {
      getEquipList().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
     })
  },
  getDetail({ commit },id){
    const eid = id
    return new Promise((resolve,reject) => {
      getDetail(eid).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getPm10({ commit },eno){
    return new Promise((resolve,reject) => {
      getPm10(eno).then(response => {
        resolve(response)
      }).catch(error =>{
        reject(error)
      })
    })
  },
  getShowData({ commit },eno){
    return new Promise((resolve,reject) => {
      getShowData(eno).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getRef({ commit },eno){
    return new Promise((resolve,reject) => {
      getRef(eno).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getCata({ commit },data){
    const { eno,rid } = data
    return new Promise((resolve,reject) => {
      getCata(eno,rid).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getDetailData({ commit },data){
    const { cid,eno,rid } = data
    return new Promise((resolve,reject) => {
      getDetailData(cid,eno,rid).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getRefByEdid({ commit },edid){
    return new Promise((resolve,reject) => {
      getRefByEdid(edid).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  exportData({ commit },edid){
    return new Promise((resolve,reject) => {
      exportData(edid).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
  
// getRef({ commit },eno){
//  return new Promise((resolve,reject) => {
//    getRef(eno).then(response => {
//      resolve(response)
//    }).catch(error => {
//      reject(error)
//    })
//  })
//}
}

 export default {
    namespaced: true,
    state,
    mutations,
    actions
  }