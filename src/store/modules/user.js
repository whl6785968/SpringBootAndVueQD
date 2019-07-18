import { login, logout, getInfo,getAllUser,changeAuth } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          const data = response
//        alert(JSON.stringify(response))
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
        
        
    getInfo({ commit,state }) {
      return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
              const data = response
//            alert(JSON.stringify(data))
              if(!data) {
                reject('Verification failed, please Login again.')
              }
//            if(!roles || roles.length <= 0) {
//              reject('getInfo: roles must be a non-null array!')
//            }
//            commit('SET_ROLES', roles)
              commit('SET_NAME', data.username)
              resolve(data)
            }).catch(error => {
              reject(error)
            })
          })
        },
    resetToken({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    },
    getAllUser({ commit }){
      return new Promise((resolve,reject) =>{
        getAllUser().then(response => {
          resolve(response)
        })
      }).catch(error => {
        reject(error)
      })
    },
    changeAuth({ commit },info){
      const { userid,auth } = info
      
      return new Promise((resolve,reject) => {
        changeAuth(userid,auth).then(response => {
          resolve(response)
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