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
      this.$api.allGoods().then(res=>{
          console.log(res);
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