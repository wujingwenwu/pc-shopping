<template>
 <!-- 热门商品 -->
 <div class="products">
   <div>
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
    top: 250px;
    left: 170px;
}
</style>