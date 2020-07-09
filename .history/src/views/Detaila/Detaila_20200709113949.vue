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
   obj:{}
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
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