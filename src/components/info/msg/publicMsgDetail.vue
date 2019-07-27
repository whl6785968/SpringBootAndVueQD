<template>
  <div>
    <div class="back">
      <el-page-header @back="goBack" content="详情页面">
      </el-page-header>
    </div>
    <div style="margin-top: 30px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{msgDetail.other}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div>
          <img v-for="item in imgList" :key="item" :src="item" style="height: 500px;width: 500px;"/>
          <!--../../../../img/611fda86bd2540e999e1da0b751c2212.jpg-->
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
  import { getToken } from '@/utils/auth'
  export default {
    data() {
      return {
        msid: this.$route.query.msid,
        uid: this.$route.query.uid,
        isRead: this.$route.query.isRead,
        msgDetail: '',
        imgList: [],
        showImg: '' 
      };
    },
    mounted() {
      if(this.isRead == 0) {
        this.changeReadState()
      }
      this.getMsgDetail()
    },
    updated(){
     
    },
    methods: {
      changeReadState() {
        const token = getToken()
        const info = {
          msid: this.msid,
          uid: this.uid
        }
        this.$store.dispatch('msg/changeReadState', info).then(result => {
          this.$store.dispatch('msg/getMsgCount', token).then(response => {
            alert(JSON.stringify(response))
            this.$store.state.msg.infoCount = response.obj.infoCount
          })
        })
      },
      getMsgDetail() {
        this.$store.dispatch('msg/getPublicMsgDetail', this.msid).then(result => {
          //        alert(JSON.stringify(result))
          this.msgDetail = result.obj
          const imgs = result.obj.imgList
          this.imgList = imgs.split(",")
        })
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
      }
    },
    computed: {
      updateImg(){
        return this.imgList
      }
    }
  }
</script>

<style>

</style>