<template>
 <!-- 热门商品 -->
 <div class="products">
   <div class="products1 d-f a-i-c">
    <div class=" m-l-20 f-s-18">{{obj.name}}</div>
   </div>
   <div class="d-f picture1">
     <Card style="width:305px" v-for="(item,index) in arra" :key="index" class="picture2">
        <div style="text-align:center">
        <div class="picture">
            <img :src="item.picUrl" alt="" width="280" height="180">
            
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
</style>