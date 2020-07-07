<template>
 <div>
     <div class="d-f whole2"> 
      <div class="whole">综合排序</div>
       <div class="whole">价格从低到高</div>
       <div class="whole">价格从高到低</div>
       <div class="whole">综合排序</div>
       <Input v-model="value" placeholder="价格" style="width: 80px" />
       <div class=" m-l-10">-</div>
       <Input v-model="value" placeholder="价格" style="width: 80px" class="m-l-10" />
          <Button  type="primary" class="m-l-10">确定</Button>
     </div>
     <div v-for="(item,index) in arr" :key="index">
      <img :src="item" alt="">
     
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
     arr:[],
     value:''
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
.whole{
    padding: 10px 20px;
}
.whole2{
    margin-left: 170px;
}
</style>