<template>
 <!-- 热门商品 -->
 <div>
   <div>
    <div>{{obj}}</div>
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

</style>