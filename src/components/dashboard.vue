<template>
  <div id="dashboard" style="height: 300px;width: 300px;margin-top: -20px;margin-left: 40px;" v-loading="loading"></div>
</template>

<script>
  var echarts = require('echarts');
  export default {
    data() {
      return {
        option: {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {}
            }
          },
          series: [{
            name: '业务指标',
            type: 'gauge',
            detail: {
              formatter: '{value}%'
            },
            data: [{
              value: 50,
              name: '完成率'
            }]
          }]
        },
        loading: true
      }
    },
    mounted() {
      this.motion(),
        this.closeLoading()
    },
    methods: {
      motion() {
        var myChart = echarts.init(document.getElementById('dashboard'));
        setInterval(() => {
          //					alert(this.option.series[0].data[0].value)
          var opt = this.option;
          opt.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          myChart.setOption(opt, true);
        }, 2000);

        //				alert(JSON.stringify(this.option.series[0].data[0].value));
      },

      closeLoading() {
        setTimeout(() => {
          this.loading = false
        }, 1500)
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
</style>