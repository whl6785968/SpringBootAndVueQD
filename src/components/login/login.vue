<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" label-position="left" class="demo-ruleForm login-container">
      <span class="title" style="margin-left: 150px;"><h3>BOSITU管理系统</h3></span>
      <el-form-item style="text-align: center;" label="账号" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off" size="medium"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center;" label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" size="medium"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
        //				else {
        //					if(this.ruleForm.checkPass !== '') {
        //						this.$refs.ruleForm.validateField('checkPass');
        //					}
        //					callback();
        //				}
      };

      var validateUsername = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          password: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          username: [{
            validator: validateUsername,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            alert('submit!');
            this.$store.dispatch('user/login', this.ruleForm).then(result => {
              if(result.token != null) {
                this.$router.push("/home")
              } else {
                this.$router.push("/login")
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
      }
    }
  }
</script>

<style lang="less" scoped>
 .login{
    display: flex;
    justify-content: center;
    align-items: center;
    height:838px;
    background-image:url( https://docs-1255840532.cos.ap-shanghai.myqcloud.com/3968.jpg );
    background-size: cover;
  }
  body{
    margin: 0px;
  }
 /**{
    margin: 0;
  }*/
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>