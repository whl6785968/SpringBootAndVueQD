<template>
  <div class="navbar" style="width: 270px;">
    <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right" style="width: 270px;">
      <!--<el-breadcrumb-item v-for="item in levelList" :key="item.name" :to="item.path">
          <font style="color: royalblue;font-size: 15px;">{{item.name}}</font>
        </el-breadcrumb-item>-->
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-text="name"></el-breadcrumb-item>

    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        levelList: [],
        name: this.$router.currentRoute.name
      }
    },
    watch: {
     /* $route() {
        this.getBreadCrumb()
      }*/
     '$route'(to,from){
       this.name = this.$router.currentRoute.name
     }
    },
    created() {
      this.getBreadCrumb()
    },
    methods: {
      getBreadCrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0]
        if(!this.isIndex(first)) {
          matched = [{
            path: '/home'
          }].concat(matched)
        }
        //       alert(first.name)
        //       if(frist && firs.name.trim(.toLowerCase()!==''))
        //       this.levelList = matched
        this.levelList = matched

      },
      isIndex(route) {
        const name = route && route.name
        //如果不是home，则返回false，否则返回true
        if(!name) {
          return false
        }
        return name.trim().toLocaleLowerCase() === 'home'.toLocaleLowerCase()
      }
    }
  }
</script>

<style>

</style>