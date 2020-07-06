<template>
 <div>
   <div class="heads d-f j-c-s-a a-i-c">
    <div class="heads1 d-f j-c-c a-i-c">M</div>
    <div class="d-f">
    <div class="d-f heads2">
     <Input v-model="value" suffix="ios-search" placeholder="请输入商品信息" style="width: 300px" />
     <div class=" f-c-b f-s-18  m-l-40">全部商品</div>
     <div class=" f-c-b f-s-18 m-l-40">捐赠</div>
     </div>
     <div class=" f-c-hu heads2">|</div>
     <div class="d-f heads2">
       <Icon type="ios-contact font" /> 
       <Icon type="ios-cart-outline font" class=" m-l-40"/>
     </div>
    </div>
   </div>
    <div class="heada">
     <div>·</div>
     <div>首页</div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
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
     value:''
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
    font-size: 26px;
    color: white;
}
.heads2{
    padding: 0 20px;
}
.heada{
    width: 100%;
    height: 90px;
    background: rgb(247, 247, 247);
}
</style>