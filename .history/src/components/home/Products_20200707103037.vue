<template>
 <!-- 热门商品 -->
 <div class="products">
   <div class="products1 d-f a-i-c">
    <div class=" m-l-20 f-s-18">{{obj.name}}</div>
   </div>
   <div class="d-f">
     <Card v-for="(item,index) in arra" :key="index" class="products2">
        <div style="text-align:center">
        <div class="picture">
            <img :src="item.picUrl" alt="" width="206" height="206">
             <div class="m-t-10">{{item.productName}}</div>
             <div class="m-t-10">{{item.subTitle}}</div>
             <div class=" f-c-ho f-s-18 f-w">￥{{item.salePrice}}.00</div>
           </div>
        </div>
    </Card>
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
        arra: {
      type: Array,
      default: () => []
    },
    obj:{
         type: Object,
      default: () => {} 
    }
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
.products{
    position: relative;
    top: 260px;
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
.products2{
    width: 609px;
    height: 430px;
    background: white;
}
</style>