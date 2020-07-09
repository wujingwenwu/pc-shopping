<template>
<!-- 头部 -->
  <div>
    <div class="heads d-f j-c-s-a a-i-c">
      <div class="d-f headq">
        <div class="heads1 d-f j-c-c a-i-c c-p">M</div>
        <div class="headsz d-f j-c-c a-i-c">XMall商城官网</div>
      </div>
      <div class="d-f">
        <div class="d-f heads2">
          <Input v-model="value" suffix="ios-search" placeholder="请输入商品信息" style="width: 300px" />
          <div class="f-c-b m-l-40 c-p headq1" @click="click">全部商品</div>
          <div class="f-c-b m-l-40 c-p headq1">捐赠</div>
        </div>
        <div class="f-c-hu heads2">|</div>
        <div class="d-f heads2">
          <Icon type="ios-contact font" class="c-p headq2" @click="clickItem"/>
          <div>
           <Icon type="ios-cart-outline font" class="m-l-40 c-p headq2 " />
           <div class="p-r images">
            
           </div>
          </div>
          
          
        </div>
      </div>
    </div>
    <div class="heada d-f a-i-c">
      <div class="heada1 dian">·</div>
      <div class="f-w heada1 heada3" @click="clickd">首页</div>
      <div class="heada1">·</div>
      <div class="heada1 heada3" @click="click">全部</div>
      <div class="heada1">·</div>
      <div class="heada1 heada3">品牌周边</div>
      <div class="heada1">·</div>
      <div class="heada1 heada3">捐赠名单</div>
      <div class="heada1">·</div>
      <div class="heada1 heada3">后台管理系统</div>
      <div class="heada1">·</div>
      <div class="heada1 heada3">XPay支付系统</div>
      <div class="heada1">·</div>
      <div class="heada1 heada3">XBoot开发平台</div>
      <div class="heada1">·</div>
      <div class="heada1 heada3">宣传视频</div>
      <div class="heada1">·</div>
      <div class="heada1 heada3">Github</div>
      <div class="heada1">·</div>
      <div class="heada1 heada3">商用授权</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      value: ""
    };
  },
  components: {},
  methods: {
    click(){
      this.$router.push('/whole')
    },
    clickItem(){
       this.$router.push('/sigon')
    },
    clickd(){
      this.$router.push("/")
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.heads {
  width: 100%;
  height: 100px;
  background: #000000;
}
.heads1 {
  color: black;
  background: white;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  font-size: 24px;
}
.font {
  font-size: 26px;
}
.heads2 {
  padding: 0 20px;
}
.heada {
  width: 100%;
  height: 90px;
  background: rgb(247, 247, 247);
}
.heada1 {
  padding: 0 4px;
}
.dian {
  margin-left: 180px;
}
.headq:hover > .headsz {
  visibility: visible;
}
.headsz {
  width: 100px;
  height: 20px;
  background: white;
  position: absolute;
  left: 224px;
  top: 56px;
  visibility: hidden;
}
.headq1 {
  color: rgb(200, 200, 200);
}
.headq1:hover {
  color: white;
}
.headq2 {
  color: rgb(200, 200, 200);
}
.headq2:hover {
  color: white;
}
.heada3:hover {
  color: rgb(65, 65, 236);
  cursor: pointer;
}
</style>