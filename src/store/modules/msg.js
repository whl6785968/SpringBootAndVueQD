import { sendNotice,getMsgList } from '@/api/msg'

const state = {
  
}

const mutations = {
  
}

const actions = {
  sendNotice({ commit },msg){
    const { name,uname,poi,mdate,isemer,type,other,uid } = msg
    return new Promise((resolve,reject) => {
      sendNotice({ name:name,poi:poi,mdate:mdate,isemer:isemer,type:type,other:other,uid:uid}).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getMsgList({ commit }){
    return new Promise((resolve,reject) => {
      getMsgList().then(response => {
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
