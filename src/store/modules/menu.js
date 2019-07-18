import { getRoleList,getMenuList,updateMenu,addNewRole } from '@/api/menu'

const state = {
  
}

const mutations = {
  
}

const actions = {
  getRoleList({ commit }){
    return new Promise((resolve,reject) => {
      getRoleList().then(response => {
        resolve(response)
      }).catch(error => {
          reject(error)
        })
   
    })
  },
  getMenuList({ commit },id){
    return new Promise((resolve,reject) => {
      getMenuList(id).then(response => {
        resolve(response)
      }).catch(error => {
          reject(error)
        })
    })
  },
  updateMenu({ commit },data){
//  const { id,mids } = data
    return new Promise((resolve,reject) => {
      updateMenu(data).then(response => {
        resolve(response)
      }).catch(error => {
          reject(error)
        })
    })
  },
  addNewRole({ commit },roleName){
    return new Promise((resolve,reject) => {
      addNewRole(roleName).then(response => {
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