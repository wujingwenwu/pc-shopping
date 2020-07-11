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
     msg:[]
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
    this.msg = this.$route.query.msg;
    console.log(this.msg);
    
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>