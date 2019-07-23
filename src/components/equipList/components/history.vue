<template>
  <div class="history">
    <div class="back">
      <el-page-header @back="goBack" content="详情页面">
      </el-page-header>
    </div>
    <el-tabs tab-position="top" style="height: 100%; margin-top: 30px;">
      <el-tab-pane label="历史记录">
        <div class="optional" style="margin-left: 350px;">
          <el-select v-model="ref" placeholder="请选择" @change="getCata">
            <el-option v-for="item in options1" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
          <el-select v-model="cata" placeholder="请选择" :loading="cataLoading" @change="setTitle">
            <el-option v-for="item in options2" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
          <el-button type="primary" @click="getData">查询数据</el-button>
          <el-button type="success" @click="exportExcel"><i class="fa fa-lg fa-level-down" style="margin-right: 0px"></i>导出数据
          </el-button>
        </div>
        <div id="chartDistrict" ref="chartDistrict" style="width: 100%;height: 500px;"></div>
        <div class="tableData" style="width: 100%;height:500px;text-align: center;">
          <el-table :data="tableData" stripe style="width: 100%;" height="400">
            <el-table-column prop="id" label="id" width="200">
            </el-table-column>
            <el-table-column prop="dvalue" label="值" width="200">
            </el-table-column>
            <el-table-column prop="ddate" label="日期" width="300">
              <template slot-scope="scope">{{ scope.row.ddate | dateFormat }}</template>
            </el-table-column>
            <el-table-column prop="cid" label="数据点">
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理">报警记录</el-tab-pane>
      <el-tab-pane label="定位监控"><orientation></orientation></el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import orientation from './orientation.vue'
  var echarts = require('echarts');
  export default {
    data() {
      return {
        options1: '',
        ref: '',
        eno: this.$route.query.eno,
        rid: this.$route.query.rid,
        edid: this.$route.query.edid,
        cata: '',
        options2: '',
        cataLoading: true,
        isFirst: true,
        tableData: [],
        series: [],
        x: [],
        title: '',
        options: ''
      }
    },
    mounted() {
      if(this.isFirst) {
        this.initData()
        this.isFirst = false
      };

    },
    methods: {
      initData() {
        this.$store.dispatch('equip/getRef', this.eno).then(result => {
          if(result.status == 200) {
            this.options1 = result.obj.refmachines
            //          alert(JSON.stringify(this.options1))
            result.obj.refmachines.forEach((val, index) => {
              if(val.id == this.rid) {
                this.ref = val.id
              }
            })
            //          this.ref = result.obj.refmachines[0].id
            const data1 = {
              eno: this.eno,
              rid: this.ref
            }
            this.$store.dispatch('equip/getCata', data1).then(result => {
              if(result.status == 200) {
                this.options2 = result.obj
                this.cataLoading = false
                result.obj.forEach((val, index) => {
                  if(val.id == this.edid) {
                    this.cata = val.id
                  }
                })
                //              this.cata = result.obj[0].id
                this.title = result.obj[0].name
                const data2 = {
                  cid: this.cata,
                  eno: this.eno,
                  rid: this.ref
                }
                this.$store.dispatch('equip/getDetailData', data2).then(result => {
                  this.tableData = result.obj
                  this.series = []
                  this.x = []
                  result.obj.forEach((val, index) => {
                    this.series.push(val.dvalue)
                    this.x.push(new Date(val.ddate))
                  })
                  const options = {
                    xAxis: {
                      type: 'category',
                      data: this.x
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [{
                      data: this.series,
                      type: 'line',
                      smooth: true
                    }],
                    title: {
                      text: '数据表',
                      //                    subtext: this.title
                    }
                  }
                  this.options = options
                  this.showChart()
                })
              }
            })
          }
        })
      },
      getRef() {
        this.$store.dispatch('equip/getRef', this.eno).then(result => {
          this.options1 = result.obj.refmachines
          this.ref = result.obj.refmachines[0].id
        })
      },
      getCata() {
        const data = {
          eno: this.eno,
          rid: this.ref
        }
        this.$store.dispatch('equip/getCata', data).then(result => {
          this.options2 = result.obj
          this.cata = result.obj[0].id
          this.cataLoading = false
        })
      },
      getData() {
        const data = {
          cid: this.cata,
          eno: this.eno,
          rid: this.ref
        }
        this.$store.dispatch('equip/getDetailData', data).then(result => {
          this.tableData = result.obj
          this.series = []
          this.x = []
          result.obj.forEach((val, index) => {
            this.series.push(val.dvalue)
            this.x.push(new Date(val.ddate))
          })
          const options = {
            xAxis: {
              type: 'category',
              data: this.x
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: this.series,
              type: 'line',
              smooth: true
            }],
            title: {
              text: '数据表',
              //            subtext: this.title
            }
          }
          this.options = options
          this.showChart()
        })
      },
      showChart() {
        var chart = echarts.init(document.getElementById('chartDistrict'))
        chart.setOption(this.options);

      },
      setTitle() {
        //      alert(11)
      },
      goBack() {
        if(window.history.length <= 1) {
          this.$router.push({
            path: '/home'
          })
          return false
        } else {
          this.$router.go(-1)
        }
      },
      exportExcel() {
        //      window.open("/hh","_parent")
        const edid = this.cata
        //      this.$store.dispatch('equip/exportData',edid).then(result => {
        //      })
        const url = "http://localhost:8081/equip/exportEquipData?edid=" + edid
        window.open(url, "_parent")

      }
    },
    components: {
      'orientation': orientation
    }
  }
</script>

<style>

</style>