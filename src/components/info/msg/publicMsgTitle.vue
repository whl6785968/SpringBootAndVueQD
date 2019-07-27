<template>
  <div id="publicMsgTitle">
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="标题" width="250">
        <template slot-scope="scope"><router-link :to="'/publicMsgDetail?msid='+scope.row.id+'&uid='+uid+'&isRead='+scope.row.isRead">{{ scope.row.other }}</router-link></template>
      </el-table-column>
      <el-table-column prop="name" label="提交人" width="150">
        <template slot-scope="scope">{{ scope.row.uname }}</template>
      </el-table-column>
      <el-table-column prop="address" label="时间" width="250">
        <template slot-scope="scope">{{ scope.row.mdate | dateFormat}}</template>
      </el-table-column>
      <el-table-column prop="address"  width="150">
        <template slot-scope="scope">
          <span v-if="scope.row.isEmer==1"><el-tag type="danger"><i class="fa fa-fire" aria-hidden="true"></i>紧急通知</el-tag></span>
          <span v-if="scope.row.isEmer==0"><el-tag><i class="fa fa-fire" aria-hidden="true"></i></el-tag></span>
        </template>
      </el-table-column>
       <el-table-column prop="address"  show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="scope.row.isRead==1"><el-tag>已读</el-tag></span>
          <span v-if="scope.row.isRead==0"><el-tag type="danger">未读</el-tag></span>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
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
        uid: ''
      }
    },
    mounted(){
      this.getList()
    },
    methods: {
      toggleSelection(rows) {
        if(rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      getList(){
        const token = getToken()
        this.$store.dispatch('user/getInfo').then(response => {
          const uid = response.id
          this.uid = uid
          this.$store.dispatch('msg/getPublicMsgTitle',uid).then(result => {
//          alert(JSON.stringify(result))
            this.tableData = result.obj
          })
        })
      }
    }
  }
</script>

<style>

</style>