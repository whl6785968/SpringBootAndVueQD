<template>
  <div>
    <h3>detail</h3>
  </div>
</template>

<script>
  import { getToken } from '@/utils/auth'
   export default {
    data(){
      return {
        msid: this.$route.query.msid,
        uid: this.$route.query.uid,
        isRead: this.$route.query.isRead
      };
    },
    mounted(){
      if(this.isRead == 0){
         this.changeReadState()
      }
     
    },
    methods: {
      changeReadState(){
        const token = getToken()
        const info = { msid: this.msid,uid: this.uid }
        this.$store.dispatch('msg/changeReadState',info).then(result => {
          this.$store.dispatch('msg/getMsgCount',token).then(response => {
            alert(JSON.stringify(response))
            this.$store.state.msg.infoCount = response.obj.infoCount
          })
        })
      }
    }
  }
</script>

<style>
 
</style>