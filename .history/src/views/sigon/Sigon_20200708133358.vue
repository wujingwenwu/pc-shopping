<template>
  <!--登录页面-->
  <div>
    <div class="register d-f j-c-c a-i-c">
      <div class="register1 d-f f-d-c a-i-c">
        <div class="register2 d-f j-c-c a-i-c">M</div>
        <div class="f-s-18 m-t-30">使用 XMall 账号 登录官网</div>
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
          <FormItem label="用户名" prop="username">
            <Input v-model="formCustom.username " placeholder="请输入用户名" class="input"/>
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input type="password" v-model="formCustom.password" placeholder="请输入密码" class="input"/>
          </FormItem>
        </Form>
          <div class="vpat">
          <div ref="vaptcha" style="width:300px;height:36px">
            <div class="vaptcha-init-main">
              <div class="vaptcha-init-loading">
                <a href="https://www.vaptcha.com/" target="_blank">
                  <img src="https://cdn.vaptcha.com/vaptcha-loading.gif" />
                </a>
                <span class="vaptcha-text">VAPTCHA启动中...</span>
              </div>
            </div>
          </div>
        </div>
        <div class="d-f m-t-10">
          <Checkbox v-model="single">记住密码</Checkbox>
           <span class=" m-l-40">
            <span class="item" @click="clickIt">注册XMall账号</span>
            <span class="items ">忘记密码</span>
            </span>
        </div>
        <Button type="success" class="item1" @click="login">登录</Button>
        <Button type="error" class="item1">返回</Button>
        <div class="item2"></div>
        <div class="d-f m-t-20">
          其它账号登录:
          <i class="iconfont icon-gongzhonghao"></i>
          <i class="iconfont icon-tubiao214"></i>
          <i class="iconfont icon-QQ"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const extend = function(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
};
export default {
  name: "",
  props: {},
  data() {
    return {
      single: false,
      formCustom: {
        username: "",
        password: ""
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
        ]
      }
    };
  },
  components: {},
  methods: {
    clickIt(){
    this.$router.push('/register')
    },
       loadV2Script() {
      if (typeof window.vaptcha === "function") {
        //如果已经加载就直接放回
        return Promise.resolve();
      } else {
        return new Promise(resolve => {
          var script = document.createElement("script");
          script.src = "https://v.vaptcha.com/v3.js";
          script.async = true;
          script.onload = script.onreadystatechange = function() {
            if (
              !this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete"
            ) {
              resolve();
              script.onload = script.onreadystatechange = null;
            }
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
    },
    
    login(){
       if (this.single === false) {
        this.$Message.error("必须点击");
      }
      if (this.single === true) {
        this.$api
          .login({
            username: this.formCustom.username,
            password: this.formCustom.password
          })
          .then(res => {
             if (this.password) {
              this.$Message.error(res.msg);
            } else if (this.username) {
              this.$Message.error(res.msg);
            } else {
              this.$Message.success(res.msg);
            }
        
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
        var config = extend(
      {
        vid: "5efc030de988dd2fc1b8e91b",
        container: this.$refs.vaptcha,
        style: this.vpStyle
      },
      this.$props
    );
    this.loadV2Script().then(() => {
      window.vaptcha(config).then(obj => {
        this.$emit("input", obj);
        obj.render();
      });
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.register {
  background: url("./538780b76de16135fae790852ab51f32.jpg");
  width: 100%;
  height: 722px;
}
.register1 {
  width: 450px;
  height: 570px;
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
.items {
  color: rgb(32, 32, 226);
  margin-left: 20px;
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