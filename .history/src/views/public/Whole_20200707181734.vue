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
     <div class="d-f whole3">
    
      <Card style="width:320px" v-for="(item,index) in arr" :key="index">
        <div>
         <img :src="item" alt="">
        </div>
    </Card>
    
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
      this.arr=res.data
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
.whole3{
    width: 1220px;
    flex-wrap: wrap;
    margin-left: 170px;
}
.whole4{
  width: 305px;
  height: 430px;
  background: white;
}
</style>