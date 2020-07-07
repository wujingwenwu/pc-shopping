<template>
 <div>
    
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
      this.$api.allGoods().then(res=>{
      this.arr=res.data
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