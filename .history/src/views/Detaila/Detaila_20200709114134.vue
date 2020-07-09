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
     let obj=''
     this.obj=window.location.search.substring("id");
     console.log(this.obj);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>