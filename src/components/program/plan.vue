<template>
  <div>
    <el-card class="box-card">
      <div class="block" style="width: 600px;margin-left: 400px;">
        <el-timeline>
          <el-timeline-item timestamp="2019/7/6" placement="top" type="success">
            <el-card>

              <span style="display: flex;justify-content: space-between">
								<div>
									<h4>XX水站水质异常问题已处理</h4>
									<p>焦亚杰 提交于 2019/7/6 20:46</p>
								</div>
								<div>
									<el-tag type="success" effect="dark">
										已解决
									</el-tag>
								</div>
							</span>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/7/5" placement="top" type="danger">
            <el-card>

              <span style="display: flex;justify-content: space-between">
								<div>
									<h4>xx水站水质出现问题</h4>
									<p>焦亚杰 提交于2019/7/5 20:46</p>
								</div>
								<div>
									<el-tag type="danger" effect="dark">
										严重问题
									</el-tag>
								</div>
							</span>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/7/4" placement="top" type="warning">
            <el-card>
              <span style="display: flex;justify-content: space-between">
								<div>
									<h4>xx水站设备故障</h4>
									<p>王小虎 提交于2019/7/4 20:46</p>
								</div>
								<div>
									<el-tag type="warning" effect="dark">
									未解决
									</el-tag>
								</div>
							</span>

            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/7/6" placement="top" type="success">
            <el-card>

              <span style="display: flex;justify-content: space-between">
								<div>
									<h4>XX水站水质异常问题已处理</h4>
									<p>焦亚杰 提交于 2019/7/6 20:46</p>
								</div>
								<div>
									<el-tag type="success" effect="dark">
										已解决
									</el-tag>
								</div>
							</span>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/7/5" placement="top" type="danger">
            <el-card>

              <span style="display: flex;justify-content: space-between">
								<div>
									<h4>xx水站水质出现问题</h4>
									<p>焦亚杰 提交于2019/7/5 20:46</p>
								</div>
								<div>
									<el-tag type="danger" effect="dark">
										严重问题
									</el-tag>
								</div>
							</span>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/7/4" placement="top" type="warning">
            <el-card>
              <span style="display: flex;justify-content: space-between">
								<div>
									<h4>xx水站设备故障</h4>
									<p>王小虎 提交于2019/7/4 20:46</p>
								</div>
								<div>
									<el-tag type="warning" effect="dark">
									未解决
									</el-tag>
								</div>
							</span>

            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </div>
</template>

<script>
</script>

<style>
  .text {
    font-size: 14px;
  }
  
  .item {
    padding: 18px 0;
  }
  
  .box-card {
    width: 100%;
  }
</style>