<template>
  <div class="m-t-20">
    <!--品牌周边-->
    <div class="products "> 
      <div class="products1 d-f a-i-c">
        <div class="m-l-20 f-s-18 c-p">{{objx.name}}</div>
      </div>
      
   <div class="d-f selected c-p m-t-20">
      <div v-for="(item,index) in arrx" :key="index">
      <div v-if="index<1" class="logo1">
       <img :src="item.picUrl" alt="" width="609" height="436" >
      </div>
      <div class="selected1 d-f f-d-c a-i-c" v-else>
      <img :src="item.picUrl" alt="" width="200" height="212" class="logo">
      <div class="m-t-10">{{item.productName}}</div>
      <div class="m-t-10 f-c-hu">{{item.subTitle}}</div>
      <div class="f-c-ho m-t-30 f-w f-s-18">￥{{item.salePrice}}.00</div>
       <div class="d-f products4">
             <Button @click="details">查看详情</Button>
               <Button type="primary" class="m-l-10">加入购物车</Button>
             </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    arrx: {
      type: Array,
      default: () => []
    },
    objx: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.products1 {
  width: 1220px;
  height: 60px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.products{
    position: relative;
    top: 285px;
    margin-left: 170px;
}
.selected{
    flex-wrap: wrap;
    width: 1220px;
}
.selected1{
    width: 304px;
    height: 436px;
    background: white;
    
}
.logo{
  margin-top: 40px;
}
.products4{
  margin-top: -28px;
  margin-left: -70px;
  display: none;
}
.selected1:hover .products4{
  display: block;
}
.selected1:hover{
  transform: translateY(-10px);
  box-shadow: 2px 2px 15px #999;
  transition:  all 0.5s;
  z-index: 999999s;
}
.logo1:hover:before{
             content:"";
            position:absolute;
            width:100%;
            height:100%;
            box-shadow:inset 1px 1px 10px;
            -webkit-box-shadow:0 0 30px #ccc inset;
            -moz-box-shadow:0 0 30px #ccc inset;
            -o-box-shadow:0 0 30px #ccc inset;
    
}
.logo1{
  width: 609px;
  height: 436px;
   position: relative;
  display:inline-block;
   *display:inline;
}
</style>