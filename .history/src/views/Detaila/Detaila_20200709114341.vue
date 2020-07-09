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
     this.arr = window.location.search.substring('id')
     console.log(this.arr);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>