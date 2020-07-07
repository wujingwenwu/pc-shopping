<template>
<!--注册页面-->
 <div>
   <div class="register d-f j-c-c a-i-c">
     <div class="register1 d-f f-d-c a-i-c">
      <div class="register2 d-f j-c-c a-i-c">M</div>
      <div class="f-s-18 m-t-30">使用 XMall 账号 登录官网</div>
       <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username "></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login('ruleForm')">立即登录</el-button>
              <el-button type="primary" @click="logins('ruleForm')">立即注册</el-button>
             
            </el-form-item>
          </el-form>
     </div>
    
   </div>
   
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.register{
  background: url("./585aa600417d97c665a7d4451e8808e3.jpg");
  width: 100%;
  height: 722px;
}
.register1{
  width: 450px;
  height: 550px;
  background: white;
}
.register2{
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgb(219, 4, 4);
  font-size: 52px;
  color: white;
  margin-top: 50px;
}
</style>