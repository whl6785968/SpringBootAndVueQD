import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import getRouter from './modules/getRouter'
import equip from './modules/equip'
import menu from './modules/menu'
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    routes: []
  },
  mutations: {
    initMenu(state, menus){
      state.routes = menus;
    }
  },
  modules: {
    user,
    getRouter,
    equip,
    menu
  }
})

export default store