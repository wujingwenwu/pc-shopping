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
    <div class="f-s-18">{{obj.productName}}</div>
    <div class="d-f">
    <div>{{obj.subTitle}}</div>
    <div>￥{{}}.00</div>
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
      obj:{}
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
</style>