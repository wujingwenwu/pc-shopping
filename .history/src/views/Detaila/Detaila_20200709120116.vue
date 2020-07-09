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
   let arr = {}
    //  this.arr = window.location.search.substring('item.productId')
    this.arr=this.$route.query.id
     console.log(this.arr);
     this.$api.detail(this.arr).then(res=>{
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