import { initmenu } from '@/api/user'
import account from '@/components/Account.vue'
import gante from '@/components/program/gante.vue'

export const initMenu = (router, store, userid) => {
  //if(store.state.routes.length>0){
  //  return;
  //}
  initmenu(userid).then(response => {
    if(response) {
      var fmtRoutes = fmtRouters(response);
      router.addRoutes(fmtRoutes);
      store.commit('initMenu', fmtRoutes);
    }
  })
}

export const fmtRouters = (routes) => {
  let fmRoutes = [];
  routes.forEach(router => {
    let {
      path,
      component,
      name,
      iconCls,
      children
    } = router;
    if(children && children instanceof Array) {
      children = fmtRouters(children);
    }
    var cname = '';
    if(component.startsWith('home')){
//    cname = resolve => require.ensure([],() => resolve => require(['@/components/Home.vue']))
      cname = () => import('../components/Home.vue')
    }else if(component.startsWith('sub')){
//    cname = resolve => require.ensure([],() => resolve => require(['@/components/info/submitInfo.vue']))
      cname = () => import('../components/info/submitInfo.vue')
    }else if(component.startsWith('prolist')){
//    cname = resolve => require.ensure([],() => resolve => require(['@/components/info/submitInfo.vue']))
      cname = () => import('../components/program/prolist.vue')
    }else if(component.startsWith('plan')){
//    cname = resolve => require.ensure([],() => resolve => require(['@/components/info/submitInfo.vue']))
      cname = () => import('../components/program/plan.vue')
    }else if(component.startsWith('gante')){
//    cname = resolve => require.ensure([],() => resolve => require(['@/components/info/submitInfo.vue']))
      cname = () => import('../components/program/gante.vue')
    }else if(component.startsWith('Good')){
      cname = () => import('../components/GoodList.vue')
    }else if(component.startsWith('auth')){
      cname = () => import('../components/authControl/')
    }else if(component.startsWith('account')){
      cname = () => import('../components/Account.vue')
    }else if(component.startsWith('menuConfig'))
    {
      cname = () => import('../components/authControl/components/menuConfig.vue')
    }
    
    let fmRouter = {
      path: path,
//    component: resolve => require(['@/components/Account.vue'], resolve),
//    component(resolve) {
//      if(component == 'home'){
//        require(['@/components/Home.vue'],resolve)
//      }
//      else if(component == 'submitInfo'){
//        require(['@/components/info/submitInfo.vue'],resolve)
//      }
//    },
      component: cname,
      name: name,
      iconCls: iconCls,
      children: children
    };
    
    fmRoutes.push(fmRouter);
  })
  return fmRoutes;
}