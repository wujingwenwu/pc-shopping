<template>
 <div>
     <div class="d-f"> 
      <div class="whole">综合排序</div>
       <div class="whole">价格从低到高</div>
       <div class="whole">价格从高到低</div>
       <div class="whole">综合排序</div>
       <Input v-model="value" placeholder="价格" style="width: 80px" />
       <div class="whole1"></div>
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
      this.$api.allGoods({
          page:1,
          size: 10
      }).then(res=>{
      this.arr=res.data.productId
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
.whole1{
    width: 20px;
    height: 1px;
    background: #0000;
}
</style>