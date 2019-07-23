<template>
  <div>
    <div style="margin-top: 20px;margin-left: 450px;">
      <span><el-input v-model="roleName" placeholder="请输入身份的英文名称或者汉语拼音名称" style="width: 200px;"></el-input></span>
      <span><el-input v-model="roleZh" placeholder="请输入身份的中文" style="width: 200px;"></el-input></span>
      <span><el-button type="primary" @click="addNewRole">添加身份</el-button></span>
    </div>
    <el-collapse accordion v-model="activeColItem" @change="collapseChange" style="margin-top: 20px;">
      <el-collapse-item v-for="(item,index) in roleList" :title="item.roleName" :name="item.id" :key="item.name">
        <el-card class="box-card" style="width: 700px;margin-left: 350px;">
          <div slot="header" class="clearfix">
            <span>{{item.roleName}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="deleteRole">操作按钮</el-button>
          </div>
          <div class="block">
            <el-tree :data="data" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false" ref="tree" highlight-current :default-checked-keys="checkedKeys">
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span>{{ data.name }}</span>
              </span>
            </el-tree>
            <div style="display: flex;justify-content: flex-end;margin-right: 10px">
              <!--@click="cancelUpdateRoleMenu"-->
              <el-button size="mini" @click="cancelUpdateRoleMenu">取消修改</el-button>
              <el-button type="primary" size="mini" @click="updateRoleMenu(index)">确认修改</el-button>
            </div>
          </div>
        </el-card>
      </el-collapse-item>
    </el-collapse>
  </div>

  </div>
</template>

<script>
  let id = 1000;
  import { getToken } from '@/utils/auth'

  export default {
    data() {
      return {
        data: '',
        roleList: '',
        activeColItem: -1,
        checkedKeys: [],
        roleName: '',
        roleZh: ''
      }
    },
    inject: ['reload'],
    mounted() {
      this.getRoleList()
    },
    methods: {
      getRoleList() {
        this.$store.dispatch('menu/getRoleList').then(result => {
          this.roleList = result
        })
      },
      collapseChange(activeNames) {
        if(activeNames == '') {
          return;
        }
        this.$store.dispatch('menu/getMenuList', activeNames).then(result => {
          this.data = result.menus;
          this.checkedKeys = result.mids;
        })
      },
      updateRoleMenu(index) {
        const checkedKeys = this.$refs.tree[index].getCheckedKeys(true)
        //      alert(checkedKeys)
        const data = {
          id: this.activeColItem,
          mids: checkedKeys
        }
        this.$store.dispatch('menu/updateMenu', data).then(result => {
          if(result.status = 200) {
            this.$message({
              message: result.msg,
              type: 'success'
            });
            this.reload()
          }
        })
      },
      cancelUpdateRoleMenu(){
        this.activeColItem = -1
      },
      addNewRole(){
        this.$store.dispatch('menu/addNewRole',this.roleName).then(result => {
          if(result.status == 200){
            this.$message({
              message: result.msg,
              type: 'success'
            });
            this.reload()
          }else{
            this.$message.error(result.msg)
          }
          
        })
      },
      deleteRole() {},
      append(data) {
        const newChild = {
          id: id++,
          label: 'testtest',
          children: []
        };
        if(!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
    }
  };
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>