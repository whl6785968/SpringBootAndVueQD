<template>
  <div class="box">
    <div id="boxMap" style="overflow-y: auto;"></div>
    <div style="display: none">
      <div v-for="(item,index) in cardData" :key="item.location" class="sid" style="width: 300px;" ref="card">
        <el-card class="cardbox" style="width: 300px;">
          <div slot="header" class="clearfix">
            <span><strong>{{item.ename}}</strong></span>
          </div>
          <div class="text item" style="text-align: left;">
            <div>设备编号:{{item.eno}}</div>
            <div>设备位置:{{item.location}}</div>
            <div>设备负责人:{{item.charge}}</div>
            <div>设备状态:<el-tag type="danger" effect="dark" v-if="item.state == 2" size="mini" style="width: 50px;text-align: center;">error</el-tag>
              <el-tag type="success" effect="dark" v-if="item.state == 1" >正常</el-tag>
              <el-tag type="info" effect="dark" v-if="item.state == 3">维修中</el-tag>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        equipName: [],
        equipNo: [],
        longitude: [],
        latitude: [],
        charge: [],
        locations: [],
        states: [],
        cardData: [],
        markPoint: [],
        ssid: ''
      }
    },
    mounted() {
      this._getMapData(),
      this.getAllEquipInfo()    
    },
    updated() {
     this.updateInfo()
    },
    methods: {
      _getMapData() {
        let map = new BMap.Map("boxMap"); // 创建Map实例
        let point = new BMap.Point(118.7809, 32.040619);
        map.centerAndZoom(point, 12);
        map.setCurrentCity("南京"); // 地图显示的城市
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.GeolocationControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        var marker = new BMap.Marker(point);
        map.addOverlay(marker)
        window.map = map; //将map变量储存在全局
        //****将map变量存储在全局，只有将地图储存在全局，别的方法才能取到
      },
      markfun(points, label, infoWindows) {
        var markers = new BMap.Marker(points)
        map.addOverlay(markers)
        markers.setLabel(label)
        markers.addEventListener("click", function(event) {
          map.openInfoWindow(infoWindows, points)
        })
      },
      getAllEquipInfo() {
        this.$store.dispatch('equip/getAllEquipInfo').then(result => {
          //        alert(JSON.stringify(result))
          if(result.status == 200) {
            this.cardData = result.obj
            result.obj.forEach((val, index) => {
              this.equipName.push(val.ename)
              this.equipNo.push(val.eno)
              this.longitude.push(val.longitude)
              this.latitude.push(val.latitude)
              this.locations.push(val.location)
              this.states.push(val.state)
            })
          }   
        })
      },
      updateInfo() {
         var cards = this.$refs.card
          for(var i=0;i<this.cardData.length;i++){
            this.markPoint.push({
              y: this.longitude[i],
              x: this.latitude[i],
              title: this.equipName[i],
              con: cards[i]
            })
          }
          for(var i=0;i<this.markPoint.length;i++){
            var point = new BMap.Point(this.markPoint[i].y,this.markPoint[i].x)
            var lable = new BMap.Label(this.markPoint[i].title)
            var info = new BMap.InfoWindow(this.markPoint[i].con,
            {
              width:300,
              height:200,
            });
            this.markfun(point,lable,info)
          }
      },
      tst(){
        alert(JSON.stringify(this.ssid[0]))
      }
    }
  }
</script>

<style>
  .box {
    width: 100%;
    min-height: 800px;
  }
  
  #boxMap {
    width: 100%;
    min-height: 700px;
    margin: 0;
    padding: 0;
  }
</style>