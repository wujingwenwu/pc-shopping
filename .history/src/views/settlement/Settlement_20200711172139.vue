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
     msg:[],
     list:[]
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
    this.msg = this.$route.query.msg;
    console.log(this.msg);
      this.$api.list().then(res=>{
      this.list=res.data
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