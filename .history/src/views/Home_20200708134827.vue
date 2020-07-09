<template>
 <div>
  <Rotation :arr='arr'></Rotation>
  <Picture :arrs='arrs'></Picture>
   <Products :arra='arra' :obj="obj"></Products>
 <Selected  :arrz='arrz' :objz="objz"></Selected>
  <Ambitus :arrx='arrx' :objx="objx"></Ambitus>
  <Selecteds  :arrc='arrc' :objc="objc"></Selecteds>
  <Six :arrv='arrv'></Six>
 </div>
</template>

<script>
import Rotation from '../components/home/Rotation'
import Picture from '../components/home/Picture'
import Products from "../components/home/Products"
import Selected from '../components/home/Selected'
import Ambitus from '../components/home/Ambitus'
import Selecteds from '../components/home/Selecteds'
import Six from '../components/home/Six'
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
      objx:{},
       arrc:[],
      objc:{},
      arrv:[]
   }
   },
   components: {
     Rotation,
     Picture,
     Products,
     Selected,
     Ambitus,
     Selecteds,
     Six
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
              this.arrc=res.data[5].panelContents
          this.objc = res.data[5]
           this.arrv=res.data[6].panelContents
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