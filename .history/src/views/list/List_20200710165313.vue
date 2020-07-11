<template>
 <div>
   <div class="d-f">
   <div class="list">
   
   </div>
   <div>
   <div class="products1 d-f a-i-c j-c-s-b">
      <div class="m-l-20 f-s-18 c-p">收货地址</div>
       <Button label="large" size="small" class="list-title">添加收货地址</Button>
    </div>
      <div class="shopping d-f a-i-c">
        <div class="m-l-20">姓名</div>
        <div class="shopping1">详细地址</div>
        <div class="shopping1">电话</div>
    </div>
    <div class="list-title1">
      <div>
       <div>
       <div>你还未添加收货地址</div>
       <Button label="large" size="small" class="list-title">添加地址</Button>
       </div>
      </div>
      <div>
       
      </div>
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
.list{
    width: 210px;
    height: 530px;
    background: white;
    border-radius: 10px;
    margin-left: 170px;
}
.products1 {
  width: 950px;
  height: 60px;
  margin-left: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.list-title{
    margin-right: 20px;
}
.shopping {
  width: 950px;
  height: 40px;
  margin-left: 20px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.shopping1{
    padding: 0 150px;
}
.list-title1{
    width: 950px;
    height: 800px;
    background: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 20px;
}
</style>