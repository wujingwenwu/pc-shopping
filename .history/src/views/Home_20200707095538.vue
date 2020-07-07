<template>
 <div>
  <Rotation :arr='arr'></Rotation>
  <Picture :arrs='arrs'></Picture>
  <Products :arra='arra' :obj="obj"></Products>
 </div>
</template>

<script>
import Rotation from '../components/home/Rotation'
import Picture from '../components/home/Picture'
import Products from "../components/home/Products"
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     arr:[],
     arrs:[],
      arra:[],
      obj:{}
   }
   },
   components: {
     Rotation,
     Picture,
     Products
   },
   methods: {

   },
   mounted() {
      this.$api.home().then(res=>{
        this.arr=res.data[0].panelContents
        this.arrs=res.data[1].panelContents
          this.arra=res.data[2].panelContents
          this.obj = res.data[2].name
          console.log(this.obj);
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