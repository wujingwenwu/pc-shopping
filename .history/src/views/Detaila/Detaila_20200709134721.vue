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
   let id = ""
    //  this.arr = window.location.search.substring('item.productId')
      this.productId = afterUrl
      .substring(afterUrl.indexOf("=") + 1)
      .toUpperCase();
    this.id=this.$route.query.id
     console.log(this.id);
     this.$api.detail(this.id ).then(res=>{
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