<template>
 <div class="shoppinfg">
  <div class="products1 d-f a-i-c">
    <div class=" m-l-20 f-s-18 c-p">购物清单</div>
   </div>
   <div class="shopping d-f a-i-c j-c-s-b">
   <div class="m-l-20">商品信息</div>
   <div class="d-f shopping2 ">
    <div class="shopping1">单价</div>
    <div class="shopping1">数量</div>
    <div class="shopping1">小计</div>
    <div class="shopping1">操作</div>
   </div>
   </div>
   <div class="shopping3">
   
      <div v-for="(item,index) in arr" :key="index">
      <div class="d-f shopping5 m-l-20">
    <Checkbox class="m-t-30"></Checkbox>
    <div class="shopping4 m-l-10">
    <img :src="item.productImageBig" alt="" width="80" height="80">
    </div>
    <div class="d-f shopping6">
     <div class="shopping1">￥{{item.salePrice}}</div>
     <div class="shopping1">{{item.count}}</div>
    <div class="shopping1">￥{{item.salePrice}}</div>
    <Icon type="md-close-circle" class=" circle" />
    </div>
      </div>
   </div>
   <div class="shopping7"></div>
   <div class="d-f j-c-s-b">
   <div class="d-f">
    <Checkbox class="">全选</Checkbox>
    <div class=" f-c-hu f-s-12">删除选中的商品</div>
    </div>
    <div class="d-f">
     <div>
     <div class=" f-s-18">已选中<span class=" f-c-ho m-l-10 f-s-18">0</span><span class="m-l-10 f-s-18">件商品</span></div>
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
      arr:[]
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
      this.$api.getCart().then(res=>{
        this.arr=res.data
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.shoppinfg{
  height: 600px;
}
.products1{
    width: 1220px;
    height: 60px;
    margin-left: 170px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0 1px 7px rgba(0,0,0,0.06);
    background: linear-gradient(#fbfbfb,#ececec);
}
.shopping{
  width: 1220px;
  height: 50px;
   margin-left: 170px;
    box-shadow: 0 1px 7px rgba(0,0,0,0.06);
    background: linear-gradient(#fbfbfb,#ececec);
}
.shopping1{
  padding: 0 40px;
}
.shopping2{
 margin-right: 50px;
}
.shopping3{
  width: 1220px;
 
  background: white;
  margin-left: 170px;
}
.shopping4{
  width: 85px;
  height: 85px;
  border: 1px solid rgb(216, 211, 211);
}
.shopping5{
  padding: 30px 0;
}
.shopping6{
  margin-left: 600px;
}
.circle{
  position: absolute;
  right: 222px;
}
.shopping7{
  width: 1220px;
  height: 1px;
  background: rgb(196, 192, 192);
  box-shadow: 1px 1px 5px;
}

</style>