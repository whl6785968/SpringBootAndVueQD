<template>
  <div id="auth">
    <el-row :gutter="5">
      <el-row>
        <el-col :span="6" v-for="(item,index) in users" :key="item.username">
          <el-card :body-style="{ padding: '0px' }" style="">
            <img src="../../../img/pika1.jpg" class="image" style="height: 300px;width:100% ;">
            <div style="padding: 14px;text-align: center;">
              <span><h3>用户名:{{item.username}}</h3></span>
              <span><el-tag>{{item.roles[0].roleName}}</el-tag></span>
              <div class="bottom clearfix" style="width: 100%;text-align: center;">
                <time class="time">{{ currentDate }}</time>
                <el-dropdown @command="handleCommand" style="margin-left: 20px;">
                  <span class="el-dropdown-link">
                     <el-button type="text" class="button">修改权限</el-button>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="item.id + '_1'">管理员</el-dropdown-item>
                    <el-dropdown-item :command="item.id + '_2'">普通用户</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
        users: ''
      };
    },
    inject: ['reload'],
    mounted() {
      this.getAllUser()
    },
    methods: {
      getAllUser() {
        this.$store.dispatch('user/getAllUser').then(result => {
          this.users = result
        })
      },
      handleCommand(command) {
        //      this.$message('click on item ' + command);
        const data = command.split('_')
        const userid = data[0]
        const auth = data[1]

        const userInfo = {
          userid: userid,
          auth: auth
        }
        this.$store.dispatch('user/changeAuth', userInfo).then(result => {
          if(result == true) {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
//          this.$router.push('/authControl')
//          this.$router.go(0)
            this.reload()
          }
        })
      },
    }
  }
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  
  .el-icon-arrow-down {
    font-size: 12px;
  }
  
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  
  .button {
    padding: 0;
    float: right;
  }
  
  .image {
    width: 100%;
    display: block;
  }
  
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  
  .clearfix:after {
    clear: both
  }
</style>