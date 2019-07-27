<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="公开消息" name="first">
        <publicMsgTitle></publicMsgTitle>
      </el-tab-pane>
      <el-tab-pane label="私人消息" name="second">私人消息</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import publicMsgTitle from '@/components/info/msg/publicMsgTitle.vue'
  export default {
    data() {
      return {
        activeName: 'first'
        
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      'publicMsgTitle': publicMsgTitle
    }
  };
</script>

<style>

</style>