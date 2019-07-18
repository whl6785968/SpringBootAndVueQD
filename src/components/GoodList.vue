<template>
  <div>
    <el-row :gutter="10">
      <!--:span="6"-->
      <el-col :sm="6" :xs="6" :md="6" :lg="6" :xl="4" style="width:300px">
        <div style="display: block;">
          <el-card class="box-card" style="width:300px;">
            <div slot="header" class="clearfix">
              <span><font style="color:cornflowerblue">公告</font></span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="openNotication">详细</el-button>
            </div>
            <!--<div v-for="o in 4" :key="o" class="text item">
							{{'列表内容 ' + o }}
						</div>-->
            <div style="height: 160px;">
              <span>祝各位身体健康，工作顺利，生活美满</span>
            </div>

          </el-card>
          <el-card class="box-card" style="width:300px;padding: 0;margin-top: 20px;">
            <div slot="header" class="clearfix">
              <span>设备状况</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                <router-link to="/account">详细</router-link>
              </el-button>
            </div>
            <!--<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>-->
            <!--	<div style="height: 160px;">
						
					</div>-->
            <kanban1></kanban1>

          </el-card>

          <el-card class="box-card" style="width:300px;margin-top: 20px;">
            <div slot="header" class="clearfix">
              <span style="">设备状况</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                <el-badge is-dot class="item" style="padding: 0;margin: 0;">数据查询</el-badge>
              </el-button>
            </div>
            <div style="height: 160px;">
              信息提示
            </div>
          </el-card>
        </div>

      </el-col>
      <!--:span="10" left:310px;position: relative;-->
      <el-col :sm="10" :xs="10" :md="10" :lg="10" :xl="16" style="width: 650px;margin-left: 10px;">
        <div style="display: block;">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" style="margin: 0;padding: 0;width: 650px;">
            <el-tab-pane label="用户管理" name="first">
              <div id="chartMain" style="width:625px;height: 320px;">用户管理</div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second" lazy>
              <!--<div id="circle" style="height: 320px;" lazy>配置管理</div>-->
              <line2></line2>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
              <div style="height: 320px;">角色管理</div>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">
              <div style="height: 320px;">定时任务补偿</div>
            </el-tab-pane>

          </el-tabs>
          <el-tabs v-model="activeName1" type="border-card" @tab-click="handleClick1" style="margin-top: 23px;padding: 0;width: 650px;">
            <el-tab-pane label="用户管理" name="first">
              <div id="line" style="width:625px;height: 320px;">用户管理</div>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
              <div id="circle1" style="height: 320px;"> 我的行程</div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
              <div style="height: 320px;">hhm</div>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
              <div style="height: 320px;">角色管理</div>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">
              <div style="height: 320px;">定时任务补偿</div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <!--:span="8" left: 965px;-->
      <el-col :sm="8" :xs="8" :md="8" :lg="8" :xl="4" style="width: 300px;margin-left: 10px;">
        <!--			<el-card class="box-card1" style="margin-left: 25px;height: 803px;">-->
        <div style="display: block;">
          <el-card class="box-card1" style="height: 265px;padding-bottom: 20px;text-align: center;width: 450px;">
            <dashboard></dashboard>
          </el-card>
          <el-card class="box-card1" style="height: 265px;width: 450px;">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
          <el-card class="box-card1" style="height: 265px;width: 450px;">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
var echarts = require('echarts');
import line2 from './Line2.vue'
import dashboard from './dashboard.vue'
import equipListInD from './dashboard/EquipmentListInDashboard.vue'
import kanban1 from './dashboard/KanBan1.vue'
export default {
data() {
  return {
    activeName: "first",
    activeName1: "first",
    option1: {
      title: {
        text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {
            normal: {}
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {
            normal: {}
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    },
    option3: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
      },
      series: [{
          name: '访问来源',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],

          label: {
            normal: {
              position: 'inner'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
              value: 335,
              name: '直达',
              selected: true
            },
            {
              value: 679,
              name: '营销广告'
            },
            {
              value: 1548,
              name: '搜索引擎'
            }
          ]
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '55%'],
          label: {
            normal: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#eee',
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: '#999',
                  lineHeight: 22,
                  align: 'center'
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: '#aaa',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: '#eee',
                  backgroundColor: '#334455',
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            }
          },
          data: [{
              value: 335,
              name: '直达'
            },
            {
              value: 310,
              name: '邮件营销'
            },
            {
              value: 234,
              name: '联盟广告'
            },
            {
              value: 135,
              name: '视频广告'
            },
            {
              value: 1048,
              name: '百度'
            },
            {
              value: 251,
              name: '谷歌'
            },
            {
              value: 147,
              name: '必应'
            },
            {
              value: 102,
              name: '其他'
            }
          ]
        }
      ]
    }
  }
},
mounted () {
  this.drawLine()
  this.drawLine2()
},
methods: {
  handleClick (tab, event) {
    console.log(tab, event)
  },
  handleClick1 (tab, event) {
    console.log(tab, event)
  },
  drawLine () {
    var myChart = echarts.init(document.getElementById('chartMain'))
    myChart.setOption(this.option1)
  },
  drawLine2 () {
    var myChart = echarts.init(document.getElementById('line'))
    myChart.setOption(this.option3)
  },
  openNotication () {
    this.$alert('祝各位身体健康，工作顺利，生活美满', '公告', {
      confirmButtonText: '确定',
      callback: action => {
        this.$message({
          type: 'info',
          message: `action: ${action}`
        })
      }
    })
  }

},
  components: {
      'line2': line2,
      'dashboard': dashboard,
      'equipListInD': equipListInD,
      'kanban1': kanban1
    }
  }
</script>

<style scoped>
  .imgMark {
    margin-left: 300px;
  }
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
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
</style>
