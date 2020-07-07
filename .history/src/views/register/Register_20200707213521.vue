<template>
<!--注册页面-->
 <div>
   <div class="register d-f j-c-c a-i-c">
     <div class="register1 d-f f-d-c a-i-c">
      <div class="register2 d-f j-c-c a-i-c">M</div>
      <div class="f-s-18 m-t-30">使用 XMall 账号 登录官网</div>
       <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="用户名" prop="username">
            <Input v-model="formCustom.username " placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input type="password" v-model="formCustom.password" placeholder="请输入密码"></Input>
        </FormItem>
       </Form>
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
     formCustom:{
      
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