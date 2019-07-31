<template>
  <div style="width: 500px;">
    <el-card class="box-card" style="width: 650px;margin-left: 340px;margin-top: 0px;padding: 50px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="站点名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="站点位置" prop="poi">
          <el-select v-model="ruleForm.poi" placeholder="请选择站点位置">
            <el-option label="南京理工大学" value="南京理工大学"></el-option>
            <el-option label="东南大学" value="东南大学"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提交时间" required>
          <el-form-item prop="mdate">
            <el-date-picker v-model="ruleForm.mdate" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
            </el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="信息加急" prop="isemer">
          <el-switch v-model="ruleForm.isemer"></el-switch>
        </el-form-item>
        <el-form-item label="信息类型" prop="type">
          <el-radio-group v-model="ruleForm.type">
            <el-radio label="设备故障"></el-radio>
            <el-radio label="水质异常"></el-radio>
            <el-radio label="已修复"></el-radio>
            <el-radio label="其他"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="图片上传" prop="pic">
          <el-upload action="/uploadPic" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="handleSuccess">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="信息备注" prop="other">
          <el-input type="textarea" v-model="ruleForm.other"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
  import { getToken } from '@/utils/auth'
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          poi: '',
          mdate: '',
          isemer: false,
          type: '',
          other: '',
          uid: '',
          imgList: []
        },
        dialogImageUrl: '',
        dialogVisible: false,
        inject: ['reload'],
        rules: {
          name: [{
              required: true,
              message: '请输入站点名称',
              trigger: 'blur'
            },
            {
              min: 0,
              max: 20,
              message: '长度小于20',
              trigger: 'blur'
            }
          ],
          poi: [{
            required: true,
            message: '请选择站点位置',
            trigger: 'change'
          }],
          mdate: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          type: [{
            required: true,
            message: '请选择一个信息类型',
            trigger: 'change'
          }],
          other: [{
            required: true,
            message: '请填写信息被指',
            trigger: 'blur'
          }]
        }
      };
    },
    mounted() {
      this.getUserInfo()
      //    this.openConnect()
    },
    destroyed() {
      //    this.closeConnect()
    },
    methods: {
      getUserInfo() {
        this.$store.dispatch('user/getInfo', getToken).then(response => {
          this.ruleForm.uid = response.id
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            this.$store.dispatch('msg/sendNotice', this.ruleForm).then(result => {
              if(result.status == 200) {
                this.$message.success("提交成功")
                this.$store.dispatch('msg/send')
                this.$router.push("/msg")
              } else {
                this.$message.error("提交失败")
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleSuccess(response, file, fileList){
//      alert(response)
        this.ruleForm.imgList.push('../../../..'+response)
      }
    
    }
  }
</script>

<style>

</style>