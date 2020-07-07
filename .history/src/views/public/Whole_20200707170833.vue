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

   }
   },
   components: {

   },
   methods: {
      
   },
   mounted() {
      this.$api.allGoods(page,size,sort).then(res=>{
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