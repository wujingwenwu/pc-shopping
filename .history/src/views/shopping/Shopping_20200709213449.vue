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
.shoppinfg{
  margin-left: 170px;
}
.products1{
    width: 1220px;
    height: 60px;
    
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0 1px 7px rgba(0,0,0,0.06);
    background: linear-gradient(#fbfbfb,#ececec);
}
.shopping{
  width: 1220px;
  height: 50px;
    box-shadow: 0 1px 7px rgba(0,0,0,0.06);
    background: linear-gradient(#fbfbfb,#ececec);
}
.shopping1{
  padding: 0 40px;
}
.shopping2{
 
}
</style>