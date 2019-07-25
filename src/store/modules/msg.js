import { sendNotice,getMsgList,getMsgCount } from '@/api/msg'
import { getToken } from '@/utils/auth'

//import SockJS from  'sockjs-client';
//import Stomp from 'stompjs';

import Stomp from 'stompjs'
import SockJS from 'sockjs-client'

const state = {
  stomp: '',
  notReadCount: '',
  isConnected: false,
  infoCount: ''
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
  },
  connect({ commit,state },infoCount){
//  alert(infoCount)
    state.infoCount = infoCount
    state.stomp = Stomp.over(new SockJS("http://localhost:8081/pullMsg"));
    state.stomp.connect({},frame => {
    state.stomp.subscribe("/topic/publicMsg",message => {
//        alert(JSON.parse(message.body))
          const token = getToken()
          getMsgCount(token).then(result => {
            state.infoCount = result.obj.infoCount
          })
      })
    })
  },
  getMsgCount({ commit },token){
    return new Promise((resolve,reject) => {
      getMsgCount(token).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  send({ commit,state }){
    const token = getToken()
    state.stomp.send("/app/getMsgCount",{},token)
  },
  
  closeConnect({ commit }){
    if(state.stomp != null){
      alert("关闭连接")
      state.stomp.disconnect()
    }
  }
  
}

 export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
