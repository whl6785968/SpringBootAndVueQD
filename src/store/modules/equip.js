import { getEquipList,getDetail } from '@/api/equip'

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
  }
}

 export default {
    namespaced: true,
    state,
    mutations,
    actions
  }