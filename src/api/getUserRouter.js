export const formatRoutes = (routes)=> {
  let fmRoutes = [];
  routes.forEach(router=> {
    let {
      path,
      component,
      name,
      iconCls,
      children
    } = router;
    if (children && children instanceof Array) {
      children = formatRoutes(children);
    }
    let fmRouter = {
      path: path,
      component:'@/components/Account.vue',
      name: name,
      iconCls: iconCls,
      children: children
    };
    fmRoutes.push(fmRouter);
  })
  return fmRoutes;
}

