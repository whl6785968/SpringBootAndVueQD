<template>
  <div>
    <el-container>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="4">
          <el-aside width="220px" style="margin-top: -65px;">
            <el-row style="height: 100%;">
              <el-col :span="24" style="height: 100%;">
                <el-menu :collapse="isCollapse" ref="elmenu" :router="true" unique-open :default-active="activeIndex" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                  <!--<el-menu-item index="/menuConfig">
                    <i class="el-icon-menu"></i>
                    <span slot="title">menuConfig</span>
                  </el-menu-item>-->
                   <el-menu-item index="/equipList">
                    <i class="el-icon-menu"></i>
                    <span slot="title">数据列表</span>
                  </el-menu-item>
                  <template v-for="(item,index) in this.routes" v-if="!item.hidden">
                    <el-submenu :key="index" :index="index+''">
                      <template slot="title">
                        <i :class="item.iconCls"></i>
                        <span slot="title">{{item.name}}</span>
                      </template>
                      <el-menu-item v-for="(child,index) in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
                    </el-submenu>
                  </template>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
        </el-col>
        <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="20">
          <el-container>
            <el-header>
              <el-row :gutter="15">
                  <el-card class="box-card" style="height: 60px;margin-left:-10px;;width: 100%;">
                    <el-row>
                      <el-col :span="1" style="margin-top: -5px;margin-left: -20px;">
                        <i class="el-icon-s-fold" v-if="!isCollapse" @click="collapse" style="display: block;font-size: 30px;cursor: pointer;"></i>
                        <i class="el-icon-s-unfold" v-if="isCollapse" @click="collapse" style="display: block;font-size: 30px;cursor: pointer;"></i>
                      </el-col>
                      <el-col :span="8" style="margin-left: -500px;margin-top: 4px;">
                        <breadcrumb style="margin-left: 500px;width: 200px  ;"></breadcrumb>
                      </el-col>
                    </el-row>
                  </el-card>
              </el-row>
            </el-header>

            <el-main>
              <transition mode="out-in">
                <router-view v-if="isRouterAlive"></router-view>
              </transition>
            </el-main>
            <!--<el-footer>Footer</el-footer>-->
          </el-container>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
  import breadcrumb from '@/components/breadcrumb.vue'
  export default {
    data() {
      return {
        activeIndex2: '/goodlist',
        activeIndex: '2',
        isCollapse: false,
        isRouterAlive: true
      }
    },
    provide() {
      return {
         reload: this.reload
      }
    },
    mounted() {
      this.activeIndex2 = "/" + this.$route.path.split("/")[1];
      this.activeIndex = "/" + this.$route.path.split("/")[1];
      if(this.activeIndex2 == '/home') {
        this.activeIndex2 = '/goodlist'
      };
      //    this.promotion()
    },
    methods: {
      collapse(){
        this.isCollapse = !this.isCollapse
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      gsActionData(msg) {
        //				this.activeIndex2 = msg
        document.getElementById("elmenu").setAttribute("default-active", msg)
      },
      promotion() {
        alert(JSON.stringify(this.$store.state.routes))
      },
       reload() {
        this.isRouterAlive = false;
        this.$nextTick(function(){
          this.isRouterAlive = true
        })
      }
    },
    watch: {
      "$route.path": function(newVal) {
        const rout = newVal.split("/")
//      alert(rout)
        const activePart = "/"+rout[1]
//      alert(activePart)
        this.activeIndex = activePart
      }
    },
    computed: {
      routes() {
//      alert(JSON.stringify(this.$store.state.routes));
        return this.$store.state.routes
      }
    },
    components: {
      'breadcrumb': breadcrumb
    }
  };
</script>

<style lang="scss" scoped>
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(150px);
  }
  
  .v-enter-active,
  .v-leave-active {
    transition: all 0.8s ease;
  }
  
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  
  .el-icon-arrow-down {
    font-size: 12px;
  }
  
  .el-header {
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 230px;
    width: 100%;
    height: 100%;
  }
  
  .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin: 0;
    padding: 0;
  }
  
  .el-aside {
    text-align: left;
    line-height: 200px;
    position: fixed;
    left: 0;
    top: 61px;
    bottom: 0;
    overflow-x: hidden;
    z-index: 1010;
  }
  
  .el-main {
    position: fixed;
    left: 220px;
    top: 50px;
    bottom: 0;
    width: 88%;
    height: 100%;
  }
  
  body>.el-container {
    margin: 0;
    padding: 0;
  }
  
  .el-container .el-aside {
    line-height: 320px;
    margin: 0;
    padding: 0;
  }
  
  .el-menu-vertical-demo {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  el-submenu {
    margin-left: -5;
  }
  
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>