<template>
 <div>
  <Rotation></Rotation>
 </div>
</template>

<script>
import Rotation from '../components/home/Rotation'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
     Rotation
   },
   methods: {

   },
   mounted() {
      this.$api.home().then(res=>{
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