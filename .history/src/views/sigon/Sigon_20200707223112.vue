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
            我已阅读并同意遵守
            <span class="item">法律声明</span>和
            <span class="item">隐私条款</span>
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

</style>