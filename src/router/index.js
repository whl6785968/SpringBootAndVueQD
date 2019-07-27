import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodlist from '@/components/GoodList.vue'
import account from '@/components/Account.vue'
import home from '@/components/Home.vue'
import line2 from '@/components/Line2.vue'
import dashboard from '@/components/dashboard.vue'
import lg from '@/components/login/login.vue'
import plan from '@/components/program/plan.vue'
import prolist from '@/components/program/prolist.vue'
import subInfo from '@/components/info/submitInfo.vue'
import gante from '@/components/program/gante.vue'
import breadcrumb from '@/components/breadcrumb.vue'
import equipList from '@/components/equipList/'
import authControl from '@/components/authControl/'
import menuConfig from '@/components/authControl/components/menuConfig.vue'
import ehistory from '@/components/equipList/components/history.vue'
import orientation from '@/components/equipList/components/orientation.vue'
import msg from '@/components/info/msg/msg.vue'
import publicMsgDetail from '@/components/info/msg/publicMsgDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: lg,
      hidden:true
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path:'/home',
          redirect: '/goodlist'
        },
        {
          path: '/goodlist',
          component: goodlist
        },
        {
          path:'/equipList',
          component:equipList
        },
        {
          path: '/equipList/ehistory',
          component:ehistory
        },
        {
          path:'/equipList/orientation',
          component: orientation
        },
        {
          path: '/msg',
          component: msg
        },
        {
          path: '/publicMsgDetail',
          component: publicMsgDetail
        }

      ],
      hidden: true
    }
/*    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path:'/account',
          component: account
        }
      
      ],
    }*/
  ]
})

/*export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: lg
    },
    {
      path: '/home',
      component: home,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path:'/home',
          component: goodlist
        },
        {
          path: '/goodlist',
          component: goodlist,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/account',
          component: account,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/line2',
          component: line2,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/dashboard',
          component: dashboard,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/prolist',
          component: prolist,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/submitInfo',
          component: subInfo,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/gante',
          component: gante,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/plan',
          component: plan,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
*/