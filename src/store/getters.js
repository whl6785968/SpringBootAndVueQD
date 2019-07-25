const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  routes: state => state.getRouter.routes
  infoCount: state => state.msg.infoCount
}
export default getters