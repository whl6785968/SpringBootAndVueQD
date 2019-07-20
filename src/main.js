// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import echarts from 'echarts'
import { getToken } from '@/utils/auth'
import { formatRoutes } from '@/api/getUserRouter'
import { initMenu } from '@/utils/menuUtil'
import 'font-awesome/css/font-awesome.css'

import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true
/* eslint-disable no-new */

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const hasToken = getToken()
  if(hasToken) {
    if(to.path === '/login') {
      next({
        path: '/home'
      });
    } else {
      store.dispatch('user/getInfo',hasToken).then(response => {
        const data = response
        const id = data.id
        initMenu(router,store,id)
        next()
      })
      
    }
  } else {
    if(whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }

  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  store
})