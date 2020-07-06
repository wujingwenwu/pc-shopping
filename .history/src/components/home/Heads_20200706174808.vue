<template>
 <div>
   <div class="heads d-f">
    <div class="heads1 d-f j-c-c a-i-c">M</div>
    <div class="d-f">
    <div class="d-f">
     <Input v-model="value" suffix="ios-search" placeholder="请输入商品信息" style="width: 300px" />
     <div class=" f-c-b f-s-18">全部商品</div>
     <div class=" f-c-b f-s-18">捐赠</div>
     </div>
     <div class=" f-c-hu">|</div>
     <div class="d-f">
       <Icon type="ios-contact" /> 
       <Icon type="ios-cart-outline font" />
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
.heads{
    width: 100%;
    height: 100px;
    background: #000000;
}
.heads1{
    color: black;
    background: white;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    font-size: 24px;
}
.font{
    font-size: 30px;
    color: white;
}
</style>