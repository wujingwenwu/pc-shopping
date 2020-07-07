<template>
 <div>
     <div class="d-f whole2"> 
      <div class="whole">综合排序</div>
       <div class="whole">价格从低到高</div>
       <div class="whole">价格从高到低</div>
       <div class="whole">综合排序</div>
       <Input v-model="value" placeholder="价格" style="width: 80px" />
       <div class=" m-l-10">-</div>
       <Input v-model="value1" placeholder="价格" style="width: 80px" class="m-l-10" />
          <Button  type="primary" class="m-l-10">确定</Button>
     </div>
     <div class="d-f whole3">
    
      <Card  v-for="(item,index) in arr" :key="index" >
      <div class="whole4">
        <div class="d-f f-d-c a-i-c whole5">
         <img :src="item.productImageBig" alt="" width="206" height="206">
         <div class="f-s-14 f-c-he m-t-10">{{item.productName}}</div>
         <div class="f-s-12 m-t-10">{{item.subTitle}}</div>
         <div class=" f-c-ho f-s-18 m-t-20 f-w">￥{{item.salePrice}}.00</div>
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
   
    },
   data () {
     return {
     arr:[],
     value:'',
       value1:'',
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
.whole4:hover{
    transform: translateY(-10px);
  box-shadow: 2px 2px 15px #999;
  transition:  all 0.5s;
 
}
</style>