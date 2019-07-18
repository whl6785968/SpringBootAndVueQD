<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" label-position="left" class="demo-ruleForm login-container" style="width: 350px;">
    <span class="title" style="margin-left: 150px;"><img src="../../../img/moon.png" style="width: 40px;height: 40px;"></span>
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
			    this.$store.dispatch('user/login', this.ruleForm).then( result => {
                if(result.token != null){
                  this.$router.push("/home")
                }
                else{
                  this.$router.push("/login")
                }
			     }   
			    )
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

<style lang="less">
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
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
