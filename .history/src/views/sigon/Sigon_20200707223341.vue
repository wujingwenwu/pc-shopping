<template>
<!--登录页面-->
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
         
        </Form>
        <div class="d-f">
          <Checkbox v-model="single">
            记住密码<span>
            <span class="item">注册XMall账号</span>|
            <span class="item">忘记密码</span>
            </span>
          </Checkbox>
        </div>
        <Button type="success" class="item1">登录</Button>
        <Button type="success" class="item1">返回</Button>
        <div class="item2"></div>
        <div class="d-f m-t-20">
          <div class="f-c-hu f-s-12 d-f">
            如果您已拥有 XMall 账号，则可在此
            <div class="item f-s-12" @click="sigon">登陆</div>
          </div>
        </div>
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
        formCustom: {
        username: "",
        password: "",
        
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
.register {
  background: url("./538780b76de16135fae790852ab51f32.jpg");
  width: 100%;
  height: 722px;
}
.register1 {
  width: 450px;
  height: 550px;
  background: white;
  border-radius: 15px;
}
.register2 {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgb(219, 4, 4);
  font-size: 52px;
  color: white;
  margin-top: 50px;
}
.input {
  width: 300px;
  margin-left: 30px;
}
.ivu-input {
  height: 50px;
}
.item {
  color: rgb(32, 32, 226);
  margin-left: 5px;
}
.item1 {
  width: 300px;
  height: 50px;
  margin-top: 20px;
}
.item2 {
  width: 300px;
  height: 1px;
  background: rgb(197, 195, 195);
  margin-top: 30px;
}
</style>