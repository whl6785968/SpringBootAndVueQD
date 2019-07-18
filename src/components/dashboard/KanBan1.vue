<template>
  <div style="height: 160px;width: 300px;margin: 0 auto;overflow:hidden;display: inline-flex">
    <div style="width: 130px;height: 160px; text-align: center;">
      <a>
        <h3>正常设备</h3>
        <p><cite class="normal">50</cite></p>
      </a>
    </div>
    <div style="width: 130px;height: 160px;text-align: center;">
      <a>
        <h3>异常设备</h3>
        <p><cite class="error">10</cite></p>
      </a>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .normal {
    font-style: normal;
    font-size: 30px;
    font-weight: 300px;
    color: #009688;
  }
  
  .error {
    font-style: normal;
    font-size: 30px;
    font-weight: 300px;
    color: #DD524D;
  }
</style>