<template>
<!--注册页面-->
 <div>
   <div class="register d-f j-c-c a-i-c">
     <div class="register1 d-f f-d-c a-i-c">
      <div class="register2 d-f j-c-c a-i-c">M</div>
      <div class="f-s-18 m-t-30">使用 XMall 账号 登录官网</div>
       <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name">
        </FormItem>
        <FormItem label="Password" prop="passwd">
            <Input type="password" v-model="formCustom.passwd">
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