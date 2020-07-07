<template>
 <div>
     aaaaa
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

</style>