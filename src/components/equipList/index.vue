<template>
  <div class="equipList">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="equip" style="box-shadow:0 0 3px #D3D4D6">
          <span>
            <el-input v-model="input" placeholder="请输入设备名称或编号" size="small" style="width: 180px;margin-top: 30px;margin-left: -10px;"></el-input>
            <el-button type="primary" size="small" style="margin-left: -5px;">
                                查询
            </el-button>
            <el-button type="primary" size="small" style="margin-left: -1px;">
                                分组                
            </el-button>
          </span>
          <div style="margin-top: 20px;height: 80px;">
            <div style="border-top: 1px solid #BCBEC2;border-bottom: 1px solid #BCBEC2;display:flex;justify-content:center;height: 100%;" v-for="(item,index) in equipList" :key="index">
              <div style="height: inherit;width: 100px;">
                <el-radio v-model="radio" :label="item.eno" style="margin-top: 35px;" @change="getShowData">设备{{index}}</el-radio>
              </div>
              <div style="height: inherit;width: 300px;padding-left: 0;margin: 0;">
                <h3>{{item.ename}}</h3>
                <font style="font-size: 5px;color: #999999">{{item.eno}}</font>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div style="width: 92%;margin-left: 50px;margin-top: 39px;box-shadow:0 0 3px #D3D4D6">
          <div style="background-color:#E6E6E6 ;height: 50px;display: flex;justify-content: space-between;">
            <h2 style="margin: 0;padding: 10px 10px;">设备名称:{{currName}}</h2><h2 style="margin-left: -350px;margin-top:0;padding: 10px 10px;"v-if="radio=='00202440000000004'">(默认设备)</h2>
            <font style="font-size: 5px;color: #999999;margin: 0;padding: 20px 15px;">设备编号:{{currNo}}</font>
          </div>
          <div style="margin: 0;">
            <el-table :data="tableData" :border="false" style="width: 100%" :show-header="false">
              <el-table-column prop="edname" width="120">
                <template slot-scope="scope">
                  <!--<i class="el-icon-time"></i>-->
                  <div style="margin-left: 0px"><strong>{{ scope.row.cname }}</strong></div>
                  <font style="font-size: 5px;color: #999999;margin: 0;">数据点ID：{{scope.row.edid}}</font>
                </template>
              </el-table-column>
              <el-table-column prop="eref" width="120">
                <template slot-scope="scope">
                  <div>
                    <font style="font-size: 5px;color: #999999;margin: 0;">从机名称</font>
                  </div>
                  <div>
                    <font style="font-size: 5px;color: #999999;margin: 0;">{{scope.row.eref}}</font>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="edate" width="180">
                <template slot-scope="scope">
                  <div>
                    <font style="font-size: 5px;color: #999999;margin: 0;">更新时间</font>
                  </div>
                  <div>
                    <font style="font-size: 5px;color: #999999;margin: 0;">{{scope.row.edate | dateFormat}}</font>
                  </div>
                  
                </template>
              </el-table-column>
              <el-table-column prop="evalue" width="120">
                <template slot-scope="scope">
                  <h3>当前值:{{scope.row.evalue}}</h3>
                </template>
              </el-table-column>
              <el-table-column fixed="right">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">history</el-button>
                  <el-button type="text" size="small">more</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        radio: '00202440000000004',
        currName: 'GPRS232-734',
        currNo: '00202440000000004',
        tableData: [],
        equipList: []
      }
    },
    mounted(){
      this.getEquipList(),
      this.getShowData()
    },
    methods: {
      handleClick(row) {
        const edid = row.edid
        this.$store.dispatch('equip/getRefByEdid',edid).then(result => {
          this.$router.push("/equipList/ehistory?eno="+this.radio+"&edid="+edid+"&rid="+result.obj.id)  
        })
//      const eref = row.eref
      },
      getDetail(){
        this.$store.dispatch('equip/getDetail',this.radio).then(result => {
          this.tableData = result.equipdetailList
          this.currName = result.ename
          this.currNo = result.eno
        })
      },
      getEquipList(){
        this.$store.dispatch('equip/getEquipList').then(result => {
//        alert(JSON.stringify(result))
          this.equipList = result;
        })
      },
      getShowData(){
        this.$store.dispatch('equip/getShowData',this.radio).then(result => {
//        alert(JSON.stringify(result))
          this.tableData = result.obj.showdata
          this.currName = result.obj.ename
          this.currNo = result.obj.eno
        })
      }
    }
  }
</script>

<style>
  .equip {
    height: 500px;
    width: 100%;
    background-color: #E6E6E6;
    margin-top: 40px;
  }
</style>