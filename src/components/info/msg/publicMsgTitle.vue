<template>
  <div id="publicMsgTitle">
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" @expand-change="expandSelect">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="标题">
              <span>{{ props.row.other }}</span>
            </el-form-item>
            <el-form-item label="提交人">
              <span>{{ props.row.uname }}</span>
            </el-form-item>
            <el-form-item label="时间">
              <span>{{ props.row.mdate | dateFormat }}</span>
            </el-form-item>
            <el-form-item label="位置">
              <span>{{props.row.poi}}</span>
            </el-form-item>
            <el-form-item label="信息类型">
              <span>{{props.row.type}}</span>
            </el-form-item>

          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="250">
        <template slot-scope="scope">
          <router-link :to="'/publicMsgDetail?msid='+scope.row.id+'&uid='+uid+'&isRead='+scope.row.isRead">{{ scope.row.other }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="提交人" width="150">
        <template slot-scope="scope">{{ scope.row.uname }}</template>
      </el-table-column>
      <el-table-column prop="address" label="时间" width="250">
        <template slot-scope="scope">{{ scope.row.mdate | dateFormat}}</template>
      </el-table-column>
      <el-table-column prop="address" width="150">
        <template slot-scope="scope">
          <span v-if="scope.row.isEmer==1"><el-tag type="danger"><i class="fa fa-fire" aria-hidden="true"></i>紧急通知</el-tag></span>
          <span v-if="scope.row.isEmer==0"><el-tag><i class="fa fa-fire" aria-hidden="true"></i></el-tag></span>
        </template>
      </el-table-column>
      <el-table-column prop="address" show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="scope.row.isRead==1"><el-tag>已读</el-tag></span>
          <span v-if="scope.row.isRead==0"><el-tag type="danger">未读</el-tag></span>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">删除</el-button>
      <el-button @click="cancelSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
  import { getToken } from '@/utils/auth'
  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        uid: '',
        msids: []
      }
    },
    mounted() {
      this.getList()
    },
    inject: ['reload'],
    methods: {
      toggleSelection() {
        alert(JSON.stringify(this.multipleSelection))
        
        this.msids = []
        this.multipleSelection.forEach((val,index) => {
         this.msids.push(val.id)
        })
        const info = { msids:this.msids,uid:this.$store.state.user.id}
        this.$store.dispatch('msg/deleteMsg',info).then(result => {
           if(result.status == 200){
             this.$message.success("删除成功")
             this.reload()
           }
         })
      },
      cancelSelection(){
        this.$refs.multipleTable.clearSelection();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      getList() {
        const token = getToken()
        this.$store.dispatch('user/getInfo').then(response => {
          const uid = response.id
          this.uid = uid
          this.$store.dispatch('msg/getPublicMsgTitle', uid).then(result => {
            //          alert(JSON.stringify(result))
            this.tableData = result.obj
          })
        })
      },
      expandSelect(row, expandedRows) {
        const token = getToken()
        const info = {
          msid: row.id,
          uid: this.$store.state.user.id
        }
        if(row.isRead == 0) {
          row.isRead = 1
          this.$store.dispatch('msg/changeReadState', info).then(result => {
            this.$store.dispatch('msg/getMsgCount', token).then(response => {
              this.$store.state.msg.infoCount = response.obj.infoCount
            })
          })
        }
      },

    }
  }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>