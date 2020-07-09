<template>
 <!-- 热门商品 -->
 <div class="products m-t-20">
   <div class="products1 d-f a-i-c">
    <div class=" m-l-20 f-s-18 c-p">{{obj.name}}</div>
   </div>
   <div class="d-f products5 c-p m-t-20">
     <Card v-for="(item,index) in arra" :key="index" class="products2" >
        <div style="text-align:center">
        <div class="picture">
        
      
            <img :src="item.picUrl" alt="" width="206" height="206" class="m-t-10">
             <div class="m-t-10 products3">{{item.productName}}</div>
             <div class="m-t-10 f-c-hu f-s-12">{{item.subTitle}}</div>
             <div>
             <div class=" f-c-ho f-s-18 f-w m-t-10">￥{{item.salePrice}}.00</div>
             <div class="d-f products4">
             <Button class="products6" @click="details(item)">查看详情</Button>
               <Button type="primary" class="m-l-10" @click="shopping(index)">加入购物车</Button>
             </div>
             </div>
           
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
        arra: {
      type: Array,
      default: () => []
    },
    obj:{
         type: Object,
      default: () => {} 
    }
    },
   data () {
     return {
    
   }
   },
   components: {

   },
   methods: {
    details(item){
     window.open("/detaila?item.productId="+ item.productId)
    //  this.$router.push({query:{id:item.productId}})
    },
       shopping(index){
      this.$api.addCart(this.arrx[index].productId).then(res=>{
         this.$Message.success(res.msg);
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
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
.products{
    position: relative;
    top: 260px;
    margin-left: 170px;
}
.products1{
    width: 1220px;
    height: 60px;
    
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0 1px 7px rgba(0,0,0,0.06);
    background: linear-gradient(#fbfbfb,#ececec);
}
.products2{
    width: 609px;
    height: 430px;
    background: white;
}
.products2:hover{
 transform: translateY(-10px);
 box-shadow: 2px 2px 10px;
}
.products3{
    font-size: 18px;
}
.products4{
    position: absolute;
    left: 180px;
    margin-top: -25px;
    display: none;
}
.products2:hover .products4{
     display: block;
}
</style>