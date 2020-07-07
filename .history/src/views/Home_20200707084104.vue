<template>
 <div>
  <Rotation :arr='arr'></Rotation>
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
     arr:[],
     arrs:[]
   }
   },
   components: {
     Rotation
   },
   methods: {

   },
   mounted() {
      this.$api.home().then(res=>{
        this.arr=res.data[0].panelContents
        this.arrs=res.data[1].panelContents
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