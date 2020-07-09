<template>
 <div>

 </div>
</template>

<script>
 export default {
   name:'',
   props:{
    obj:{}
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
     this.obj=window.location.search.substring("item");
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