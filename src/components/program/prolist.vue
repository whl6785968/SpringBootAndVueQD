<template>
  <div>
    <el-table :data="tableData" style="width: 100%;" max-height="500">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="站点名称" width="120">
      </el-table-column>
      <el-table-column prop="longtitude" label="经度" width="120">
      </el-table-column>
      <el-table-column prop="latitude" label="纬度" width="120">
      </el-table-column>
      <el-table-column prop="tss" label="tss均值" width="120">
      </el-table-column>
      <el-table-column prop="disolve" label="溶解率均值" width="120">
      </el-table-column>
      <el-table-column prop="rInfo" label="最近信息" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2019-07-06',
          name: '南京',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>