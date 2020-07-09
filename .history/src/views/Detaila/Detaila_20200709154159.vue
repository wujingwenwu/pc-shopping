<template>
 <div>
   <div class="details d-f a-i-c">
   <div class="d-f f-d-c">
    <div v-for="(item,index) in obj.productImageSmall" :key="index" >
    <div class="details1 d-f j-c-c a-i-c m-t-10 c-p">
    <img :src="item" alt="" width="54" height="54">
    </div>
    
    </div>
    </div>
    <div  class="d-f f-d-c">
    <div v-for="(item1,index1) in obj.productImageSmall" :key="index1">
    <div v-if="index1<1">
    <img :src="item1" alt="" width="404" height="404">
    </div>
    </div>
    </div>
    <div>
    <div class="name">{{obj.productName}}</div>
    <div class="d-f m-t-5">
    <div class=" f-c-hu m-t-10">{{obj.subTitle}}</div>
    <div class=" f-w Price">￥{{obj.salePrice}}.00</div>
    </div>
    <div class=" m-t-10 sale"></div>
    <div class="d-f m-t-30">
     <div class=" f-c-hu">数量</div>
       <el-input-number size="mini" v-model="num4"  :min="1" :max="10" class="num"></el-input-number>
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
      productId:'',
      obj:{},
      num4: 1
   }
   },
   components: {

   },
   methods: {
 
   },
   mounted() {
   let id =   window.location.search
     
      this.productId = id
      .substring(id.indexOf("=") + 1)
      .toUpperCase();
    // this.id=this.$route.query.id
     console.log(this.productId);
     this.$api.detail(this.productId ).then(res=>{
       this.obj=res.data.result
       console.log(this.obj);
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
.details{
  width: 1220px;
  height: 562px;
  background: white;
  border-radius: 10px;
  margin-left: 170px;
}
.details1{
  width: 80px;
  height: 80px;
  border: 0.5px solid rgb(231, 225, 225);
  border-radius: 5px;
  margin-left: 60px;
}
.Price{
  color: rgb(196, 10, 10);
  font-size: 22px;
  margin-left: 100px;
}
.name{
   font-size: 22px; 
}
.sale{
  width: 400px;
  height: 1px;
  background: #999;
}
.num{
  margin-left: 20px;
}
</style>