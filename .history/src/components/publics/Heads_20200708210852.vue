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
        <div v-if="this.username===null">
          <Icon type="ios-contact font" class="c-p headq2" @click="clickItem"/>
        </div>



        <div v-else-if="this.username !==null">
          <div>
           <Icon type="ios-contact font" class="c-p headq2" @click="clickItem"/>
           <div>
           <i class="iconfont icon-shangsanjiaoxing icons"></i>
            <div class="title"></div>
           </div>
           </div>
        </div>



          <div class="imagess">
           <Icon type="ios-cart-outline font" class="m-l-40 c-p headq2 " />
           <div class="p-a images">
             <div class="images1">
             <div class="d-f m-t-20 m-l-20 titlea">
             <div class="images2"></div>
             <div class=" f-c-ho images3 m-l-20">￥ &nbsp;0</div>
             <div class=" f-c-hu m-l-10 images3">x&nbsp;1</div>
             </div>
             <div class="d-f images4">
               <div>
                <div class=" f-s-12 m-t-10 m-l-20">共1件商品</div>
                <div class=" f-s-16 m-l-20 m-t-10">合计:<span class=" f-c-ho">￥0</span></div>
               </div>
               <Button type="primary" class="shopping" size="large">去购物</Button>
             </div>
             </div>
             <i class="iconfont icon-shangsanjiaoxing as"></i>
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
      value: "",
      username:''
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
  mounted() {
    this.username=localStorage.getItem('username')
    console.log(this.username);
  },
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
.as{
  color: white;
  font-size: 20px;
  margin-left: 40px;
}
.icons{
   color: white;
  font-size: 20px;
}
.images1{
  width: 300px;
  height: 200px;
  background: white;
  position: absolute;
  top: 20px;
  left: -220px;
  z-index: 9999;
  border-radius: 10px;
}
.images2{
  width: 80px;
  height: 80px;
  border: 1px solid ;
}
.images3{
  margin-top: 30px;
}
.images4{
  width: 300px;
  height: 80px;
  background: rgb(247, 247, 247);
  margin-top: 18px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.shopping{
  margin-left: 105px;
  margin-top: 30px;
}
.images{
  display: none;
}
.imagess:hover .images{
  display: block;
}
.title{
  width: 100px;
  height: 400px;
  background: white;
}
</style>