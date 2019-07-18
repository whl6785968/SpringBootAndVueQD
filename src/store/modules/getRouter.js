import { initmenu } from '@/api/user'
import { formatRoutes } from '@/api/getUserRouter'

const state = {
}

const mutations = {

}

const getters = {
  getRouters: function(state){
    return state.routes
  }
}

const actions = {
  initmenu({
    commit
  }, userid) {
    //  alert(userid+"ajajaj")
    return new Promise((resolve, reject) => {
      const userId = parseInt(userid)
      initmenu(userId).then(response => {
        const data = response
        const formatRoute = formatRoutes(data)
//      state.routers = formatRoute
        commit('initMenu',formatRoute)
        resolve(formatRoute)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getMenu({ commit },userid){
    return new Promise((resolve, reject) => {
      const userId = parseInt(userid)
      initmenu(userId).then(response =>{
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