<template>
 <div>
  <div class="products1 d-f a-i-c">
    <div class=" m-l-20 f-s-18 c-p">购物清单</div>
   </div>
   <div class="shopping d-f">
   <div>商品信息</div>
   <div class="d-f p-a">
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
</style>