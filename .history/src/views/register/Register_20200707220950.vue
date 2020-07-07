<template>
<!--注册页面-->
 <div>
   <div class="register d-f j-c-c a-i-c">
     <div class="register1 d-f f-d-c a-i-c">
      <div class="register2 d-f j-c-c a-i-c">M</div>
      <div class="f-s-18 m-t-30">使用 XMall 账号 登录官网</div>
       <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="用户名" prop="username">
            <Input v-model="formCustom.username " placeholder="请输入用户名" class="input"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input type="password" v-model="formCustom.password" placeholder="请输入密码" class="input"></Input>
        </FormItem>
         <FormItem label="再次输入" prop="passwords">
            <Input type="password" v-model="formCustom.passwords" placeholder="请输入密码" class="input"></Input>
        </FormItem>
       </Form>
     </div>
    
   </div>
   
 </div>
</template>
<script src="https://v.vaptcha.com/v3.js"></script>
<script>
 export default {
   name:'',
   props:{
  
    },
   data () {
     return {
     formCustom:{
         username: "",
        password: "",
        passwords:"",
     },
      ruleCustom: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-10位之间",
            trigger: "blur"
          }
        ],
        passwords: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-10位之间",
            trigger: "blur"
          }
        ],
      }
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
  border-radius: 15px;
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
.input{
  width: 300px;
  
}
.ivu-input{
  height: 50px;
 
}
</style>