<template>
 <div>
  <Rotation :arr='arr'></Rotation>
  <Picture :arrs='arrs'></Picture>
  <Products :arra='arra' :obj="obj"></Products>
  <Selected  :arrz='arrz' :objz="objz"></Selected>
  <Periphery :arrx='arrx' :objx="objx"></Periphery>
 </div>
</template>

<script>
import Rotation from '../components/home/Rotation'
import Picture from '../components/home/Picture'
import Products from "../components/home/Products"
import Selected from '../components/home/Selected'
import Periphery from '../components/home/Periphery'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     arr:[],
     arrs:[],
      arra:[],
      obj:{},
      arrz:[],
      objz:{},
      arrx:[],
      objx:{}
   }
   },
   components: {
     Rotation,
     Picture,
     Products,
     Selected,
     Periphery,
   },
   methods: {

   },
   mounted() {
      this.$api.home().then(res=>{
        this.arr=res.data[0].panelContents
        this.arrs=res.data[1].panelContents
          this.arra=res.data[2].panelContents
          this.obj = res.data[2]
          this.arrz=res.data[3].panelContents
          this.objz = res.data[3]
           this.arrx=res.data[4].panelContents
          this.objx = res.data[4]
              this.arrx=res.data[4].panelContents
          this.objx = res.data[4]
          
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