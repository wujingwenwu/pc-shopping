<template>
 <div>
   <div class="details">
   
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
      arr:[]
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
       this.arr=res.data.result.productImageSmall
       console.log(this.arr);
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
}
</style>