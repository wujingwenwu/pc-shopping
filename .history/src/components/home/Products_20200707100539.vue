<template>
 <!-- 热门商品 -->
 <div class="products">
   <div class="products1">
    <div>{{obj.name}}</div>
   </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
        arr: {
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
    background: #333333;
}
</style>